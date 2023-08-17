import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'
const personal = require('../../assets/PracticeArea/personal.jpg')

const PracticeArea = () => {
  const tabs = [
    {
      name: 'Personal Injury',
      features: [
        {
          name: 'Personal Injury',
          description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
          imageSrc: personal,
          imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
        },
      ],
    },
    {
      name: 'Catastrophic Injuries',
      features: [
        {
          name: 'Natural wood options',
          description:
            'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
          imageAlt:
            'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
        },
      ],
    },
    {
      name: 'Family Law',
      features: [
        {
          name: 'Helpful around the home',
          description:
            "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
          imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
        },
      ],
    },
    {
      name: 'Medical Negligence',
      features: [
        {
          name: "Everything you'll need",
          description:
            'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
          imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
        },
      ],
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="bg-black">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
              Our Practice Areas
            </h2>
            <p className="mt-4 text-white">
              List of practice areas
            </p>
          </div>

          <Tab.Group as="div" className="mt-3">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex w-full justify-center border-b border-gray-300">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-primary-500 text-primary-500'
                            : 'border-transparent text-white hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                        <p className="mt-2 text-sm text-white">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}

export default PracticeArea