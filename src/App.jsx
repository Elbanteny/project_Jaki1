import React, { useState } from 'react'
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Stats,
  Testimonials,
  SearchResult,
  Modal
} from './components'
import styles from './style'
// import LeafletGeocoder from './components/LeafletGeocoder'

const App = () => {
  const [result, setResult] = useState([]);

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Navbar/> */}
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business setResult={setResult} />
          <SearchResult result={result} />
          <Modal />
          {/* <Billing/> */}
          {/* <CardDeal/> */}
          {/* <Testimonials/> */}
          {/* <Clients/> */}
          {/* <CTA/> */}
          {/* <Footer/>      */}
        </div>
      </div>
    </div>
  )
}

export default App