import { useState } from 'react';

import { Link } from 'react-router-dom';

import Modal from 'components/Modal';

import { ReactComponent as Logo } from 'assets/crown.svg';

import './Navbar.styles.scss';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModalVisibility = () => setShowModal(!showModal);

    return (
        <nav className='Navbar'>
            <div className='Navbar__container' >
                <Link className='Navbar__logoContainer' to='/'>
                    <Logo className='logo' />
                </Link>
                <h1>Social App</h1>
                <button onClick={toggleModalVisibility} >Add post</button>
                <Modal title="My Modal" onClose={toggleModalVisibility} show={showModal}>
                    <p>modal body</p>
                </Modal>
            </div>
        </nav>
    );
}

export default Navbar;