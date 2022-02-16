import React from 'react';

import { sortCategories } from '../../../utils/sortCategories';

export default function MobileFilters({
  selectedCategory,
  setSelectedCategory,
  selectedVersion,
  setSelectedVersion,
  versions,
  categories,
}) {
  const capitalize = str =>
    str.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
      return letter.toUpperCase();
    });

  return (
    <>
      <div className="flex flex-col mb-6">
        <label className="text-lg mb-3">Filter by Type</label>
        <select value={selectedCategory} onChange={event => setSelectedCategory(event.target.value)}>
          <option value="all">All</option>
          {sortCategories(categories).map((cat, index) => (
            <option key={index} value={cat.name} className="capitalize">
              {capitalize(cat.name)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mb-6">
        <label className="text-lg mb-3">Filter by Substrate Version</label>
        <select value={selectedVersion} onChange={event => setSelectedVersion(event.target.value)}>
          {versions.map((version, index) => {
            return (
              <option key={index} value={version === 'Substrate 3.0' ? 'VERSION_3_0' : 'VERSION_2_0'}>
                {version}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
