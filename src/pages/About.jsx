import travelImage from "../assets/images/travel.jpg";

function About() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 md:mr-8'>
            <img
              className='rounded-lg shadow-lg'
              src={travelImage}
              alt='travel'
            />
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
              Don&apos;t settle for a sedan when you can embrace the journey in
              a van.
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              Welcome to our official site, where you can not only purchase but
              also rent a wide variety of vans. Let us be your guide through
              unforgettable adventures.
            </p>
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Your destination is waiting.
              </h2>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                Your van is ready.
              </h2>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                Explore our vans
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
