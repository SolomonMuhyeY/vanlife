import "../styles/login.css";

function Login() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white rounded-lg shadow-md w-96'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>
          Sign in to your account
        </h1>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email Address
            </label>
            <input
              type='email'
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='example@gmail.com'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
