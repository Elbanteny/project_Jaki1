import React, { useState, useEffect } from 'react'
import { jenisPengiriman } from '../constants'
import styles, { layout } from '../style'
import Modal from './Modal';

const Business = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const [isElementVisible, setIsElementVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)


  const handleResultClick = (result) => {
    setValue(result);
    setResult([]);
    // if (value) {
    //   setIsElementVisible(false)
    // }
    // if (!value) {
    //   setIsElementVisible(true)
    // }
  }

  useEffect(() => {
    if (value.length > 0) {
      fetch('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json').then(
        response => response.json()
      ).then(responseData => {
        setResult([]);
        let searchQuery = value.toUpperCase();
        for (const key in responseData) {
          let provinsi = responseData[key].name.toUpperCase();
          if (provinsi.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
            setResult(prevResult => {
              return [...prevResult, responseData[key].name]
            });
          }
        }
      }).catch(error => {
        console.log(error)
      })
    } else {
      setResult([])
    }
  }, [value]);

  const JenisPengirimanBarang = ({ icon, title, content, index }) => (

    <div className={`ss:flex xs:flex w-9/12 py-4 px-6 md:w-flex lg:w-flex xl:w-flex rounded-[20px] mr-4 bg-dimBlue ${index !== jenisPengiriman.length - 0 ? 'mb-4' : 'mb-0'} cursor-pointer feature-card`} onClick={() => setIsModalOpen(true)} >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img
          src={icon}
          alt='icon'
          className='w-[45%] h-[45%] object-contain'
        />
      </div>
      <div className='flex-1 flex flex-col ml-2'>
        <h4 className='font-poppins font-semibold text-white text-[17px] leading-[22px] mb-1 pr-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[13px] leading-[23px] mb-1 mr-1 ml-1 py-2 pr-2'>
          {content}
        </p>
      </div>
    </div>

  )


  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Sekilas Tentang <br className='sm:block hidden' />PILAR UTAMA TRANSINDO.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Kami adalah perusahaan spesialis jasa angkutan barang / ekspedisi antar kota dan antar pulau di Indonesia. Berpengalaman lebih dari 10 tahun. Kami memiliki Armada Terbaik dan Team yang Profesional serta didukung dengan sistem teknologi yang terintegrasi, Kami siap melayani kebutuhan logistik usaha Anda.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex flex-wrap justify-between items-center my-12 rounded-[20px]`}>
        <div className={`w-9/12`}>
          <div className='p-10 block mb-0 w-full rounded-2xl bg-dimBlue m-10 feature-card'>

            <label className='font-poppins font-semibold block mb-2 text-white text-[18px] leading- [23px] mb-1'>Awal</label>

            <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" type='text' placeholder='Dimana Lokasi Anda ?' onChange={(e) => setValue(e.target.value)} value={value} />

            <div className='mt-1 bg-white rounded-md'>
              {result?.map((result, index) => (
                isElementVisible && (
                  <p key={index} className="flex p-1 cursor-pointer hover:underline underline-offset-2" onClick={() => handleResultClick(result)}
                  >{result}
                  </p>
                )

              ))}
            </div>

          </div>

          <div className={`p-10 block mb-0 w-full rounded-[20px] bg-dimBlue m-10 feature-card`}>
            <label className='font-poppins font-semibold block mb-2 text-white text-[18px] leading- [23px] mb-1'>Tujuan</label>

            <select id="countries" className="col-start-2 col-span-9 font-poppins bg-primary-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary-500 block w-full p-2.5 bg-blue-gradient placeholder-primary-400 dark:text-white dark:focus:border-primary-500">

              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>

        <div className="w-auto h-auto mt-2 mb-2 ss:my-10 mr-10 ">
          <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row ${styles.flexCenter} mt-10 relative `}>
            {jenisPengiriman.map((jenisP, index) => (
              <JenisPengirimanBarang key={jenisP.id} {...jenisP}
                index={index}
              />
            ))}
            {isModalOpen &&
              <Modal className="relative z-40" setOpenModal={setIsModalOpen} />}
          </div>
        </div>

      </div>
    </section>
  )
};

export default Business
