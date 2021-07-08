import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import NewsItem from '../_components/NewsItem'

function Home() {
  return (
    <>
      <section className='slider-container'>
        <article className='slider'>
          <img src={slider2}></img>
        </article>
      </section>
      <div className='line-wrapper'></div>
      <NewsItem />
    </>
  )
}

export default Home
