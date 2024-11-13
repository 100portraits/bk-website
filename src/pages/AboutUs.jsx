import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-3xl font-bold ">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="mb-4">
          {/* Add your history content */}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-4">
          We are a community-driven workshop where students and staff can learn to repair their bikes.
        </p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Our Structure</h3>
          <p className="mb-2">We operate with:</p>
          <ul className="list-disc list-inside">
            <li>Volunteer Mechanics</li>
            <li>Workshop Hosts</li>
            <li>Community Members</li>
          </ul>
          <Link to="/get-involved" className="text-primary hover:underline mt-2 inline-block">
            → Join our team as a volunteer
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
        {/* Add partner logos/content */}
      </section>

      <section className="mb-8">
        <Link to="/news" className="text-primary hover:underline mt-2 inline-block">
          → Check out our latest news and other media
        </Link>
      </section>
    </div>
  )
}

export default AboutUs
