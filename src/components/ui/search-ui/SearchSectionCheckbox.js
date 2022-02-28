import React from 'react';

export default function SearchSectionCheckbox({ isChecked, setIsChecked, children }) {
  const handleChange = event => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="inline-flex items-center mr-16">
      <input
        className="cursor-pointer h-4 w-4 md:h-[18px] md:w-[18px] rounded bg-white text-substrateDark border-2 focus:ring-0 "
        type="checkbox"
        id={children}
        checked={isChecked}
        onChange={e => handleChange(e)}
      />
      <label className="cursor-pointer text-base md:text-lg font-semibold pl-2" htmlFor={children}>
        {children}
      </label>
    </div>
  );
}
