import React from 'react'



const Team = () => {
  const people = [
    {
      name: 'William H. Kennedy, III',
      role: 'Attorney',
      imageUrl:
        'https://le-cdn.website-editor.net/s/e1e42010e0a64d409bfa4dcd6d918d0c/dms3rep/multi/opt/William+Kennedy+Attorney+Coral+Springs+web-1079adb7-383w.jpg?Expires=1693991103&Signature=AVnvEBaF1UIEBpulH-qodDxb12QxxNwwJwCgabEUtaK1bf0HnaEnXDHI8DXhP5fRSvVmqCz1rzNtBrZqDZwPOb6iBUysuUOWNWLfBa8z5R-O7JjIs~xQUJZG6td1w0oNR5wFujo1vor8CHHIPp9jPkwRXJ6mNQ1pPRp8vu2UQLCKm~svXcUDuygWTaZTnO6u7bEJSJM1EIqeck7izo3pLXqIc2iorcB7LwRk~WEMgL~q9mMlD~PUQLRNXZaJ-AIAKMRynmNosM-9KwbFLSbBvsxLBR2HFX6WViXJcY-F0gkU~8ln1DvABqOVd2OEz~UMAYO6z6n3Kh4YZbmYqZa3Cw__&Key-Pair-Id=K2NXBXLF010TJW',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Grace F. Solomon',
      role: 'Attorney',
      imageUrl:
        'https://le-cdn.website-editor.net/s/e1e42010e0a64d409bfa4dcd6d918d0c/dms3rep/multi/opt/Grace+Solomon+Attorney+Coral+Springs+web-e8a89d06-383w.jpg?Expires=1693991103&Signature=W8NvwDoqKlOG2oPGULwtXqvc7ocHq~Ub~IzAjrcNo0aJp3v1WGhpIR5bk8ipr4AaMaQfrcSYToBX2o6nnMqitdCQAX~BZd7Oq3x~QHD88JjASmaMKopvfg85tGwwuQ5gY8FPnKF~dw3JmyQFq7IYqAT9Vjq8ZhZut0XEySgmMJD9ibqcXx7KA6HN-m55pDRHsjNbTx1wD4C8aZLLR2a-ELwaBNlrdVTqEx~IedJNzV9wyUnpqVTq2cwyLHLpfqeI1LrQbGkrrvJx23DLJyGAOOcn1PSbD-BrODVBuB9dIc3ctuVUCOJg62Z4SON12cCtuvtapjB9JE6cILx7qmyqxw__&Key-Pair-Id=K2NXBXLF010TJW',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Place holder',
      role: 'Attorney',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ]

  return (
    <div className="bg-black py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">Meet our team</h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          We’re a group of individuals who are passionate about what we do.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        {people.map((person) => (
          <li key={person.name} className="rounded-2xl bg-primary-shade px-8 py-10  border-[1.4px] border-primary-500">
            <img className="mx-auto h-48 w-48 rounded-lg md:h-56 md:w-56" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-primary-500">{person.name}</h3>
            <p className="text-sm leading-6 text-primary-500">{person.role}</p>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <a href={person.linkedinUrl} className="text-primary-500 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Team