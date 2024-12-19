import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

function News() {
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"] | order(publishedAt desc) {
          title,
          slug,
          mainImage,
          publishedAt,
          summary,
          isExternal,
          externalLink
        }`
      )
      .then((data) => setNewsItems(data))
      .catch(console.error)
  }, [])

  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-4xl font-bold mb-6">News & Media</h1>
      
      <section className="mb-8">
        <p className="text-lg text-gray-600">
          Stay tuned for the latest updates, news, and media coverage about the Bike Kitchen UvA.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <article key={item.slug.current} className="bg-white rounded-lg shadow-md overflow-hidden">
            {item.isExternal ? (
              <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
                {item.mainImage && (
                  <img
                    src={urlFor(item.mainImage).width(600).height(400).url()}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </a>
            ) : (
              <Link to={`/news/${item.slug.current}`}>
                {item.mainImage && (
                  <img
                    src={urlFor(item.mainImage).width(600).height(400).url()}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </Link>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {item.isExternal ? (
                  <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    {item.title} ↗
                  </a>
                ) : (
                  <Link to={`/news/${item.slug.current}`} className="hover:text-primary">
                    {item.title}
                  </Link>
                )}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News
