import React from 'react';
import tick from '../../assets/Correct.png';

const Stepper = ({ step }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
      <div className="flex justify-between items-center w-full">
        {/* Step 1 */}
        <div className={`flex flex-col items-center ${step >= 1 ? 'text-orange-600' : 'text-white'}`}>
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-orange-500 text-white' : 'bg-purple-600 text-white'}`}>
            {step > 1 ? (
              <img src={tick} alt="Completed" className="w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] rounded-full object-cover" />
            ) : (
              '1'
            )}
          </div>
        </div>
        <div className={`flex-1 h-2 w-max ${step >= 2 ? 'bg-orange-500' : 'bg-purple-600'} m-0 `}></div>

        {/* Step 2 */}
        <div className={`flex flex-col items-center ${step >= 2 ? 'text-orange-600' : 'text-white'}`}>
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-orange-500 text-white' : 'bg-purple-800'}`}>
            {step > 2 ? (
              <img src={tick} alt="Completed" className="w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] rounded-full object-cover" />
            ) : (
              '2'
            )}
          </div>
        </div>
        <div className={`flex-1 h-2 ${step >= 3 ? 'bg-orange-500' : 'bg-purple-600'} m-0`}></div>

        {/* Step 3 */}
        <div className={`flex flex-col items-center ${step >= 3 ? 'text-orange-600' : 'text-white'}`}>
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-orange-500 text-white' : 'bg-purple-800'}`}>
            {step > 3 ? (
              <img src={tick} alt="Completed" className="w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] rounded-full object-cover" />
            ) : (
              '3'
            )}
          </div>
        </div>
        <div className={`flex-1 h-2 ${step >= 4 ? 'bg-orange-500' : 'bg-purple-600'} m-0`}></div>

        {/* Step 4 */}
        <div className={`flex flex-col items-center ${step >= 4 ? 'text-orange-600' : 'text-white'}`}>
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-orange-500 text-white' : 'bg-purple-800'}`}>
            {step > 4 ? (
              <img src={tick} alt="Completed" className="w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] rounded-full object-cover" />
            ) : (
              '4'
            )}
          </div>
        </div>
        <div className={`flex-1 h-2 ${step >= 5 ? 'bg-orange-500' : 'bg-purple-600'} m-0`}></div>

        {/* Step 5 */}
        <div className={`flex flex-col items-center ${step >= 5 ? 'text-orange-600' : 'text-white'}`}>
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${step >= 5 ? 'bg-orange-500 text-white' : 'bg-purple-800'}`}>
            {step === 5 ? (
              <p>5</p>
            ) : (
              '5'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
