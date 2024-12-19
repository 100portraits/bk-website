import React from 'react'

function GetInvolved() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-4xl font-bold mb-6">Get Involved</h1>
      
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="md:w-3/5">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="mb-4">
              If you'd like to do bike DIY frequently or get more involved with the Bike Kitchen, 
              you can join the Bike Kitchen community for €4 per month.
            </p>
            <a href="https://doneren.auf.nl/bike-kitchen" target="_blank" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
              Join Community
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Become a Team Member</h2>
            <p className="mb-4">
              Join us as a host or mechanic and help us grow! Let us know why you'd like to be involved 
              and how we may approach you.
            </p>
            <a href="mailto:bikekitchenuva@gmail.com" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
              Send us an email
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Donate to the Bike Kitchen</h2>
            <p className="mb-4">
              Your donations help us keep the workshop running and improve our facilities.
            </p>
            <a href="https://doneren.auf.nl/bike-kitchen" target="_blank" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
              Donate
            </a>
          </section>
        </div>
        
        <div className="md:w-2/5">
          <img 
            src="https://bikecity.amsterdam.nl/wp-content/uploads/2024/05/d90ab7a8-a338-4138-9945-4b2fdb99b856.jpeg"
            alt="Bike Kitchen Workshop"
            className="w-full h-full object-cover rounded-lg sticky top-24"
          />
        </div>
      </div>
    </div>
  )
}

export default GetInvolved 