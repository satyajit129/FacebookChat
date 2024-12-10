"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Select component with ssr: false to prevent hydration issues
const Select = dynamic(() => import('react-select'), { ssr: false });

const SelectField = ({ isMulti = true, options = [] }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div style={{ width: '100%' }}>
      <Select
        isMulti={isMulti}  // Dynamically enable multiple or single select based on the prop
        value={selectedOptions}
        onChange={handleChange}
        options={options}  // Use the passed options prop
      />
    </div>
  );
};

export default SelectField;
