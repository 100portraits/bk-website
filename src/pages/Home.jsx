import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import 'leaflet/dist/leaflet.css'
import { FaWrench } from 'react-icons/fa'
import L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'


function Home() {
  const iconMarkup = renderToStaticMarkup(
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
          <div className="text-primary">
            <FaWrench size={20} />
          </div>
        </div>
        <div className="bg-white w-4 h-4 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1 shadow-md"></div>
      </div>
    </div>
  );

  const customIcon = L.divIcon({
    html: iconMarkup,
    className: 'custom-icon',
    iconSize: [32, 42],
    iconAnchor: [16, 32],
  });

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

        <section className="container mx-auto p-6 max-w-screen-xl mt-10 flex flex-col gap-12">
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-6">What is the Bike Kitchen?</h2>
            <p className="text-lg mb-8 max-w-3xl">
            The Bike Kitchen is a do-it-yourself bicycle workshop at the Roeterseiland Campus of the University of Amsterdam. 
            We provide an accessible space for bike repairs and maintenance, and are open to everyone.

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
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-6">How does it work?</h2>
            <p className="text-lg mb-8 max-w-3xl">
              We have the tools, you bring the bike & the parts needed.
              We'll provide help if needed, but you are the mechanic!
              <br></br>
              <br></br>
              We ask for a small donation to cover the cost of our space and mechanics. The suggested donation is €8, but you can donate what you feel is fair, no judgement!.
            </p>

          </div>
        </section>

        <div className="container mx-auto p-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Opening Times</h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-3">Regular Hours</h3>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 pr-4 font-medium text-gray-700">Day</th>
                        <th className="py-2 font-medium text-gray-700">Hours</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      <tr className="border-b border-gray-100">
                        <td className="py-2.5 pr-4">
                          <span>Monday</span>
                          <span className="block text-xs text-gray-500">*Walk-ins only</span>
                        </td>
                        <td className="py-2.5">16:00 – 20:00</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2.5 pr-4">Tuesday</td>
                        <td className="py-2.5">13:00 – 17:00</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2.5 pr-4">Thursday</td>
                        <td className="py-2.5">16:00 – 20:00</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2.5 pr-4">Friday</td>
                        <td className="py-2.5">15:00 – 19:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
                <p className="text-lg mb-4">
                  Visit us at the Roeterseiland Campus of the University of Amsterdam. We're located in the bike garage underneath the A/B/C building, right by the Roetersstraat entrance.
                </p>
                <p className="text-lg">
                  Address:<br />
                  Roetersstraat 27<br />
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
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker 
                    position={[52.362141, 4.911389]}
                    icon={customIcon}
                  >
                    <Popup><h3 className='text-xl'><strong>Bike Kitchen UvA</strong></h3> <br></br>Roetersstraat 37<br></br>1018 WB Amsterdam</Popup>
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
