import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { handleClose } from '../../shared/utils/utils';
// import { ModalBtn } from './Modal.styled';

const modalContainer = document.getElementById('modal');

const Modal = ({ onClose, children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const handleModalClose = useCallback(
    (e) => {
      document.body.style.overflow = 'visible';
      handleClose(e, onClose);
    },
    [onClose],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleModalClose);

    return () => document.body.removeEventListener('keydown', handleModalClose);
  }, [handleModalClose]);

  return createPortal(
    <div onClick={handleModalClose}>
      <div>
        <button onClick={onClose} type="button">
          Close
        </button>
        {children}
      </div>
    </div>,
    modalContainer,
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default Modal;
