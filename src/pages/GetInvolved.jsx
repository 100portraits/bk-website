import React from 'react'
import joinPoster from '../assets/join_poster.jpg'
import joinCommunity from '../assets/joinCommunity.jpg'

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

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Membership Benefits</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access to our DIY repair space during opening times</li>
                <li>Attend interesting workshops, both related to cycling and other topics</li>
                <li>Join organised ride-outs in-and around Amsterdam</li>
                <li>Have monthly drinks and other fun activities together with other cycling enthusiasts</li>
              </ul>
              <p className="text-sm italic mb-4">
                Note: A Bike Kitchen membership for the academic year 2024-2025 has a minimum term of 3 months. 
                To cancel, email universiteitsfonds@uva.nl
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">How to Sign Up</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>Click the "Join Community" button below to go to the Amsterdam University Fund (AUF) page</li>
                <li>Select: "I donate.."</li>
                <li>Choose: "Monthly"</li>
                <li>Select: "Enter a donation amount"</li>
                <li>Enter the donation amount of: €4,-</li>
              </ol>
              <p className="mb-4">You will receive a confirmation email from AUF about your membership.</p>
            </div>

            <a href="https://doneren.auf.nl/bike-kitchen" target="_blank" className="bg-primary text-secondary px-4 py-2 rounded inline-block mb-4">
              Join Community
            </a>
          </section>
        </div>
        
        <div className="md:w-2/5 h-min">
          <img 
            src={joinCommunity}
            alt="Join our community"
            className="w-full h-full object-cover rounded-lg sticky top-24"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-10">
        <div className="md:w-2/5 h-min">
          <img 
            src={joinPoster}
            alt="Bike Kitchen Workshop"
            className="w-full h-full object-cover rounded-lg sticky top-24"
          />
        </div>
        
        <div className="md:w-3/5">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Become a Team Member</h2>
            <p className="mb-4">
              Join us as a host or mechanic and help us increase our impact! Let us know why you'd like to be involved 
              and how we may approach you.
            </p>
            <a href="mailto:bikekitchenuva@gmail.com" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
              Send us an email
            </a>
          </section>
        </div>
      </div>

      <section className="mb-8 mt-10">
        <h2 className="text-2xl font-semibold mb-4">Donate to the Bike Kitchen</h2>
        <p className="mb-4">
          Your donations help us keep the workshop running and improve our facilities.
        </p>
        <a href="https://doneren.auf.nl/bike-kitchen" target="_blank" className="bg-primary text-secondary px-4 py-2 rounded inline-block">
          Donate
        </a>
      </section>
    </div>
  )
}

export default GetInvolved 