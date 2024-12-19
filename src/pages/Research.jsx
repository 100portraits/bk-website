import React from 'react'

function Research() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-4xl font-bold mb-6">Research at the Bike Kitchen</h1>
      <p className="text-lg mb-8">
        The Bike Kitchen actively collaborates with academic institutions and researchers, 
        supporting various research projects while working closely with the Urban Cycling Institute.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Academic Collaborations</h2>
        
        <div className="space-y-8">
          {/* Bachelor's Level */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Bachelor Degree Projects</h3>
            <div className="ml-4">
              <h4 className="font-medium mb-2">University of Amsterdam (UvA)</h4>
              <ul className="list-disc ml-6 mb-4">
                <li>Bachelor Interdisciplinary Social Science: Placemaking 2022-2023</li>
                <li>Bachelor Interdisciplinary Social Science: Placemaking 2023-2024</li>
                <li>Bachelor Computational Social Science</li>
                <li>Bachelor Introduction Camp Week</li>
              </ul>

              <h4 className="font-medium mb-2">TU Eindhoven</h4>
              <ul className="list-disc ml-6">
                <li>Bachelor Industrial Design</li>
              </ul>
            </div>
          </div>

          {/* Master's Level */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Master Degree Projects</h3>
            <div className="ml-4">
              <h4 className="font-medium mb-2">University of Amsterdam (UvA)</h4>
              <ul className="list-disc ml-6 mb-4">
                <li>Master Urban and Regional Planning</li>
              </ul>

              <h4 className="font-medium mb-2">TU Eindhoven</h4>
              <ul className="list-disc ml-6">
                <li>Master Industrial Management</li>
              </ul>
            </div>
          </div>

          {/* PhD Level */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">PhD Research</h3>
            <div className="ml-4">
              <ul className="list-disc ml-6">
                <li>Hogeschool Utrecht (HU)</li>
                <li>Technische Universiteit Delft (TU Delft)</li>
              </ul>
            </div>
          </div>

          {/* Summer Schools */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Summer Schools</h3>
            <div className="ml-4">
              <h4 className="font-medium mb-2">2023</h4>
              <ul className="list-disc ml-6 mb-4">
                <li>Planning the Cycling City</li>
              </ul>

              <h4 className="font-medium mb-2">2024</h4>
              <ul className="list-disc ml-6">
                <li>Placemaking</li>
                <li>Urban Studies</li>
                <li>Planning the Cycling City</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Current Research Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Michael Tahmoressi's Research</h3>
            <p className="mb-4">[Research description to be added]</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Dirk Ploos van Amstel's Research</h3>
            <p className="mb-4">[Research description to be added]</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research Collaboration Opportunities</h2>
        <p className="mb-6">
          We welcome new research projects that align with our research agenda, developed 
          in collaboration with the Urban Cycling Institute. If you're interested in 
          conducting research with the Bike Kitchen, please reach out to discuss how 
          your project aligns with our research pillars.
        </p>
        <a href="mailto:[research_email]" className="bg-primary text-white px-6 py-3 rounded-lg inline-block hover:bg-opacity-90 transition-colors">
          Contact Research Team
        </a>
      </section>
    </div>
  )
}

export default Research