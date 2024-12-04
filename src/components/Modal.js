import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = () => {
    useEffect(() => {
        const closeModal = (event) => {
            const target = event.target;
            if (target.classList.contains('jw-modal')) {
                const modal = document.querySelector('.jw-modal.open');
                if (modal) {
                    modal.classList.remove('open');
                    document.body.classList.remove('jw-modal-open');
                }
            }
        };

        document.addEventListener('click', closeModal);

        return () => {
            document.removeEventListener('click', closeModal);
        };
    }, []);

    return (
        <div id="media-model" className={`${styles.jwModal} jw-modal`}>
            <div className={styles.jwModalBody}>
                <iframe src="" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Modal;

