import React, { useState } from 'react'

import styles from './Login.module.css'

import { NotificationManager } from 'react-notifications'

function Login() {
  // const { createNotification } = useGlobalContext()
  const [command, setCommand] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [process, setProcess] = useState(false)
  const [user, setUser] = useState({
    userName: '',
    userPass: '',
    email: '',
  })

  const showAddAlbumDialog = () => {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    switch (command) {
      case 0:
        // login
        if (user.userName && user.email && user.userPass) {
          setProcess(true)
          NotificationManager.success('Success message', 'Title here')
        }
        break
      case 1:
        if (user.userName && user.email && user.userPass) {
          setProcess(true)
        }
        // register
        break
      case 2:
        if (user.userName && user.email) {
          setProcess(true)
        }
        // lose pass
        break
      default:
        break
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleCommand = (value) => {
    setCommand(value)
    setSubmitted(false)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <button
            className={`${
              command === 0
                ? `${styles.actionBtn} ${styles.actived}`
                : `${styles.actionBtn}`
            }`}
            onClick={() => handleCommand(0)}
          >
            Đăng nhập
          </button>
          <button
            className={`${
              command === 1
                ? `${styles.actionBtn} ${styles.actived}`
                : `${styles.actionBtn}`
            }`}
            onClick={() => handleCommand(1)}
          >
            Đăng ký
          </button>
          <button
            className={`${
              command === 2
                ? `${styles.actionBtn} ${styles.actived}`
                : `${styles.actionBtn}`
            }`}
            onClick={() => handleCommand(2)}
          >
            Quên mật khẩu
          </button>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.inputField}>
            <div className={styles.label}>
              <label>Tên đăng nhập</label>
            </div>
            <div>
              <input
                id='userName'
                name='userName'
                type='text'
                value={user?.userName}
                onChange={handleChange}
                className={submitted && !user.userName ? styles.hasError : ''}
              />
            </div>
            {/* {submitted && !user.userName && (
                <div className={styles.helpBlock}>Required</div>
              )} */}
          </div>

          <div
            className={`${
              command === 2
                ? `${styles.inputField} ${styles.disAppeared}`
                : `${styles.inputField}`
            }`}
          >
            <div className={styles.label}>
              <label>Mật khẩu</label>
            </div>
            <div>
              <input
                id='userPass'
                name='userPass'
                type='password'
                value={user?.userPass}
                onChange={handleChange}
                className={
                  submitted && command !== 2 && !user.userPass
                    ? styles.hasError
                    : ''
                }
              />
            </div>
            {/* {submitted && !user.userPass && (
                <div className={styles.helpBlock}>Required</div>
              )} */}
          </div>

          <div className={styles.inputField}>
            <div className={styles.label}>
              <label>Email</label>
            </div>
            <div>
              <input
                id='email'
                name='email'
                type='email'
                value={user?.email}
                onChange={handleChange}
                className={submitted && !user.email ? styles.hasError : ''}
              />
            </div>
            {/* {submitted && !user.email && (
                <div className={styles.helpBlock}>Required</div>
              )} */}
          </div>
        </div>

        <div className={styles.btnActionContainer}>
          <button className={styles.cancelBtn} onClick={showAddAlbumDialog}>
            Cancel
          </button>
          <button className={styles.saveBtn} onClick={handleSubmit}>
            Save
            {process && (
              <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Login
