"use client"
import React, { useState } from 'react';

const FeedbackForm = ({ apiUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [sended, setsended] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      feedback,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setsended(true)
      } 

      // Reset form after submission
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* Button to open the feedback form */}
      <button
        className="fixed bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
        onClick={() => setIsOpen(true)}
      >
        📝 Feedback
      </button>

      {/* Feedback Form Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-white/10 backdrop-blur-md z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6">

            {/* Form */}

            {(!sended)

              ? <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold text-center mb-4">We Value Your Feedback</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                  placeholder='John Doe'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                  placeholder='johndoe@gmail.com'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Feedback</label>
                  <textarea
                  placeholder='There is a problem in ...'
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    className="resize-none w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
              : <div className='h-full w-full p-4 flex flex-col gap-4 justify-center items-center '>

                <span className='text-green-500'> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                  </svg>
                </span>
                <h1 className='text-2xl font-semibold'>Thank you!</h1>
                <p className='text-xs'>To submit another Feedback, Refresh the page!</p>
                <button
                  type="button"
                  onClick={() => {setIsOpen(false);setsended(false)}}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
                >
                  Close
                </button>
              </div>

            }

          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;
