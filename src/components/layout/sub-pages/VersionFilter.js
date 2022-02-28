import cx from 'classnames';
import React from 'react';

import useComponentVisible from '../../../hooks/use-component-visible';
import Icon from '../../default/Icon';

const VersionItem = ({ selectedVersion, setSelectedVersion, setIsComponentVisible, children, version }) => (
  <div
    className={cx('mb-6 cursor-pointer hover:text-substrateGreen hover:underline', {
      'text-substrateGreen': selectedVersion === version,
    })}
    id={version}
    onClick={e => {
      setSelectedVersion(e.target.id);
      setIsComponentVisible(false);
    }}
  >
    {children}
  </div>
);

export default function VersionFilter({ selectedVersion, setSelectedVersion, versions }) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <div ref={ref}>
      <div className="relative ml-2 mb-10">
        <div className="cursor-pointer outline-none" onClick={() => setIsComponentVisible(!isComponentVisible)}>
          <div className={cx('mb-2 inline-block', { 'text-substrateGreen': isComponentVisible })}>
            {selectedVersion === 'VERSION_3_0' ? 'Substrate 3.0' : 'Substrate 2.0'}
          </div>
          <Icon
            name="arrow-dropdown"
            className={cx('ml-2 inline-block fill-current', {
              'rotate-180 text-substrateGreen': isComponentVisible,
            })}
          />
        </div>
        {isComponentVisible && (
          <div className="absolute top-7 -left-2 border border-substrateGray-dark dark:border-substrateWhite bg-white dark:bg-substrateDark pt-6 px-6 rounded-xl shadow-md animate-fade-in-down">
            <VersionItem
              selectedVersion={selectedVersion}
              setSelectedVersion={setSelectedVersion}
              setIsComponentVisible={setIsComponentVisible}
              version={versions[0].value}
            >
              {versions[0].text}
            </VersionItem>
            <VersionItem
              selectedVersion={selectedVersion}
              setSelectedVersion={setSelectedVersion}
              setIsComponentVisible={setIsComponentVisible}
              version={versions[1].value}
            >
              {versions[1].text}
            </VersionItem>
          </div>
        )}
      </div>
    </div>
  );
}
