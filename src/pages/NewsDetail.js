import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import { FaBackspace } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'

import newsBugFixed from '../images/news-bug-fixed.png'
import newsEvent from '../images/news-event.png'
import newsNew from '../images/news-news.png'

import { useGlobalContext } from '../context'

import { useFetch } from '../_helper/useFetch'

function NewsDetail() {
  const { id } = useParams()

  const { loading, data } = useFetch()
  var news = null

  if (!loading) {
    var newsArray = data?.filter((item) => item.id === +id)
    if (newsArray.length > 0) {
      news = newsArray[0]
    }
  }

  const { handlePage } = useGlobalContext()
  handlePage('news')

  return (
    <>
      <section className={styles.newsBanner}>
        <div className={styles.pageTitle}>
          <span>Tin tức & sự kiện</span>
        </div>
      </section>

      <section className={styles.newsDescription}>
        <div className={styles.detailsContainer}>
          <Link to='/news' className={styles.backIcon}>
            <FaBackspace />
          </Link>
          <article className={styles.detailsDescription}>
            <div className={styles.detailImageContainer}>
              {news?.type === 'Sự kiện' && <img src={newsEvent}></img>}

              {news?.type === 'Tin tức' && <img src={newsNew}></img>}

              {news?.type === 'Cập nhật' && <img src={newsBugFixed}></img>}
            </div>
            <div className={styles.detailsNewsFooter}>
              <h2>{news?.type}</h2>
              <h1>{news?.title}</h1>
              <h3>{news?.datetime}</h3>
              <div className={styles.newsDetailContentPost}>
                <div dangerouslySetInnerHTML={{ __html: news?.desc }} />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default NewsDetail
