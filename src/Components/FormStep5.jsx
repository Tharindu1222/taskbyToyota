import React from 'react';

const FormStep5 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12">
      <div className="bg-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Thank You For Submitting Your Application
        </h2>
        <br /><br /><br /><br />
        <p className="text-gray-700 mb-4">
          Thank you for submitting your application. A confirmation email has been sent to the email address
          you provided. <br />Please retain this for your records.
        </p>
        <p className="text-gray-700 mb-8">
          If you have any inquiries or require assistance regarding your application, you may contact us during<br />
          business hours at <a href="tel:1-800-123-4567" className="text-blue-500"><u>1-800-123-4567</u></a> or via email at
          <a href="mailto:support@email.com" className="text-blue-500"> support@email.com</a> appreciate your interest in the<br />
          Meals on Wheels program, dedicated to supporting individuals in need of supplemental meal services.
        </p>
        <p className="text-gray-700 italic mb-8"><u>
          Privacy Notice: Your personal information will be kept confidential and used only for processing your<br /> application.
          It will not be shared with third parties without your consent.</u>
        </p>

        {/* Button Section */}
        <div className="flex justify-between mt-8">
          {/* Return to Homepage - Bottom Left */}
          <button
            onClick={() => window.location.href = '/'}
            className="bg-purple-700 text-white py-2 px-6 rounded shadow hover:bg-purple-800 transition-colors duration-200"
          >
            Return To Homepage
          </button>

          {/* Print Confirmation - Bottom Right */}
          <button
            onClick={() => window.print()}
            className="bg-orange-500 text-white py-2 px-6 rounded shadow hover:bg-orange-600 transition-colors duration-200"
          >
            Print Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStep5;
