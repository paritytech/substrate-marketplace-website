import { Icon } from 'gatsby-plugin-substrate';
import React, { useEffect } from 'react';

export default function Modal({ id, children, closeModal }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center lg:items-start lg:mt-24 fixed inset-0 z-50 animate-fade-in max-h-screen">
        <div
          ref={id}
          className="relative bg-white dark:bg-gray-900 w-full max-w-screen-sm h-auto py-12 px-10 rounded-lg border-2 border-substrateDark shadow-xl max-h-screen overflow-scroll"
        >
          <div className="absolute top-6 right-6 cursor-pointer" onClick={() => closeModal(false)}>
            <Icon name="close-x" className="fill-current" />
          </div>
          {children}
        </div>
      </div>
      <div id="modal-background" className="opacity-25 dark:opacity-90 fixed inset-0 z-40 bg-substrateDark"></div>
    </>
  );
}
