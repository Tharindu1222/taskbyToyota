import React, { useState } from 'react';

const FormStep4 = ({ prevStep, handleChange, formData, handleSubmit }) => {
  const [error, setError] = useState(""); // State to hold error messages

  const handleSign = (e) => {
    e.preventDefault();

    // Validate the signature
    const signatureFullName = `${formData.signatureFirstName} ${formData.signatureLastName}`.trim();
    const applicantFullName = `${formData.applicantName.firstName} ${formData.applicantName.lastName}`.trim();

    if (signatureFullName !== applicantFullName) {
      setError("Signature must match the applicant's name.");
      return;
    }

    setError(""); 
    handleSubmit(); 
  };

  // Format the primary phone number
  const formattedPhone = formData.phone
    ? `(${formData.phone.areaCode}) ${formData.phone.firstPart}-${formData.phone.lastPart}`
    : '';

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
      <form onSubmit={handleSign} className="p-6 sm:p-8 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-6">4. Review / Sign / Submit</h2>

        {/* Review Details */}
        <div className="mb-4 text-sm sm:text-lg space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 w-full">
            {/* Applicant's Name */}
            <div className="flex-1">
              <p><strong>Applicant’s Name:</strong><br /> {formData.applicantName.firstName} {formData.applicantName.lastName}</p>
            </div>
            {/*  Age */}
            <div className="flex-1">
              <p><strong>Age:</strong><br /> {formData.birthMonth}/{formData.birthDay}/{formData.birthYear}</p>
            </div>
            {/*  Disability */}
            <div className="flex-1">
              <p><strong>Do you have a disability?</strong><br /> {formData.disability ? 'Yes' : 'No'}</p>
            </div>
            {/* Disability Documentation Upload */}
            <div className="flex-1">
              <p><strong>Disability Documentation Upload:</strong><br /> {formData.disabilityFile ? formData.disabilityFile.name : 'No file uploaded'}</p>
            </div>
          </div>
          
             {/* Meal Plan and Days Requested */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 w-full">
              {/* Meal Plan Choice */}
              <div className="flex-1">
                <p><strong>Meal Plan Choice:</strong><br /> {formData.mealPlan === '21' ? 'Full 21 Meals' : formData.mealPlan}</p>
              </div>
              {/* Days Requested */}
              <div className="flex-1">
                <p><strong>Days Requested:</strong><br /> {formData.daysRequested.join(', ') || 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'}</p>
              </div>
            </div>
          </div>  

        {/* Other Review Details */}
        <div className="mb-4 text-sm sm:text-lg space-y-4">
          <p><strong>Delivery Address:</strong><br /> {formData.address.street}, {formData.address.city}, {formData.address.state}, {formData.address.postal}, {formData.address.country}</p>
          <p><strong>Delivery Instructions:</strong><br /> {formData.deliveryInstructions || 'No instructions provided'}</p>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 w-full">
            <div className="flex-1">
              <p><strong>Phone Number:</strong><br /> {formattedPhone}</p>
            </div>
            <div className="flex-1">
              <p><strong>Email:</strong><br /> {formData.email}</p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block text-gray-700 mb-2 text-lg">Type Name Here to Virtually Sign Document <span className="text-red-500">*</span></label>
          <div className="flex space-x-4 mb-2">
            <input
              type="text"
              placeholder="First Name"
              required
              value={formData.signatureFirstName}
              onChange={(e) => handleChange('signatureFirstName', e.target.value)}
              className="w-1/2 border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={formData.signatureLastName}
              onChange={(e) => handleChange('signatureLastName', e.target.value)}
              className="w-1/2 border p-2 rounded"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-6 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep4;
