import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

import DataContext from '../../contexts/DataContext';

export default function NavBreadcrumb() {
  return (
    <DataContext.Consumer>
      {({ pageContext, pageTitle }) => {
        const {
          breadcrumb: { location },
        } = pageContext;
        return (
          <Breadcrumb
            crumbs={pageContext.breadcrumb.crumbs}
            crumbSeparator=""
            crumbLabel={pageTitle}
            /* Enable hiddenCrumbs to hide specific links */
            // hiddenCrumbs={['/']}
            /* keep parent as a link and disable children links (eg):
            "/<ecosystem>/resources/awesome-substrate" and "/<ecosystem>/resources/" */
            disableLinks={[`${location}`]}
            className="breadcrumb__list breadcrumb__list__item breadcrumb__separator breadcrumb__link breadcrumb__link__active"
          />
        );
      }}
    </DataContext.Consumer>
  );
}
