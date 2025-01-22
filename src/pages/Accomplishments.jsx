import React from 'react'

function Accomplishments() {
  return (
    <div className="container mx-auto p-6 mt-24 max-w-screen-xl">
      <h1 className="text-4xl font-bold mb-6">[Page Title]</h1>
      
      <section className="mb-8">
        <p className="text-lg text-gray-600 mb-8">
          [Page Description]
        </p>

        <div className="space-y-8">
          {/* 2024 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">[Year 1]</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-medium">[Achievement Title 1]</h3>
                <p className="text-gray-600">[Date 1]</p>
                <p className="mt-2">[Achievement Description 1]</p>
              </div>
            </div>
          </div>

          {/* 2023 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">[Year 2]</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-medium">[Achievement Title 2]</h3>
                <p className="text-gray-600">[Date 2]</p>
                <p className="mt-2">[Achievement Description 2]</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-medium">[Achievement Title 3]</h3>
                <p className="text-gray-600">[Date 3]</p>
                <p className="mt-2">[Achievement Description 3]</p>
              </div>
            </div>
          </div>

          {/* 2022 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">[Year 3]</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-medium">[Achievement Title 4]</h3>
                <p className="text-gray-600">[Date 4]</p>
                <p className="mt-2">[Achievement Description 4]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accomplishments