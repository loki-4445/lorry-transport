import './Header.css'
import { useState } from 'react';
import Modal from '../modal/Modal';
function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  if(modalOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
   <div className="qhead">
    <div className="nav head">
        <div className="nav-list">
            <div className="nav-link">
                <img src='https://t4.ftcdn.net/jpg/05/13/27/47/360_F_513274784_ODMhFkABNS39FcHaw6vTaU8B1fychEbw.jpg'className='logoo' alt="logo" />
            </div>
        </div>
        <div className="nav-list">
            <div className="nav-link">
            <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Load
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
        </div>
        <div className="nav-list">
            <div className="nav-link">
                <button className='bg-warning text-center  '>Login</button>
            </div>
        </div>
        <div className="nav-list">
            <div className="nav-link">
                Help Desk
            </div>
        </div>
    </div>
   </div>
  )
}

export default Header