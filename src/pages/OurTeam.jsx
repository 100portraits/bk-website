import React from 'react'

function OurTeam() {
  const teamMembers = [
    {
      name: 'Romee Nicolai',
      role: 'Project Leader',
      image: 'https://placehold.co/400x400', // Replace with actual image
      bio: 'Former student who turned her passion for mobility and bike building into reality by founding the Bike Kitchen.',
      contact: {
        email: '..',
        linkedin: '..'
      }
    },
    // Add more team members here
  ]

  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-6">
          Meet the team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="space-y-2">
                {member.contact.email && (
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {member.contact.email}
                  </a>
                )}
                {member.contact.linkedin && (
                  <a
                    href={member.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam 