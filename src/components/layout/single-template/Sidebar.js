import React from 'react';

import Disclaimer from './Disclaimer';
import ListItems from './ListItems';
import ListSection from './ListSection';

export default function Sidebar({ data, section }) {
  const {
    homepage,
    repository,
    listingInsights,
    projectRelations,
    forwardDependencies,
    reverseDependencies,
    categories,
    license,
    version,
    compatibilityVersion,
    authors,
  } = data;

  return (
    <div className="w-full lg:w-60 lg:p-1">
      {(homepage || repository) && (
        <ListSection title="Developer Links">
          {homepage && <ListItems section="dev" data={homepage} />}
          {repository && <ListItems section="dev" type="repo" data={repository} />}
        </ListSection>
      )}

      {(version || compatibilityVersion) && (
        <ListSection title="Version">
          {version && <ListItems section="version" data={[version, compatibilityVersion]} />}
        </ListSection>
      )}

      {authors && (
        <ListSection title="Authors">
          <ListItems section="author" data={authors} />
        </ListSection>
      )}

      {listingInsights.insights.length > 0 && (
        <ListSection title="Insights">
          <ListItems section="insights" data={listingInsights} />
        </ListSection>
      )}

      {section != 'projects' && (
        <ListSection title="Dependencies">
          {forwardDependencies.dependencies.length > 0 ? (
            <ListItems section="forwardDependencies" data={forwardDependencies.dependencies} />
          ) : reverseDependencies.dependencies.length > 0 ? (
            <ListItems section="reverseDependencies" data={reverseDependencies.dependencies} />
          ) : (
            <div className="ml-4">None</div>
          )}
        </ListSection>
      )}

      {section === 'projects' && projectRelations.relations.length > 0 && (
        <ListSection title="Runtimes">
          <ListItems section="runtimes" data={projectRelations.relations} />
        </ListSection>
      )}

      {categories && (
        <ListSection title="Categories">
          <ListItems section="categories" data={categories} />
        </ListSection>
      )}

      {license && (
        <ListSection title="License">
          <ListItems section="license" data={license} />
        </ListSection>
      )}

      <Disclaimer />
    </div>
  );
}
