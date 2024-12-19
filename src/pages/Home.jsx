import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import 'leaflet/dist/leaflet.css'

function Home() {
  return (
    <ParallaxProvider>
      <div>
        <section className="relative h-screen overflow-hidden">
          <Parallax 
            translateY={[0, 50]} 
            className="absolute inset-0 h-[120%] -top-[40%]"
          >
            <img 
              src="https://bikecity.amsterdam.nl/wp-content/uploads/2024/05/d90ab7a8-a338-4138-9945-4b2fdb99b856.jpeg" 
              alt="Bike Kitchen Workshop"
              className="w-full h-full object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="  absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <h1 className="text-7xl font-bold mb-4 text-center">The Bike Kitchen UvA</h1>
            <p className="text-2xl mb-6 text-center">
              Do-it-yourself bicycle workshop at Roeterseiland Campus
            </p>
          </div>
        </section>

        <section className="container mx-auto p-6 max-w-screen-xl mt-10">
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
            <p className="text-lg mb-8 max-w-3xl">
            We empower local communities by providing an accessible space for bike repairs, where circularity comes to life. Through hands-on DIY bicycle repair, we help you upcycle not only your bike but also your skills and ideas, fostering creativity and sustainability. 

            </p>
            <a 
              href="https://bikekitchen.nl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-opacity-90 transition-colors"
            >
              Book a Repair Session
            </a>
          </div>
        </section>

        <div className="container mx-auto p-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Opening Times</h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Regular Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday</span>
                      <span>14:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wednesday</span>
                      <span>12:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thursday</span>
                      <span>16:00 - 20:00</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
                <p className="text-lg mb-4">
                  Visit us at the Roeterseiland Campus of the University of Amsterdam. We're located in the bike garage underneath the B/C/D building, right by the Roetersstraat entrance.
                </p>
                <p className="text-lg">
                  Address:<br />
                  Roetersstraat 37<br />
                  1018 WB Amsterdam
                </p>
              </section>
            </div>

            <div className="h-full">
              <div className="h-[600px] rounded-lg overflow-hidden z-0 sticky top-24">
                <MapContainer 
                  center={[52.362141, 4.911389]} 
                  zoom={14} 
                  scrollWheelZoom={false} 
                  className="h-full"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[52.362141, 4.911389]}>
                    <Popup>Find us here!</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Home
