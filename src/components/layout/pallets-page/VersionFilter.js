import cx from 'classnames';
import React from 'react';

import useComponentVisible from '../../../hooks/use-component-visible';
import Icon from '../../default/Icon';

export default function VersionFilter({ versions, selectedVersion, setSelectedVersion }) {
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
          <div className="absolute top-7 -left-2 border border-substrateGray-dark bg-white pt-6 px-6 rounded-xl shadow-md animate-fade-in-down">
            {versions.map((version, index) => {
              const currentVersion = () => {
                if (version === 'Substrate 2.0') {
                  return 'VERSION_2_0';
                } else {
                  return 'VERSION_3_0';
                }
              };
              return (
                <div
                  key={index}
                  className={cx('mb-6 cursor-pointer hover:text-substrateGreen hover:underline', {
                    'text-substrateGreen': selectedVersion === currentVersion(),
                  })}
                  id={version === 'Substrate 3.0' ? 'VERSION_3_0' : 'VERSION_2_0'}
                  onClick={e => {
                    setSelectedVersion(e.target.id);
                    setIsComponentVisible(false);
                  }}
                >
                  {version}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
