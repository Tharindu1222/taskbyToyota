import React, { useState } from 'react';

const FormStep2 = ({ prevStep, nextStep, handleChange, formData }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleMealPlanChange = (e) => {
    const value = e.target.value;

    // If the full meal plan is selected, set all days
    if (value === '21') {
      handleChange('daysRequested', ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    } else {
      // Clear days if a different meal plan is selected
      handleChange('daysRequested', []);
    }
    handleChange('mealPlan', value);
    setErrorMessage(''); // Clear error message on change
  };

  const handleDayChange = (day) => {
    if (formData.mealPlan !== '21') {
      const selectedDays = formData.daysRequested.includes(day)
        ? formData.daysRequested.filter((d) => d !== day)
        : [...formData.daysRequested, day];
      handleChange('daysRequested', selectedDays);
      setErrorMessage(''); // Clear error message on day selection
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that a meal plan is selected
    if (!formData.mealPlan) {
      setErrorMessage('Please select a meal plan.');
      return;
    }

    // Validate that at least one day is selected if full meal plan isn't chosen
    if (formData.mealPlan !== '21' && formData.daysRequested.length === 0) {
      setErrorMessage('Please select at least one day.');
      return;
    }

    setErrorMessage('');
    nextStep();
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Requested Services</h2>

        {/* Meal Plan Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2 font-semibold">
            Choose the Meal Plan you would like to receive <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="mealPlan"
                value="21"
                checked={formData.mealPlan === '21'}
                onChange={handleMealPlanChange}
                className="form-radio"
              />
              <span className="ml-2">Full 21 meals</span>
            </label>

            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="mealPlan"
                value="lunchDinner"
                checked={formData.mealPlan === 'lunchDinner'}
                onChange={handleMealPlanChange}
                className="form-radio"
              />
              <span className="ml-2">Lunch and Dinner</span>
            </label>

            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="mealPlan"
                value="dinner"
                checked={formData.mealPlan === 'dinner'}
                onChange={handleMealPlanChange}
                className="form-radio"
              />
              <span className="ml-2">Only Dinner</span>
            </label>
          </div>
        </div>

        {/* Days Requested */}
        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2 font-semibold">
            Days Requested <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <label key={day} className="flex items-center text-lg">
                <input
  type="checkbox"
  checked={formData.mealPlan === '21' || formData.daysRequested.includes(day)}
  onChange={() => handleDayChange(day)}
  className="form-checkbox"
  disabled={formData.mealPlan === '21'} // Disable checkboxes if full meal plan is selected
/>

                <span className="ml-2">{day}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-red-500 font-semibold">
            {errorMessage}
          </div>
        )}

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

export default FormStep2;
