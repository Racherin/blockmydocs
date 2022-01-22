import { Fragment, useState } from 'react'
import { Disclosure, Listbox, Menu, Transition } from '@headlessui/react'
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LinkIcon,
  MailIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import Steps from "./Steps"
import CampaignForm from "./CampaignForm"
import UploadJSON from "./UploadJSON"


const candidates = [
  {
    name: 'Emily Selman',
    email: 'emilyselman@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    applied: 'January 7, 2020',
    appliedDatetime: '2020-07-01T15:34:56',
    status: 'Completed phone screening',
  },
  {
    name: 'Emily Selman',
    email: 'emilyselman@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    applied: 'January 7, 2020',
    appliedDatetime: '2020-07-01T15:34:56',
    status: 'Completed phone screening',
  },
  {
    name: 'Emily Selman',
    email: 'emilyselman@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    applied: 'January 7, 2020',
    appliedDatetime: '2020-07-01T15:34:56',
    status: 'Completed phone screening',
  },
  // More candidates...
]
const publishingOptions = [
  { name: 'Send Invitations', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { name: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(publishingOptions[0])

  const [status , setStatus] = useState("create")


  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">       



        {/* Page heading */}
        <header className="bg-white py-8 ">
        <div className='max-w-7xl mx-auto px-4  xl:flex xl:items-center xl:justify-between mt-10 mb-16'>

        <Steps />
        </div>
        
          <div className="max-w-7xl mx-auto px-4  xl:flex xl:items-center xl:justify-between">

          

            <div className="flex-1 w-full">

            
            
              <h1 className="mt-2 text-2xl font-medium leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {
                  status === "create" ? 

                  (
                    <h1 className="mt-2 text-2xl font-medium leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Create New Network
                    </h1>
                  ):
                  (
                    ""
                  )
                }

{
                  status === "upload" ? 

                  (
                    <div className='flex justify-between'>
                    <h1 className="mt-2 text-2xl font-medium leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Upload JSON
                    </h1>
                    
                    <div className="mt-5 flex xl:mt-0 xl:ml-4">
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                >
                  <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Import JSON
                </button>
              </span>

              <span className="hidden sm:block ml-3">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                >
                  <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Import from URL
                </button>
              </span>

              <span className="hidden sm:block ml-3">
                <button onClick={() => setStatus("template")}
                  type="button"
                  className="inline-flex bg-indigo-600 text-white items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                >
                  <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" />
                  Submit JSON File
                </button>
              </span>

           
            </div>
                    </div>
                  ):
                  (
                    ""
                  )
                }
                {
                  status === "template" ? 

                  (
                    <h1 className="mt-2 text-2xl font-medium leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Select Template
                    </h1>
                  ):
                  (
                    ""
                  )
                }
                {
                  status === "certificates" ? 

                  (
                    <h1 className="mt-2 text-2xl font-medium leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Upload Certificates
                    </h1>
                  ):
                  (
                    ""
                  )
                }
              </h1>
            
            </div>
          
          </div>
        </header>

       

        {
        {
          'create': <CampaignForm setStatus={setStatus} />,
          'upload': <UploadJSON />
        }[status]
      }


      </div>
    </>
  )
}
