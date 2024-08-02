import React from 'react';

const BrochureRequestForm = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Brochure Request</h2>
      <p className="text-gray-600 mb-6">
        Please enter your details below so we can make sure you receive our brochure download link.
      </p>
      <p className="text-gray-600 mb-6">*We take safeguarding your details seriously.</p>

      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="showroom" className="block text-gray-700 font-bold mb-2">
            Please select your nearest showroom below:**
          </label>
          <select
            id="showroom"
            name="showroom"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="canberra">Canberra</option>
            <option value="canberra">Canberra</option>
            {/* Add more showroom options as needed */}
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-4 rounded focus:outline-none focus:shadow-green-300"
          >
            SEND YOUR REQUEST
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrochureRequestForm;