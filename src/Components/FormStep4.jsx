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

    setError(""); // Clear error message if validation passes
    handleSubmit(); // This triggers the final submission
  };

  // Format the primary phone number
  const formattedPhone = formData.phone
    ? `(${formData.phone.areaCode}) ${formData.phone.firstPart}-${formData.phone.lastPart}`
    : '';

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
      <form onSubmit={handleSign} className="p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 ">4. Review / Sign / Submit</h2>

        {/* Review Details */}
        <div className="mb-4 text-lg space-y-2 ">
          <div className="flex justify-between items-center w-full">
            <p><strong>Applicant’s Name:</strong><br/> {formData.applicantName.firstName} {formData.applicantName.lastName}</p>
            <p><strong>Age:</strong><br/> {formData.birthMonth}/{formData.birthDay}/{formData.birthYear}</p>
            <p><strong>Do you have a disability?</strong><br/> {formData.disability ? 'Yes' : 'No'}</p>
            <p><strong>Disability Documentation Upload:</strong><br/> {formData.disabilityFile ? formData.disabilityFile.name : 'No file uploaded'}</p>
            </div>
            <div className="flex w-full items-center">
              <div className="w-full md:w-1/4">
          <p><strong>Meal Plan Choice:</strong><br/> {formData.mealPlan === '21' ? 'Full 21 Meals' : formData.mealPlan}</p>
              </div>
          <div className=""></div>
          <p><strong>Days Requested:</strong> <br/>{formData.daysRequested.join(', ') || 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'}</p>
          </div>
          <p><strong>Delivery Address:</strong> <br/>{formData.address.street}, {formData.address.city}, {formData.address.state}, {formData.address.postal}, {formData.address.country}</p>
          <p><strong>Delivery Instructions:</strong><br/> {formData.deliveryInstructions || 'No instructions provided'}</p>
          <div className="flex w-full items-center">
          <div className="w-full md:w-1/4">
          <p><strong>Phone Number:</strong> <br/>{formattedPhone}</p>
          </div>
          <p><strong>Email:</strong><br/> {formData.email}</p>
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
