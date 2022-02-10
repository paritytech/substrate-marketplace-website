import cx from 'classnames';
import React, { useEffect, useState } from 'react';

// import Icon from '../../default/Icon';

export default function Filters({ categories, setSelectedVersion, selectedCategory, setSelectedCategory }) {
  const versions = ['Substrate 3.0', 'Substrate 2.0'];
  const [isVersionTwo, setIsVersionTwo] = useState(false);
  const capitalize = str =>
    str.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
      return letter.toUpperCase();
    });
  const sortCategories = arr => arr.sort((a, b) => a.name.localeCompare(b.name));
  useEffect(() => {
    isVersionTwo ? setSelectedVersion('VERSION_2_0') : setSelectedVersion('VERSION_3_0');
  }, [isVersionTwo]);

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
          <select onChange={event => setSelectedVersion(event.target.value)}>
            {versions.map((version, index) => (
              <option key={index} value={version === 'Substrate 3.0' ? 'VERSION_3_0' : 'VERSION_2_0'}>
                {version}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-none w-52">
        <div className="relative ml-2 mb-12">
          <div className="mb-2">Substrate Version</div>
          <div className="flex items-center justify-start w-full mb-12">
            <label htmlFor="toogleA" className="flex items-center cursor-pointer">
              <div className="mr-3 font-medium">2.0</div>
              <div className="relative" onClick={() => setIsVersionTwo(!isVersionTwo)}>
                <input type="checkbox" checked={!isVersionTwo} className="sr-only" onChange={e => e.preventDefault()} />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-substrateGreen rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              <div className="ml-3 font-medium">3.0</div>
            </label>
          </div>
          {/* <Icon name="arrow-dropdown" className="ml-2" /> */}
          {/* <div className="absolute top-7 -left-2 border border-substrateGray-dark py-1 px-2 rounded-xl shadow-md">
            {selectedVersion === 'VERSION_3_0' ? 'Substrate 2.0' : 'Substrate 3.0'}
          </div> */}
        </div>
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
