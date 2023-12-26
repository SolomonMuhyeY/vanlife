const reviews = [
  {
    id: 1,
    name: "John Doe",
    date: "June 10, 2023",
    rating: 4,
    text: "Great van! Very comfortable and well-maintained. Had a wonderful trip.",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "May 22, 2023",
    rating: 5,
    text: "Absolutely amazing experience. The van was clean and fully equipped.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    date: "April 15, 2023",
    rating: 3,
    text: "The van was decent, but there were a few issues with the engine. Overall, it was okay.",
  },
];

function Reviews() {
  return (
    <div className='mt-8 mb-20 px-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Reviews</h1>
      <div className='space-y-6'>
        {reviews.map((review) => (
          <div key={review.id} className='p-4 border rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='text-xl font-semibold'>{review.name}</h2>
              <span className='text-sm text-gray-500'>{review.date}</span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='text-yellow-500'>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
              <span className='ml-2 text-sm text-gray-600'>
                {review.rating} / 5
              </span>
            </div>
            <p className='text-gray-700'>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
