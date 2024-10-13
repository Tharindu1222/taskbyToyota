import React, { useState } from 'react';
import Stepper from './StepNav/Stepper';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormStep5 from './FormStep5';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    applicantName: { firstName: '', lastName: '' },
    submittingForSomeoneElse: false,
    relationship: '',
    age: '',
    disability: false,
    disabilityFile: null,
    mealPlan: '',
    daysRequested: [],
    address: { street: '', apartment: '', city: '', state: '', postal: '', country: 'Sri Lanka' },
    deliveryInstructions: '',
    phoneNumber: '',
    secondaryPhoneNumber: '',
    email: '',
    signatureFirstName: '',
    signatureLastName: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  const handleSubmit = () => {
    console.log('Final submission', formData);
    nextStep(); // Move to the thank you page
  };

  return (
    <div className="form-container">
      <Stepper step={step} />

      {step === 1 && (
        <FormStep1 nextStep={nextStep} handleChange={handleChange} formData={formData} />
      )}
      {step === 2 && (
        <FormStep2 prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} formData={formData} />
      )}
      {step === 3 && (
        <FormStep3 prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} formData={formData} />
      )}
      {step === 4 && (
        <FormStep4 prevStep={prevStep} handleChange={handleChange} formData={formData} handleSubmit={handleSubmit} />
      )}
      {step === 5 && <FormStep5 />}
    </div>
  );
};

export default Form;
