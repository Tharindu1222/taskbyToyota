import React, { useState } from "react";

const FormStep1 = ({ nextStep, handleChange, formData }) => {
  const [isSubmittingForSomeoneElse, setIsSubmittingForSomeoneElse] = useState(
    formData.submittingForSomeoneElse || false
  );
  const [hasDisability, setHasDisability] = useState(formData.disability || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Your Information</h2> {/* Increased font size */}

        {/* Applicant's Name in a single row */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <label htmlFor="firstName" className="block text-gray-700 text-lg mb-2 font-semibold"> {/* Increased font size */}
              Applicant's Name <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                id="firstName"
                className={`w-full border p-2 rounded ${formData.applicantName.firstName ? 'text-black' : 'text-gray-500'}`}
                placeholder="First Name"
                value={formData.applicantName.firstName || ""}
                onChange={(e) =>
                  handleChange("applicantName", {
                    ...formData.applicantName,
                    firstName: e.target.value,
                  })
                }
                required
              />
              <input
                type="text"
                id="lastName"
                className={`w-full border p-2 rounded ${formData.applicantName.lastName ? 'text-black' : 'text-gray-500'}`}
                placeholder="Last Name"
                value={formData.applicantName.lastName || ""}
                onChange={(e) =>
                  handleChange("applicantName", {
                    ...formData.applicantName,
                    lastName: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
        </div>

        {/* Checkbox: Submitting on behalf of someone else */}
        <div className="mb-4">
          <label className="inline-flex items-center text-lg"> {/* Increased font size */}
            <input
              type="checkbox"
              checked={isSubmittingForSomeoneElse}
              onChange={(e) => {
                setIsSubmittingForSomeoneElse(e.target.checked);
                handleChange("submittingForSomeoneElse", e.target.checked);
              }}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Are you submitting this application on behalf of someone else?</span>
          </label>
        </div>

        {/* Additional Fields if submitting on behalf */}
        {isSubmittingForSomeoneElse && (
          <div className="flex flex-col">
            <p className="text-gray-600 mb-2 text-lg"> {/* Increased font size */}
              <i>If you are submitting this form for another person, please provide your information below:</i>
            </p>

            {/* First and Last Name for the person submitting the form */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border p-2 rounded"
                    onChange={(e) => handleChange("submitterFirstName", e.target.value)}
                    value={formData.submitterFirstName || ""}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border p-2 rounded"
                    onChange={(e) => handleChange("submitterLastName", e.target.value)}
                    value={formData.submitterLastName || ""}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Relationship to the Applicant (Dropdown) */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <label htmlFor="relationship" className="block text-gray-700 text-lg mb-2"> {/* Increased font size */}
                  Relationship to Applicant <span className="text-red-500">*</span>
                </label>
                <select
                  id="relationship"
                  className="w-full md:w-1/2 mb-4 md:mb-0 border p-2 rounded" // Added border and padding for consistency
                  value={formData.relationship || ""}
                  onChange={(e) => handleChange("relationship", e.target.value)}
                  required
                >
                  <option value="">Select Relationship</option>
                  <option value="Parent">Parent</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Applicant's Age (Separate Fields for MM, DD, YYYY) */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <label htmlFor="age" className="block text-gray-700 text-lg mb-2 font-semibold"> {/* Increased font size */}
            Age of Applicant<span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="MM"
              className="border p-2 rounded w-1/3 text-gray-500"
              maxLength="2"
              value={formData.birthMonth || ""}
              onChange={(e) => handleChange("birthMonth", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="DD"
              className="border p-2 rounded w-1/3 text-gray-500"
              maxLength="2"
              value={formData.birthDay || ""}
              onChange={(e) => handleChange("birthDay", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="YYYY"
              className="border p-2 rounded w-1/3 text-gray-500"
              maxLength="4"
              value={formData.birthYear || ""}
              onChange={(e) => handleChange("birthYear", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Disability Question */}
        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2 font-semibold"> {/* Increased font size */}
            Does the applicant have a disability? <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
            <label className={`flex items-center space-x-2 ${hasDisability ? 'text-black' : 'text-gray-500'}`}>
              <input
                type="radio"
                name="disability"
                value="yes"
                checked={hasDisability === true}
                onChange={() => {
                  setHasDisability(true);
                  handleChange("disability", true);
                }}
              />
              <span>Yes</span>
            </label>
            <label className={`flex items-center space-x-2 ${!hasDisability ? 'text-black' : 'text-gray-500'}`}>
              <input
                type="radio"
                name="disability"
                value="no"
                checked={hasDisability === false}
                onChange={() => {
                  setHasDisability(false);
                  handleChange("disability", false);
                }}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Upload File if Yes */}
        {hasDisability && (
          <div className="w-full">
            <label className="block text-gray-700 text-lg mb-2"> {/* Increased font size */}
              <i>if yes, please Upload Documentation of Disability: </i> <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                type="file"
                className="w-full md:w-1/4 mb-4 md:mb-0"
                
                onChange={(e) => handleChange("disabilityFile", e.target.files[0])}
                required
              />
              <button className="mt-2 sm:mt-0 bg-blue-500 text-white p-2 rounded w-full sm:w-auto">
                Upload
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded w-full sm:w-auto text-lg" // Increased font size
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded w-full sm:w-auto text-lg" // Increased font size
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep1;
