import { FC, ReactNode, useEffect } from 'react';
import Modal from 'react-modal';

import { icons } from 'assets/icons';

import scss from './CustomModal.module.scss';

interface ICustomModal {
    modalIsOpen: boolean;
    closeModal: () => void;
    isLoading: boolean;
    onClickOrders?: () => void;
    children: ReactNode;
}

Modal.setAppElement('#root');

const CustomModal: FC<ICustomModal> = ({
    modalIsOpen,
    closeModal,
    isLoading,
    onClickOrders,
    children,
}) => {
    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'visible';
    }, [modalIsOpen]);

    return (
        <>
            <Modal
                isOpen={modalIsOpen && !isLoading}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                overlayClassName={scss.overlay}
                className={scss.content}
            >
                <div className={scss.modalWrapper}>
                    <button
                        onClick={() => {
                            closeModal();
                            onClickOrders && onClickOrders();
                            document.body.style.overflow = 'visible';
                        }}
                        className={scss.closeButton}
                    >
                        <svg className={scss.closeIcon}>
                            <use href={`${icons}#icon-close`}></use>
                        </svg>
                    </button>
                    {children}
                </div>
            </Modal>
        </>
    );
};

export default CustomModal;
