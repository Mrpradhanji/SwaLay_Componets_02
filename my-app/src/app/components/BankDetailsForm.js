'use client'
import { useState } from 'react';

import Bankdetails from '@/schemas/Bankdetails';

const BankDetailsForm = () => {
  const [formData, setFormData] = useState({
    accountHolderName: '',
    bankName: '',
    branchName: '',
    accountNumber: '',
    ifscCode: '',
    upiId: '',
    panNumber: '',
    gst: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const [errors,setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = Bankdetails.safeParse(formData);

    if(!result.success){
      const validationErrors = result.error.format();
      setErrors(validationErrors);
    }
    else{
      setErrors({});
    }
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  const getLabelWithAsterisk = (label) => (
    <span>
      {label} <span className="text-red-500">*</span>
    </span>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">
         {getLabelWithAsterisk("Account Holder Name")}
        </label>
        <input
          type="text"
          name="accountHolderName"
          id="accountHolderName"
          placeholder="enter account holder name"
          value={formData.accountHolderName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.accountHolderName && <p className="text-red-500 text-xs">{errors.accountHolderName._errors}</p>}
      </div>
      <div>
        <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
        {getLabelWithAsterisk("Bank Name")}
        </label>
        <input
          type="text"
          name="bankName"
          id="bankName"
          placeholder="enter bank name"
          value={formData.bankName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.bankName && <p className="text-red-500 text-xs">{errors.bankName._errors}</p>}
      </div>
      <div>
        <label htmlFor="branchName" className="block text-sm font-medium text-gray-700">
        {getLabelWithAsterisk("Branch Name")}
        </label>
        <input
          type="text"
          name="branchName"
          id="branchName"
          placeholder="enter branch name"
          value={formData.branchName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.branchName && <p className="text-red-500 text-xs">{errors.branchName._errors}</p>}
      </div>
      <div>
        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
        {getLabelWithAsterisk("Account Number")}
        </label>
        <input
          type="text"
          name="accountNumber"
          id="accountNumber"
          placeholder="enter account number"
          value={formData.accountNumber}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.accountNumber && <p className="text-red-500 text-xs">{errors.accountNumber._errors}</p>}
      </div>
      <div>
        <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">
        {getLabelWithAsterisk("IFSC Code")}
        </label>
        <input
          type="text"
          name="ifscCode"
          id="ifscCode"
          placeholder="enter IFSC code"
          value={formData.ifscCode}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.ifscCode && <p className="text-red-500 text-xs">{errors.ifscCode._errors}</p>}
      </div>
      <div>
        <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">
        {getLabelWithAsterisk("UPI ID")}
        </label>
        <input
          type="text"
          name="upiId"
          id="upiId"
          placeholder="enter UPI ID"
          value={formData.upiId}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.upiId && <p className="text-red-500 text-xs">{errors.upiId._errors}</p>}
      </div>
      <div>
      <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">
        {getLabelWithAsterisk("PAN Number")}
        </label>
        <input
          type="text"
          name="panNumber"
          id="panNumber"
          placeholder="enter PAN number"
          value={formData.panNumber}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.panNumber && <p className="text-red-500 text-xs">{errors.panNumber._errors}</p>}
      </div>
      <div>
        <label htmlFor="gst" className="block text-sm font-medium text-gray-700">
        {getLabelWithAsterisk("GST")}
        </label>
        <input
          type="text"
          name="gst"
          id="gst"
          placeholder="enter GST number"
          value={formData.gst}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
         {errors.gst && <p className="text-red-500 text-xs">{errors.gst._errors}</p>}
      </div>
      <div>
        <button
          type="submit"
          className=" bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default BankDetailsForm;

