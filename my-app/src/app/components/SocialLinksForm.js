
'use client'
import { useState } from 'react';
import Tabs from './Tabs';
import socialLinksSchema from '@/schemas/Sociallinks';
//import BasicInfoForm from './BasicInfoForm';
import BankDetailsForm from './BankDetailsForm';
//import SupportForm from './SupportForm';

const SocialLinksForm = () => {
  const [activeTab, setActiveTab] = useState('basicInfo');

  return (
    <div className="max-w-xl mx-auto p-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
     {/* {activeTab === 'basicInfo' && <BasicInfoForm />} */}
      {activeTab === 'aboutMe' && <AboutMeForm />}
      {activeTab === 'bankDetails' && <BankDetailsForm />}
      {activeTab === 'support' && <SupportForm />}
    </div>
  );
};

const AboutMeForm = () => {
  const [formData, setFormData] = useState({
    aboutLabel: 'OFFICIAL SWALAY ACCOUNT',
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    youtube: '',
  });

  const [errors,setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = socialLinksSchema.safeParse(formData);

    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle form submission logic here
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="aboutLabel" className="block text-sm font-medium text-gray-700">
          About Label
        </label>
        <input
          type="text"
          name="aboutLabel"
          id="aboutLabel"
          value={formData.aboutLabel}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
          disabled
        />
      </div>
      <div>
        <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
          Instagram Profile Link
        </label>
        <input
          type="url"
          name="instagram"
          id="instagram"
          placeholder="enter profile link"
          value={formData.instagram}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.instagram && <p className="text-red-500 text-xs">{errors.instagram._errors}</p>}

      </div>
      <div>
        <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
          Facebook Profile Link
        </label>
        <input
          type="url"
          name="facebook"
          id="facebook"
          placeholder="enter profile link"
          value={formData.facebook}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.facebook && <p className="text-red-500 text-xs">{errors.facebook._errors}</p>}
      </div>
      <div>
        <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
          Twitter Profile Link
        </label>
        <input
          type="url"
          name="twitter"
          id="twitter"
          placeholder="enter profile link"
          value={formData.twitter}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.twitter && <p className="text-red-500 text-xs">{errors.twitter._errors}</p>}
      </div>
      <div>
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
          LinkedIn Profile Link
        </label>
        <input
          type="url"
          name="linkedin"
          id="linkedin"
          placeholder="enter profile link"
          value={formData.linkedin}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.linkedin && <p className="text-red-500 text-xs">{errors.linkedin._errors}</p>}
      </div>
      <div>
        <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
          YouTube Profile Link
        </label>
        <input
          type="url"
          name="youtube"
          id="youtube"
          placeholder="enter profile link"
          value={formData.youtube}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.youtube && <p className="text-red-500 text-xs">{errors.youtube._errors}</p>}
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

export default SocialLinksForm;
