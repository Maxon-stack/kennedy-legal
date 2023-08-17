import React from 'react'

const BestAttorney = require('../../assets/Awards/BestAttorneys.png')
const HighStakes = require('../../assets/Awards/HighStakesLitigators.png')
const Million = require('../../assets/Awards/Million.png')
const DJA = require('../../assets/Awards/DJA.png')
const LOD = require('../../assets/Awards/lawyersofdistinction.png')
const NADC = require('../../assets/Awards/NADC.png')
const SuperLawyers = require('../../assets/Awards/SuperLawyers.png')
const Top = require('../../assets/Awards/TopTL.png')

const Awards = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-primary-500">
          Trusted by the America’s most Dedicated Attorney reviewers
        </h2>
        <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-5 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 place-items-center justify-center ">
          {/* <img
            className=" w-100 h-100 object-cover"
            src={BestAttorney}
            alt="Transistor"
            width={158}
            height={48}
          /> */}
          <img
            className="w-100 h-100 object-cover"
            src={HighStakes}
            alt="Reform"
            width={158}
            height={48}
          />          
          <img
            className=""
            src={Million}
            alt="Reform"
            width={158}
            height={48}
          />
          


          <img
            className=" w-100 h-100 object-cover"
            src={DJA}
            alt="Transistor"
            width={158}
            height={48}
          />
          {/* <img
            className=" w-100 h-100 object-cover"
            src={LOD}
            alt="Reform"
            width={158}
            height={48}
          />           */}
          <img
            className=" w-100 h-100 object-cover"
            src={NADC}
            alt="Reform"
            width={158}
            height={48}
          />          
          <img
            className=" w-100 h-100 object-cover"
            src={SuperLawyers}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className=" w-100 h-100 object-cover"
            src={Top}
            alt="Reform"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

export default Awards