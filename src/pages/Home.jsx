function Home() {
  return (
    <div className='home_page bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-semibold mb-4'>
        You got the travel plans, We got the travel vans
      </h2>
      <p className='text-lg mb-2'>
        Add adventure to your life by joining #vanlife movement
      </p>
      <p className='text-lg mb-8'>
        Rent the perfect van to make your perfect road trip.
      </p>
      <button className='px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300'>
        Find your van
      </button>
    </div>
  );
}

export default Home;
