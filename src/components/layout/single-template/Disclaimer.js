import React from 'react';

import useComponentVisible from '../../../hooks/use-component-visible';
import { useDisclaimer } from '../../../hooks/use-disclaimer-text';
import Modal from '../../ui/Modal';

export default function Disclaimer() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { disclaimer } = useDisclaimer();

  return (
    <>
      <div className="mb-3" onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <span className="text-substrateBlue cursor-pointer duration-75 ease-in-out hover:border-b hover:border-substrateBlue">
          Disclaimer
        </span>
      </div>
      {isComponentVisible && (
        <Modal id={ref} closeModal={setIsComponentVisible}>
          <div className="text-center">
            <h4>{disclaimer.frontmatter.title}</h4>
            <p className="mb-0" dangerouslySetInnerHTML={{ __html: disclaimer.html }} />
          </div>
        </Modal>
      )}
    </>
  );
}
