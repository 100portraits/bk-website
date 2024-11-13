import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Program() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-3xl font-bold mb-4">Our Program</h1>
      <p className="mb-4">
        Learn how to repair and maintain your bike at our fully equipped workshop.
      </p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Workshop Hours</h2>
        <p>Our workshop is open for DIY repairs during these hours:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Monday: 14:00 - 18:00</li>
          <li>Wednesday: 12:00 - 16:00</li>
          <li>Thursday: 16:00 - 20:00</li>
        </ul>
      </section>

      <section className="mb-8 -z-50">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <div className="h-64 mt-4 -z-50">
          <MapContainer center={[52.3570, 4.9085]} zoom={13} scrollWheelZoom={false} className="h-full -z-50">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            />
            <Marker position={[52.3570, 4.9085]}>
              <Popup>Bike Kitchen UvA</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research Projects</h2>
        <p className="mb-4">
          Some description of our researchers:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Current Research</h3>
            <ul className="list-disc ml-6">
              <li>project 1</li>
              <li>project 2</li>
              <li>project 3</li>
            </ul>
          </div>
        </div>
        <a href="#" className="text-primary hover:underline mt-2 inline-block">
          → Get involved in research
        </a>
      </section>
    </div>
  )
}

export default Program 