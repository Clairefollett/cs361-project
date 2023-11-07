import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to MyBookList</h2>
          <ul className="mt-2 text-lg leading-8 text-gray-600">Where you can: 
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span><span className="font-semibold text-gray-900 dark:text-white">Search</span> for your next great read</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span><span className="font-semibold text-gray-900 dark:text-white">Explore</span> new books with our preview feature</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span><span className="font-semibold text-gray-900 dark:text-white">Create </span>your own personal book wish-list</span>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0"></span>
                  Create an Account
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                The first step is to create an account. The button below will take you to a form, where you
                can enter a username, email, and password.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  <Link href="/signup">
                    <span className="absolute inset-0"></span>
                    Click here to create an account
                  </Link>
                </button>
              </div>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0"></span>
                  Login to Your Account
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Once you have created an account, you can click the button below to login to your account.
                The button will take you to a form where you will enter your email and password.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  <Link href="/login">
                    <span className="absolute inset-0"></span>
                    Click here to login
                  </Link>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}