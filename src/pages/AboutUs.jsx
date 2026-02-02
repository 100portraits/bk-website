import React from 'react'
import { Link } from 'react-router-dom'
import UvA from '../assets/uva.png'
import Kruitbosch from '../assets/kruitbosch.jpeg'
import UCI from '../assets/uci.png'
import Amsterdam from '../assets/amsterdam.png'
import Fami from '../assets/fami.jpg'

function AboutUs() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-4xl font-bold ">About Us</h1>
      
      <div className="flex flex-col-reverse md:flex-row gap-8 mt-10">
        <div className="md:w-3/5">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p className="mb-4">
              The Bike Kitchen started in summer 2021 as a grassroots initiative by UvA employees Marco te Brömmelstroet, Suzanne Hansen, and Jan Buursma. Former student Romee Nicolai, inspired by her passion for mobility and bike building, took the lead, leaving her job to make the vision a reality.
              <br></br>
              <br></br>
              From November 2022 to August 2023, 8 monthly pop-up workshops, supported by mechanics Woytek, Leon, and Stef, laid the groundwork for a vibrant community. In August 2023, the space was transformed into a repair hub with support from UvA, Kruitbosch, Urban Cycling Institute, and Fami.
              <br></br>
              <br></br>
              By the 2023 academic year, The Bike Kitchen became a success—serving 4.3% of the campus, gaining media attention, expanding its community, and growing to a team of 15 core members.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="mb-4">
              At the Bike Kitchen UvA, our mission is to promote sustainability and responsible consumption. We aim to educate visitors on how taking care of your bicycle can contribute to these goals. We have a do-it-yourself approach with which we aim to combat the throwaway culture .
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Our Structure</h3>
              <p className="mb-2">We operate with:</p>
              <ul className="list-disc list-inside">
                <li>Mechanics</li>
                <li>Hosts</li>
                <li>Community Members</li>
              </ul>
              <Link to="/get-involved" className="text-primary hover:underline mt-2 inline-block text-xl font-bold">
                → Join our team as a volunteer
              </Link>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img 
                  src={UvA}
                  alt="University of Amsterdam Logo"
                  className="h-20 object-contain mb-2"
                />
                <span className="text-sm text-center">University of Amsterdam</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={Kruitbosch}
                  alt="Kruitbosch Logo"
                  className="h-20 object-contain mb-2"
                />
                <span className="text-sm text-center">Kruitbosch</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={UCI}
                  alt="Urban Cycling Institute Logo"
                  className="h-20 object-contain mb-2"
                />
                <span className="text-sm text-center">Urban Cycling Institute</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={Amsterdam}
                  alt="Gemeente Amsterdam Logo"
                  className="h-20 object-contain mb-2"
                />
                <span className="text-sm text-center">Gemeente Amsterdam</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={Fami}
                  alt="FAMI Logo"
                  className="h-20 object-contain mb-2"
                />
                <span className="text-sm text-center">FAMI meubels</span>
              </div>
            </div>
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

export default AboutUs
