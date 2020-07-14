import React from 'react'
import TheProjectCardR from './TheProjectCardR'
import TheProjectCardW from './TheProjectCardW'

const TheHomeProjects = () => (
  <div>
    <div className="container mx-auto lg:w-2/6 xl:w-2/6 text-center mt-12">
      <p>
        <span className="font-semibold text-5xl">ReactJs ///</span>
        <span className="text-red-700 font-thin text-3xl">Apps</span>
      </p>
    </div>

    <div className="flex flex-wrap p-4">
      <TheProjectCardR />
      <TheProjectCardR />
      <TheProjectCardR />
      <TheProjectCardR />
    </div>
    
    <div className="container mx-auto lg:w-2/6 xl:w-2/6 text-center mt-12">
      <p>
        <span className="font-semibold text-5xl">Wordpress ///</span>
        <span className="text-red-700 font-thin text-3xl">Clients</span>
      </p>
    </div>

    <div className="flex flex-wrap p-4">
      <TheProjectCardW />
      <TheProjectCardW />
      <TheProjectCardW />
      <TheProjectCardW />
    </div>
  </div>
);

export default TheHomeProjects;