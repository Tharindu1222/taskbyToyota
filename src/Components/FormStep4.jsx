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

  // Format the secondary phone number (if it exists)
  const formattedSecondaryPhone = formData.secondaryPhone
    ? `(${formData.secondaryPhone.areaCode}) ${formData.secondaryPhone.firstPart}-${formData.secondaryPhone.lastPart}`
    : '';

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
      <form onSubmit={handleSign} className="p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">4. Review / Sign / Submit</h2>

        {/* Review Details */}
        <div className="mb-4 font-semibold">
          <p className="mb-2 text-lg"><strong>Applicant’s Name:</strong> {formData.applicantName.firstName} {formData.applicantName.lastName}</p>
          <p className="mb-2 text-lg"><strong>Age:</strong> {formData.birthDay}/{formData.birthMonth}/{formData.birthYear}</p>
          <p className="mb-2 text-lg"><strong>Do you have a disability?</strong> {formData.disability ? 'Yes' : 'No'}</p>
          <p className="mb-2 text-lg"><strong>Disability Documentation upload:</strong> 
          {formData.disabilityFile ? formData.disabilityFile.name : 'No file uploaded'}
          </p>
          <p className="mb-2 text-lg"><strong>Meal Plan Choice:</strong> {formData.mealPlan === '21' ? 'Full 21 Meals' : formData.mealPlan}</p>
          <p className="mb-2 text-lg">
            <strong>Days Requested:</strong> {formData.daysRequested.length > 0 ? formData.daysRequested.join(', ') : 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'}
          </p>
          <p className="mb-2 text-lg">
            <strong>Delivery Address:</strong> {formData.address.street}, {formData.address.city}, {formData.address.state}, {formData.address.postal}, {formData.address.country}
          </p>
          <p className="mb-2 text-lg">
            <strong>Delivery Instructions:</strong> {formData.deliveryInstructions}
          </p>

          {/* Primary Phone Number */}
          <p className="mb-2 text-lg">
            <strong>Phone Number:</strong> {formattedPhone}
          </p>

          {/* Secondary Phone Number */}
          {formattedSecondaryPhone && (
            <p className="mb-2 text-lg">
              <strong>Secondary Phone Number:</strong> {formattedSecondaryPhone}
            </p>
          )}

          <p className="mb-2 text-lg"><strong>Email:</strong> {formData.email}</p>
        </div>

        {/* Signature */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 text-lg">Type Name Here to Virtually Sign Document <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="First Name"
            required
            value={formData.signatureFirstName}
            onChange={(e) => handleChange('signatureFirstName', e.target.value)}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            value={formData.signatureLastName}
            onChange={(e) => handleChange('signatureLastName', e.target.value)}
            className="w-full border p-2 rounded"
          />
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
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
            className="bg-green-500 text-white py-2 px-4 rounded w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep4;
