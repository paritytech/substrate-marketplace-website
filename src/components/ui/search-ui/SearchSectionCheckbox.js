import React from 'react';

export default function SearchSectionCheckbox({ children }) {
  return (
    <label className="inline-flex items-center cursor-pointer mr-16">
      <input
        className="h-4 w-4 md:h-[18px] md:w-[18px] rounded bg-white text-substrateDark border-2 focus:ring-0 "
        type="checkbox"
        // checked={checked() || false}
        // onChange={() => handleChange()}
      />
      <span className="text-base md:text-lg font-semibold pl-2">{children}</span>
    </label>
  );
}
