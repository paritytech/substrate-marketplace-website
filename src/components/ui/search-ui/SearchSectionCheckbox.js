import React from 'react';

export default function SearchSectionCheckbox({ isChecked, setIsChecked, children }) {
  const handleChange = event => {
    setIsChecked(event.target.checked);
  };
  return (
    <label className="inline-flex items-center cursor-pointer mr-16">
      <input
        className="h-4 w-4 md:h-[18px] md:w-[18px] rounded bg-white text-substrateDark border-2 focus:ring-0 "
        type="checkbox"
        checked={isChecked}
        onChange={e => handleChange(e)}
      />
      <span className="text-base md:text-lg font-semibold pl-2">{children}</span>
    </label>
  );
}
