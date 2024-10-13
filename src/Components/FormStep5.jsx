import React from 'react';

const FormStep5 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Thank You For Submitting Your Application</h2>
        <p className="text-gray-700 mb-4">
          A confirmation email has been sent to your email address. Please retain this for your records.
        </p>
        <p className="text-gray-700 mb-8">
          If you have any questions, contact us at <strong>1-800-123-4567</strong> or <strong>support@email.com</strong>
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => window.print()}
            className="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600 transition-colors duration-200"
          >
            Print Confirmation
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gray-500 text-white py-2 px-6 rounded shadow hover:bg-gray-600 transition-colors duration-200"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStep5;
