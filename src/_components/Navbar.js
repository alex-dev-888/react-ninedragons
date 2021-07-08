import React from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaGooglePlay } from 'react-icons/fa'
import logo from '../images/logo.png'

import { useGlobalContext } from '../context'

function Navbar() {
  const { openSidebar, handlePage, page } = useGlobalContext()

  return (
    <nav>
      <div className='nav-center'>
        <div className='header-left'>
          <button className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
          <div className='logo'>
            <Link to='/' onClick={() => handlePage('')}>
              <img src={logo} alt='CuulongVNG' />
            </Link>
          </div>
          <div className='link-container'>
            <ul className='links'>
              <li>
                <Link
                  to='/clans'
                  onClick={() => handlePage('clans')}
                  className={`${page === 'clans' ? `actived` : ``}`}
                >
                  Môn phái
                </Link>
              </li>
              <li>
                <Link
                  to='/news'
                  onClick={() => handlePage('news')}
                  className={`${page === 'news' ? `actived` : ``}`}
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  to='/ranks'
                  onClick={() => handlePage('ranks')}
                  className={`${page === 'ranks' ? `actived` : ``}`}
                >
                  Xếp hạng
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => window.open('https://www.facebook.com/9d.vng')}
                >
                  Hỗ trợ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='header-right'>
          <button
            className='googlePlayBtn'
            onClick={() => window.open('http://sso.cuulongvng.com/')}
          >
            <FaGooglePlay />
          </button>
          <button
            className='download9dBtn'
            onClick={() =>
              window.open(
                'https://drive.google.com/drive/folders/1jo2FrMIkGXme0HpCpslLWTeNL_a8UW6u?usp=sharing'
              )
            }
          >
            Tải về
          </button>
        </div>
        <button className='nav-toggle-right'>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
