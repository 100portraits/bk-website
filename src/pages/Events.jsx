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

      <div className="aspect-[3/2] w-full">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FAmsterdam&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&src=[YOUR_CALENDAR_ID]"
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