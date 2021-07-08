import React, { useState } from 'react'
import logo from '../images/logo.png'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa'
import { social, links } from '../data'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'

const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    openModal,
    closeModal,
    isModalOpen,
    handlePage,
    page,
  } = useGlobalContext()

  const openPopup = (value) => {
    openModal()
    closeSidebar()
  }

  const closeMySidebar = (value) => {
    handlePage(value)
    closeSidebar()
  }

  return (
    <>
      <aside
        className={`${
          isSidebarOpen
            ? `${styles.sidebar} ${styles.showSideBar}`
            : `${styles.sidebar}`
        }`}
      >
        <div className={styles.sidebarHeader}>
          <Link to='/' onClick={() => closeMySidebar('')}>
            <img src={logo} className={styles.logo} alt='Cửu Long VNG' />
          </Link>

          <button className={styles.closeBtn} onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className={styles.links}>
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <Link
                  to={url}
                  onClick={() => closeMySidebar(url.substring(1, url.length))}
                >
                  {text}
                </Link>
              </li>
            )
          })}

          <Link onClick={() => window.open('http://sso.cuulongvng.com')}>
            Đăng nhập
          </Link>
        </ul>
        <ul className={styles.socialIcons}>
          {social.map((link) => {
            const { id, url, icon, type } = link
            return (
              <li key={id}>
                {type === 'mail' && <a href={`mailto:${url}`}>{icon}</a>}
                {type !== 'mail' && (
                  <Link onClick={() => window.open(url)}>{icon}</Link>
                  // <a href='#' onClick={() => window.open(url)}>
                  //   {icon}
                  // </a>
                )}
              </li>
            )
          })}
        </ul>
      </aside>
      {isModalOpen && (
        <Modal>
          <Login />
        </Modal>
      )}
    </>
  )
}

export default Sidebar
