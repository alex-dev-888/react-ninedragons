import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import newsBugFixed from '../images/news-bug-fixed.png'
import newsEvent from '../images/news-event.png'
import newsNew from '../images/news-news.png'

import styles from '../pages/News.module.css'

import { useFetch } from '../_helper/useFetch'
import paginate from '../_helper/utils'

function NewsItem() {
  const [type, setType] = useState('all')

  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)

  // const [data, setMaxpage] = useState(0)

  const [followers, setFollowers] = useState([])

  const [dataArray, setDataArray] = useState([])

  const handleType = (type) => {
    setType(type)
    setPage(0)
  }

  useEffect(() => {
    if (loading) return

    const dataNew = data.filter((item) => item.type === type)
    if (type === 'all') {
      setFollowers(paginate(data)[page])
      setDataArray(paginate(data))
    } else {
      setFollowers(paginate(dataNew)[page])
      setDataArray(paginate(dataNew))
    }
  }, [loading, page, type])

  const handlePage = (index) => {
    setPage(index)
  }

  const firstPage = () => {
    setPage(0)
  }
  const lastPage = () => {
    setPage(dataArray.length - 1)
  }

  return (
    <>
      <section className={styles.submenuListContainer}>
        <ul>
          <li className={`${type === 'all' ? `${styles.selected}` : ``}`}>
            <a
              className={`${type === 'all' ? `${styles.Aselected}` : ``}`}
              onClick={() => handleType('all')}
            >
              Tất cả
            </a>
          </li>
          <li className={`${type === 'Tin tức' ? `${styles.selected}` : ``}`}>
            <a
              className={`${type === 'news' ? `${styles.Aselected}` : ``}`}
              onClick={() => handleType('Tin tức')}
            >
              Tin tức
            </a>
          </li>
          <li className={`${type === 'Sự kiện' ? `${styles.selected}` : ``}`}>
            <a
              className={`${type === 'event' ? `${styles.Aselected}` : ``}`}
              onClick={() => handleType('Sự kiện')}
            >
              Sự kiện
            </a>
          </li>
          <li className={`${type === 'Cập nhật' ? `${styles.selected}` : ``}`}>
            <a
              className={`${type === 'updated' ? `${styles.Aselected}` : ``}`}
              onClick={() => handleType('Cập nhật')}
            >
              Cập nhật
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.newsDescription}>
        <div className={styles.eventContainer}>
          <div className={styles.contentContainer}>
            <ul className={styles.itemList}>
              {followers.map((follower) => {
                return (
                  <Link to={`/news/${follower?.id}`} key={follower?.id}>
                    <li>
                      {follower?.type === 'Sự kiện' && (
                        <img src={newsEvent}></img>
                      )}

                      {follower?.type === 'Tin tức' && (
                        <img src={newsNew}></img>
                      )}

                      {follower?.type === 'Cập nhật' && (
                        <img src={newsBugFixed}></img>
                      )}

                      <div className={styles.newsItemContent}>
                        <div className={styles.newsItemCategory}>
                          {follower?.type}
                        </div>{' '}
                        <div className={styles.newsItemSummary}>
                          {follower?.title}
                        </div>{' '}
                        <div className={styles.newsItemDate}>
                          {/* <i className='fa fa-clock-o'>&nbsp;</i> Jun 9th, 2021 */}
                          {follower?.datetime}
                        </div>
                      </div>
                    </li>
                  </Link>
                )
              })}
            </ul>
            {!loading && (
              <div className={styles.btnContainer}>
                <button className={styles.prevBtn} onClick={firstPage}>
                  First
                </button>

                {dataArray.map((item, index) => {
                  return (
                    <button
                      className={`${
                        page === index
                          ? `${styles.pageBtn} ${styles.activedBtn}`
                          : `${styles.pageBtn}`
                      }`}
                      onClick={() => handlePage(index)}
                    >
                      {index + 1}
                    </button>
                  )
                })}

                <button className={styles.nextBtn} onClick={lastPage}>
                  Last
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsItem
