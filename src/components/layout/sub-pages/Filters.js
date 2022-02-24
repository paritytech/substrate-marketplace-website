import React, { useEffect, useState } from 'react';

import CategorieFilter from './CategorieFilter';
import MobileFilters from './MobileFilters';
import VersionFilter from './VersionFilter';

export default function Filters({
  categories,
  section,
  selectedVersion,
  setSelectedVersion,
  selectedCategory,
  setSelectedCategory,
}) {
  const versions = ['Substrate 2.0', 'Substrate 3.0'];
  const [sanitizedCats, setSanitizedCats] = useState([]);

  useEffect(() => {
    categories.forEach(cat => {
      setSanitizedCats(prevState => [...prevState, cat.name.toLowerCase()]);
    });
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <MobileFilters
          versions={versions}
          categories={sanitizedCats}
          section={section}
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="hidden lg:block lg:flex-none w-52">
        {section != 'projects' && (
          <VersionFilter
            versions={versions}
            selectedVersion={selectedVersion}
            setSelectedVersion={setSelectedVersion}
          />
        )}
        <CategorieFilter
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categories={sanitizedCats}
        />
      </div>
    </>
  );
}
