import cx from 'classnames';
import React from 'react';

export default function MobileFilters({
  selectedCategory,
  setSelectedCategory,
  selectedVersion,
  setSelectedVersion,
  versions,
  section,
  categories,
}) {
  return (
    <>
      <div className={cx('flex flex-col', { 'mb-6': section != 'projects' }, { 'mb-16': section === 'projects' })}>
        <label className="text-lg mb-3">Filter by Type</label>
        <select
          className="dark:bg-substrateDark"
          value={selectedCategory}
          onChange={event => {
            if (event.target.value === 'all') {
              history.pushState('', document.title, location.pathname);
            }
            setSelectedCategory(event.target.value);
          }}
        >
          <option value="all">All</option>
          {categories.sort().map((cat, index) => (
            <option key={index} value={cat} className="capitalize">
              {cat}
            </option>
          ))}
        </select>
      </div>
      {section !== 'projects' && (
        <div className="flex flex-col mb-16">
          <label className="text-lg mb-3">Filter by Substrate Version</label>
          <select
            className="dark:bg-substrateDark"
            value={selectedVersion}
            onChange={event => setSelectedVersion(event.target.value)}
          >
            <option value={versions[1].value}>{versions[1].text}</option>
            <option value={versions[0].value}>{versions[0].text}</option>
          </select>
        </div>
      )}
    </>
  );
}
