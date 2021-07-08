import React from 'react'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa'
import styles from './Modal.module.css'

const Modal = ({ children }) => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen
          ? `${styles.modalOverlay} ${styles.showModal}`
          : `${styles.modalOverlay}`
      }`}
    >
      <div className={styles.modalContainer}>
        {children}
        <button className={styles.closeModalBtn} onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal
