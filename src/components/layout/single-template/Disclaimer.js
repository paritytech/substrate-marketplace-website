import React from 'react';

import useComponentVisible from '../../../hooks/use-component-visible';
import Modal from '../../ui/Modal';

export default function Disclaimer() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <>
      <div
        className="mb-3 text-substrateBlue cursor-pointer underline-animate underline-animate-thin"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        Disclaimer
      </div>
      {isComponentVisible && (
        <Modal id={ref} closeModal={setIsComponentVisible}>
          <div className="text-center">
            <h4>Substrate Marketplace Listing Disclaimer</h4>
            <p className="mb-0">
              The information on this website is provided for general information purposes only, and should not be taken
              as an endorsement of any pallet, tool, module or other content, or advice on which you can rely. Content
              on the website, including descriptions of pallets, modules and tools, may be submitted by other
              contributors – and as we don’t check or validate submissions from contributors, we can’t always be sure of
              the accuracy or completeness of their content. Accordingly, we give no guarantee that the content on the
              website is accurate or complete or will be free from errors or omissions – see our Terms of Use for more
              details. If you do notice an error or issue with any content on the website you can let us know by sending
              an email to [admin@parity.io] and we’ll try to look into it.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
