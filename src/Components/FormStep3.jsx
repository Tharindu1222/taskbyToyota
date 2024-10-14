import React from 'react';

const FormStep3 = ({ nextStep, prevStep, handleChange, formData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">3. Delivery and Contact Information</h2>

        {/* Delivery Address */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xl mb-2 font-semibold">
            Delivery Address <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="w-full mb-4 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Name"
                value={formData.address?.street || ''}
                onChange={(e) =>
                  handleChange('address', { ...formData.address, street: e.target.value })
                }
                required
                className="w-full border p-2 rounded mb-2"
                style={{ minWidth: '280px' }}
              />
              <input
                type="text"
                placeholder="Apartment, Suite, etc."
                value={formData.address?.apartment || ''}
                onChange={(e) =>
                  handleChange('address', { ...formData.address, apartment: e.target.value })
                }
                className="w-full border p-2 rounded mb-2"
                style={{ minWidth: '280px' }}
              />
            </div>
          </div>
        </div>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="City"
              value={formData.address?.city || ''}
              onChange={(e) =>
                handleChange('address', { ...formData.address, city: e.target.value })
              }
              required
              className="w-full border p-2 rounded"
              style={{ minWidth: '280px' }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="State"
              value={formData.address?.state || ''}
              onChange={(e) =>
                handleChange('address', { ...formData.address, state: e.target.value })
              }
              required
              className="w-full border p-2 rounded"
              style={{ minWidth: '280px' }}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Postal / Zip Code"
              value={formData.address?.postal || ''}
              onChange={(e) =>
                handleChange('address', { ...formData.address, postal: e.target.value })
              }
              required
              className="w-full border p-2 rounded"
              style={{ minWidth: '280px' }}
            />
          </div>
        </div>

        {/* Country Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <div>
            <select
              value={formData.address?.country || 'Sri Lanka'}
              onChange={(e) =>
                handleChange('address', { ...formData.address, country: e.target.value })
              }
              required
              className="w-full border p-2 rounded"
              style={{ minWidth: '280px' }}
            >
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Delivery Instructions */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block text-gray-700 mb-2">Delivery Instructions (optional)</label>
          <textarea
            value={formData.deliveryInstructions || ''}
            onChange={(e) => handleChange('deliveryInstructions', e.target.value)}
            placeholder="i.e., condo gate, phone first, dog will eat you, etc."
            maxLength="75"
            className="w-full border p-2 rounded resize-none"
            rows="3"
            style={{ minWidth: '280px' }}
          />
          {/* Dynamically show the character count */}
          <p className="text-gray-500 text-right text-sm">
            {formData.deliveryInstructions ? formData.deliveryInstructions.length : 0}/75
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="mb-6">
          <label className="block text-gray-700 text-xl mb-2 font-semibold">
            Contact Information <span className="text-red-500">*</span>
          </label>
          {/* Primary Phone Number */}
          
          <label className="block text-gray-700 mb-2 font-semibold">Phone Number</label>
          <div className="flex space-x-2 mb-4 ">
            <input
              type="number"
              placeholder="XXX"
              value={formData.phone?.areaCode || ''}
              onChange={(e) => handleChange('phone', { ...formData.phone, areaCode: e.target.value })}
              maxLength="3"
              required
              className="w-16 border p-2 rounded text-center"/>
              <div className="flex justify-center items-center font-bold">-</div>
              <input
              type="number"
              placeholder="XXX"
              value={formData.phone?.firstPart || ''}
              onChange={(e) => handleChange('phone', { ...formData.phone, firstPart: e.target.value })}
              maxLength="3"
              required
              className="w-16 border p-2 rounded text-center"
            /><div className="flex justify-center items-center font-bold">-</div>
            <input
              type="number"
              placeholder="XXXX"
              value={formData.phone?.lastPart || ''}
              onChange={(e) => handleChange('phone', { ...formData.phone, lastPart: e.target.value })}
              maxLength="4"
              required
              className="w-20 border p-2 rounded text-center"
            />
          </div>

          {/* Secondary Phone Number */}
          
          <label className="block text-gray-700 mb-2 font-semibold">Secondary Phone Number</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="XXX"
              value={formData.secondaryPhone?.areaCode || ''}
              onChange={(e) => handleChange('secondaryPhone', { ...formData.secondaryPhone, areaCode: e.target.value })}
              maxLength="3"
              className="w-16 border p-2 rounded text-center"
            /><div className="flex justify-center items-center font-bold">-</div>
            <input
              type="number"
              placeholder="XXX"
              value={formData.secondaryPhone?.firstPart || ''}
              onChange={(e) => handleChange('secondaryPhone', { ...formData.secondaryPhone, firstPart: e.target.value })}
              maxLength="3"
              className="w-16 border p-2 rounded text-center"
            /><div className="flex justify-center items-center font-bold">-</div>
            <input
              type="number"
              placeholder="XXXX"
              value={formData.secondaryPhone?.lastPart || ''}
              onChange={(e) => handleChange('secondaryPhone', { ...formData.secondaryPhone, lastPart: e.target.value })}
              maxLength="4"
              className="w-20 border p-2 rounded text-center"
            />
          </div>
        </div>

        

        {/* Email */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block text-gray-700 mb-2 font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="applicant.email@email.com"
            value={formData.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            className="w-full border p-2 rounded"
            style={{ minWidth: '280px' }}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded w-full sm:w-auto"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded w-full sm:w-auto"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep3;
