import React from 'react'

function Events() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-4xl font-bold mb-6">Events</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-6">
          Join us for workshops, community events, and special repair sessions. 
          Check our calendar below for upcoming events.
        </p>
      </div>

      <div className="aspect-[3/2] w-full relative">
        
        <iframe
          src="https://calendar.google.com/calendar/embed?src=0cd0e559b49cb4be8535728c67f7157641409f33d2972ac6665980d9fa1a797a%40group.calendar.google.com&ctz=Europe%2FAmsterdam"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  )
}

export default Events 