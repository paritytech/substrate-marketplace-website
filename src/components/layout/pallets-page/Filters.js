import React from 'react';

import CategorieFilter from './CategorieFilter';
import MobileFilters from './MobileFilters';
import VersionFilter from './VersionFilter';

export default function Filters({
  categories,
  selectedVersion,
  setSelectedVersion,
  selectedCategory,
  setSelectedCategory,
}) {
  const versions = ['Substrate 2.0', 'Substrate 3.0'];

  return (
    <>
      <div className="lg:hidden">
        <MobileFilters
          versions={versions}
          categories={categories}
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="hidden lg:block lg:flex-none w-52">
        <VersionFilter versions={versions} selectedVersion={selectedVersion} setSelectedVersion={setSelectedVersion} />
        <CategorieFilter
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </div>
    </>
  );
}
