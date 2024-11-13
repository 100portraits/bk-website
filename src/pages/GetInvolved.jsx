import React from 'react'

function GetInvolved() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-3xl font-bold mb-4">Get Involved</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-4">
          If you'd like to do bike DIY frequently or get more involved with the Bike Kitchen, 
          you can join the Bike Kitchen community for €3.99 per month.
        </p>
        <a href="#" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
          Join Community
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Volunteer With Us</h2>
        <p className="mb-4">
          Become a team member and help us grow! Let us know why you'd like to be involved 
          and how we may approach you.
        </p>
        <a href="#" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
          Apply to Volunteer
        </a>
      </section>
      {/* Add a section for donating */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Donate to the Bike Kitchen</h2>
        <p className="mb-4">
          Your donations help us keep the workshop running and improve our facilities.
        </p>
        <a href="#" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
          Donate
        </a>
      </section>
    </div>
  )
}

export default GetInvolved 