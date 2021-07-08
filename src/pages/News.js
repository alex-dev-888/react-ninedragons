import styles from './News.module.css'

import { useGlobalContext } from '../context'
import NewsItem from '../_components/NewsItem'

function News() {
  const { handlePage } = useGlobalContext()
  handlePage('news')

  return (
    <>
      <section className={styles.newsBanner}>
        <div className={styles.pageTitle}>
          <span>Tin tức & sự kiện</span>
        </div>
      </section>

      <NewsItem />
    </>
  )
}

export default News
