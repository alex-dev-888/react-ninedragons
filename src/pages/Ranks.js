import { useState, useEffect } from 'react'

import styles from './Ranks.module.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

function Ranks() {
  // const link = 'http://localhost:4000'
  const link = 'http://103.153.68.242:4000'

  const { handlePage } = useGlobalContext()
  handlePage('ranks')

  const [loading, setLoading] = useState(true)

  const [tab, setTab] = useState('level')

  const [topLevel, setTopLevel] = useState([])
  const [topHonor, setTopHonor] = useState([])
  const [topGong, setTopGong] = useState([])

  const [list, setList] = useState([])

  const getTop = async () => {
    setLoading(true)
    const topLevelLink = await fetch(`${link}/top-level`)
    const topLevelResponse = await topLevelLink.json()
    setTopLevel(topLevelResponse)

    const topHonorLink = await fetch(`${link}/top-honor`)
    const topHonorResponse = await topHonorLink.json()
    setTopHonor(topHonorResponse)

    const topGongLink = await fetch(`${link}/top-gong`)
    const topGongResponse = await topGongLink.json()
    setTopGong(topGongResponse)
    setList(topLevelResponse)
    setLoading(false)
  }

  const handleTab = (tabType) => {
    if (loading) return
    if (tabType === 'level') {
      setList(topLevel)
      setTab('level')
    } else if (tabType === 'gong') {
      setList(topGong)
      setTab('gong')
    } else if (tabType === 'honor') {
      setList(topHonor)
      setTab('honor')
    }
  }

  useEffect(() => {
    getTop()
  }, [])

  return (
    <>
      <section className={styles.ranksBanner}>
        <div className={styles.pageTitle}>
          <span>Xếp hạng cao thủ</span>
        </div>
      </section>
      <section className={styles.submenuListContainer}>
        <ul>
          <li className={`${tab === 'level' ? `${styles.selected}` : ``}`}>
            <a
              className={`${tab === 'level' ? `${styles.Aselected}` : ``}`}
              onClick={() => handleTab('level')}
            >
              Cấp độ
            </a>
          </li>
          <li className={`${tab === 'gong' ? `${styles.selected}` : ``}`}>
            <a
              className={`${tab === 'gong' ? `${styles.Aselected}` : ``}`}
              onClick={() => handleTab('gong')}
            >
              Ác danh
            </a>
          </li>
          <li className={`${tab === 'honor' ? `${styles.selected}` : ``}`}>
            <a
              className={`${tab === 'honor' ? `${styles.Aselected}` : ``}`}
              onClick={() => handleTab('honor')}
            >
              Danh tiếng
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.ranksDescription}>
        <div className={styles.detailsContainer}>
          <article className={styles.detailsDescription}>
            <div className={styles.detailsNewsFooter}>
              <div className={styles.itemRanks}>
                {!loading && (
                  <table>
                    <thead>
                      <tr>
                        <th className={styles.stt}>Hạng</th>
                        <th className={styles.charName}>Tên</th>
                        <th className={styles.level}>
                          {tab === 'level' && 'Cấp'}
                          {tab === 'honor' && 'Danh tiếng'}
                          {tab === 'gong' && 'Ác danh'}
                        </th>
                        <th className={styles.charType}>Chức trách</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list?.map((item, index) => {
                        return (
                          <tr className={styles.rankItem}>
                            <td>{index + 1}</td>
                            <td>{item?.chr_name}</td>
                            <td>
                              {tab === 'level' && item?.final_level}
                              {tab === 'honor' && item?.honor}
                              {tab === 'gong' && item?.gong}
                            </td>
                            <td>
                              {item?.party === 0 && 'Lãng nhân'}
                              {item?.party === 1 &&
                                item?.class === 1 &&
                                'Chiến Vệ Cái'}
                              {item?.party === 1 &&
                                item?.class === 2 &&
                                'Chương Minh Cái'}
                              {item?.party === 1 &&
                                item?.class === 3 &&
                                'Đấu Hồn Cái'}
                              {item?.party === 1 &&
                                item?.class === 4 &&
                                'Giáng Long Cái'}

                              {item?.party === 2 &&
                                item?.class === 1 &&
                                'Chiến Thần Nữ'}
                              {item?.party === 2 &&
                                item?.class === 2 &&
                                'Thiên Thần Nữ'}
                              {item?.party === 2 &&
                                item?.class === 3 &&
                                'Tử Hà Nữ'}
                              {item?.party === 2 &&
                                item?.class === 4 &&
                                'Nhiếp Hồn Nữ'}

                              {item?.party === 3 &&
                                item?.class === 1 &&
                                'La Hán Tăng'}
                              {item?.party === 3 &&
                                item?.class === 2 &&
                                'Kim Cang Tăng'}
                              {item?.party === 3 &&
                                item?.class === 3 &&
                                'Phục Ma Tăng'}
                              {item?.party === 3 &&
                                item?.class === 4 &&
                                'Chế Ma Tăng'}

                              {item?.party === 4 &&
                                item?.class === 1 &&
                                'Bác Đấu Quỷ'}
                              {item?.party === 4 &&
                                item?.class === 2 &&
                                'Diệu Thủ Quỷ'}
                              {item?.party === 4 &&
                                item?.class === 3 &&
                                'Thái Sơn Quỷ'}
                              {item?.party === 4 &&
                                item?.class === 4 &&
                                'Thiết Giáp Quỷ'}

                              {item?.party === 5 &&
                                item?.class === 1 &&
                                'Thanh Long Nhân'}
                              {item?.party === 5 &&
                                item?.class === 2 &&
                                'Chu Tước Nhân'}
                              {item?.party === 5 &&
                                item?.class === 3 &&
                                'Bạch Hổ Nhân'}
                              {item?.party === 5 &&
                                item?.class === 4 &&
                                'Huyền Vũ Nhân'}

                              {item?.party === 6 &&
                                item?.class === 1 &&
                                'Huyết Chiến Ma'}
                              {item?.party === 6 &&
                                item?.class === 2 &&
                                'Quỷ Hồn Man'}
                              {item?.party === 6 &&
                                item?.class === 3 &&
                                'Cuồng Bạo Ma'}
                              {item?.party === 6 &&
                                item?.class === 4 &&
                                'Hắc Phong Ma'}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Ranks
