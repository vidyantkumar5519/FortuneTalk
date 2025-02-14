import React from 'react';

const KundliMatchingForm = ({ formData, onFormChange, disabled }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='border mx-0 lg:mx-1 rounded-[10px] border-[#B3B3B3]'>
      <div className="grid grid-cols-2 gap-8 mx-4 lg:mx-0 my-4">
        <div className="w-full lg:w-3/4 mx-auto">
          <input
            className="flex h-10 w-full border-b-2 text-center border-[#9B9696] bg-transparent px-3 py-2 text-sm placeholder:text-[#9B9696] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </div>
        <div className="w-full lg:w-3/4 mx-auto">
          <input
            className="flex h-10 w-full border-b-2 text-center border-[#9B9696] bg-transparent px-3 py-2 text-sm placeholder:text-[#9B9696] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName || ''}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </div>
        <div className='w-full lg:w-3/4 mx-auto'>
          <select 
            name="gender"
            value={formData.gender || ''}
            onChange={handleInputChange}
            disabled={disabled}
            className="bg-white border-2 text-[#9B9696] border-[#9B9696] text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3 block"
          >
            <option value="" className='text-[#9B9696]'>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className='w-full lg:w-3/4 mx-auto'>
          <input 
            type="date" 
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            disabled={disabled}
            className="bg-white border-2 text-[#9B9696] border-[#9B9696] text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3 block"
          />
        </div>
        <div className='w-full lg:w-3/4 mx-auto'>
          <input 
            type="time"
            name="birthTime"
            value={formData.birthTime}
            onChange={handleInputChange}
            disabled={disabled}
            className="bg-white border-2 text-[#9B9696] border-[#9B9696] text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3 block"
          />
        </div>
        <div className='w-full lg:w-3/4 mx-auto'>
          <input
            type="text"
            name="birthPlace"
            placeholder="Birth Place"
            value={formData.birthPlace}
            onChange={handleInputChange}
            disabled={disabled}
            className="bg-white border-2 text-[#9B9696] border-[#9B9696] text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3 block"
          />
        </div>
      </div>
    </div>
  );
};

export default KundliMatchingForm;
