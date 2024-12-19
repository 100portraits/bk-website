import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

function NewsDetail() {
  const [newsItem, setNewsItem] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news" && slug.current == $slug][0]{
          title,
          slug,
          mainImage,
          publishedAt,
          summary,
          body,
          isExternal,
          externalLink
        }`,
        { slug }
      )
      .then((data) => setNewsItem(data))
      .catch(console.error)
  }, [slug])

  if (!newsItem) return <div>Loading...</div>

  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <Link to="/news" className="text-primary hover:underline mb-6 inline-block">
        ← Back to News
      </Link>
      
      <article className="mt-6">
        {newsItem.mainImage && (
          <img
            src={urlFor(newsItem.mainImage).width(1200).height(600).url()}
            alt={newsItem.title}
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
        )}
        
        <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
        
        <p className="text-gray-600 mb-6">
          {new Date(newsItem.publishedAt).toLocaleDateString()}
        </p>

        {newsItem.isExternal ? (
          <div>
            <p className="mb-6">{newsItem.summary}</p>
            <a 
              href={newsItem.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg inline-block hover:bg-opacity-90"
            >
              Read Full Article
            </a>
          </div>
        ) : (
          <div className="prose max-w-none">
            <PortableText value={newsItem.body} />
          </div>
        )}
      </article>
    </div>
  )
}

export default NewsDetail 