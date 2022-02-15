import cx from 'classnames';
import React from 'react';

import VersionFilter from './VersionFilter';

export default function Filters({
  categories,
  selectedVersion,
  setSelectedVersion,
  selectedCategory,
  setSelectedCategory,
}) {
  const versions = ['Substrate 2.0', 'Substrate 3.0'];

  // console.log(setIsVersionTwo);
  const capitalize = str =>
    str.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
      return letter.toUpperCase();
    });
  const sortCategories = arr => arr.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="lg:hidden">
        <div className="flex flex-col mb-6">
          <label className="text-lg mb-3">Filter by Type</label>
          <select>
            <option>All</option>
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
      </div>
      <div className="hidden lg:block lg:flex-none w-52">
        <VersionFilter versions={versions} selectedVersion={selectedVersion} setSelectedVersion={setSelectedVersion} />

        <ul className="list-none">
          <li
            onClick={event => setSelectedCategory(event.target.innerText.toLowerCase())}
            className={cx('mb-8 capitalize cursor-pointer', 'hover:text-substrateGreen', {
              'font-bold text-substrateGreen': selectedCategory === 'all',
            })}
          >
            All
          </li>
          {sortCategories(categories).map((cat, index) => {
            return (
              <li
                key={index}
                onClick={event => setSelectedCategory(event.target.innerText.toLowerCase())}
                className={cx('mb-8 capitalize cursor-pointer', 'hover:text-substrateGreen', {
                  'font-bold text-substrateGreen': cat.name.toLowerCase() === selectedCategory,
                })}
              >
                {cat.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
