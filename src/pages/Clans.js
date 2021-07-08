import { useState } from 'react'
import './Clans.css'

import { clans } from '../data'

import { useGlobalContext } from '../context'

import { Link } from 'react-router-dom'

function Clan() {
  const { handlePage } = useGlobalContext()
  handlePage('clans')

  const [clanActive, setClanActive] = useState(clans[0])

  const handleClan = (value) => {
    setClanActive(value)
  }

  return (
    <>
      <section
        className='clan-banner'
        style={{ backgroundImage: `url(${clanActive.header})` }}
      >
        <div className='page-title'>
          <span>Môn phái</span>
        </div>
      </section>
      <section className='submenu-list-container'>
        <ul>
          {clans.map((clan) => {
            return (
              <li
                className={`${
                  clan?.slug === clanActive?.slug ? `selected` : ``
                }`}
                key={clan?.id}
              >
                <Link
                  className={`${
                    clan?.slug === clanActive?.slug ? `selected` : ``
                  }`}
                  key={clan?.id}
                  onClick={() => handleClan(clan)}
                >
                  {clan?.name}
                </Link>

                {/* <a
                  href='#'
                  className={`${
                    clan?.slug === clanActive?.slug ? `selected` : ``
                  }`}
                  key={clan?.id}
                  onClick={() => handleClan(clan)}
                >
                  {clan?.name}
                </a> */}
              </li>
            )
          })}
        </ul>
      </section>
      <section className='clan-description'>
        <div className='content-container'>
          <div className='top-content-bg'>
            <div className='top-content'>
              <div className='text-area'>
                <div className='ta-title'>
                  <img src='https://static.papayaplay.com/static/assets/images/9dragons/clans/clan_title_bar.svg' />
                  <p>{clanActive?.name}</p>
                </div>
                <div className='ta-description'>{clanActive?.desc}</div>
                <img src={clanActive?.mma} className='ta-image'></img>
              </div>

              <div className='image-area'>
                <img src={clanActive?.image} className='clan-char-img'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clan
