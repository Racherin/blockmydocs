


export default function Example(){


 

    return (
        <div className="flex-1 xl:overflow-y-auto pt-16 pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium text-gray-700">Create Profile</h1>

          <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div className="sm:col-span-6">
                <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
                <p className="mt-1 text-sm text-blue-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="first-name" className="block text-sm font-medium text-blue-gray-900">
                  Instution / Issuer Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                />
              </div>

             
              <div className="sm:col-span-6">
                <label htmlFor="username" className="block text-sm font-medium text-blue-gray-900">
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm">
                    blockmydocs.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    defaultValue="username"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                    />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  <img
                    className="inline-block h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="ml-4 flex">
                    <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                      <label
                        htmlFor="user-photo"
                        className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                      >
                        <span>Change</span>
                        <span className="sr-only"> user photo</span>
                      </label>
                      <input
                        id="user-photo"
                        name="user-photo"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                    <button
                      type="button"
                      className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-blue-gray-900">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm text-blue-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="url" className="block text-sm font-medium text-blue-gray-900">
                  URL
                </label>
                <input
                  type="text"
                  name="url"
                  id="url"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div className="sm:col-span-6">
                <h2 className="text-xl font-medium text-blue-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm text-blue-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email-address" className="block text-sm font-medium text-blue-gray-900">
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone-number" className="block text-sm font-medium text-blue-gray-900">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-blue-gray-900">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                >
                  <option />
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="language" className="block text-sm font-medium text-blue-gray-900">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  id="language"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                />
              </div>

              <p className="text-sm text-blue-gray-500 sm:col-span-6">
                This account was created on{' '}
                <time dateTime="2017-01-05T20:35:40">January 5, 2017, 8:35:40 PM</time>.
              </p>
            </div>

            <div className="pt-8 flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button

                
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}