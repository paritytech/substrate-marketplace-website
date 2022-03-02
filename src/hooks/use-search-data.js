import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';

const useSearchData = () => {
  const {
    searchData: { pallets, runtimes, projects },
  } = useStaticQuery(
    graphql`
      query {
        searchData: marketplace {
          pallets: search(category: "", query: "", type: PALLET) {
            results {
              ... on marketplace_Pallet {
                name
                description
              }
            }
          }
          runtimes: search(category: "", query: "", type: RUNTIME) {
            results {
              ... on marketplace_Runtime {
                name
                description
              }
            }
          }
          projects: search(category: "", query: "", type: PROJECT) {
            results {
              ... on marketplace_Project {
                name
                description
              }
            }
          }
        }
      }
    `
  );
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    pallets.results.forEach(pallet =>
      setSearchData(prevState => [
        ...prevState,
        { name: pallet.name.toLowerCase(), description: pallet.description, section: 'pallet' },
      ])
    );
    runtimes.results.forEach(runtime =>
      setSearchData(prevState => [
        ...prevState,
        { name: runtime.name.toLowerCase(), description: runtime.description, section: 'runtime' },
      ])
    );
    projects.results.forEach(project =>
      setSearchData(prevState => [
        ...prevState,
        { name: project.name.toLowerCase(), description: project.description, section: 'project' },
      ])
    );
  }, []);
  return searchData;
};

export default useSearchData;
