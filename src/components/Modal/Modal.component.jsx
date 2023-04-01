import { useEffect, useCallback } from 'react';

import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import './Modal.styles.scss';

const Modal = ({ onClose, show, title, children }) => {

    const closeOnEscapeKeyDown = useCallback( e => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, [closeOnEscapeKeyDown]);

    return ReactDOM.createPortal(
        <CSSTransition
            in={show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="Modal" onClick={onClose}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className="modal__header">
                        <h4 className="modal__title">{title}</h4>
                    </div>
                    <div className="modal__body">{children}</div>
                    <div className="modal__footer">
                        <button onClick={onClose} className="modal__closeButton">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}

export default Modal;