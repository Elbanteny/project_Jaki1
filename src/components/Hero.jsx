import styles from '../style'
import { logoPilar, ArtPilar } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-8`}>
        <div className='flex flex-row items-center py-[5px] px-5 bg-discount-gradient rounded-[10px] mb-3'>
          <img
            src={logoPilar}
            alt='logo-pilar'
            className='w-[35px] h-[30px]'
          />
          <p className={`${styles.paragraph} ml-5`}>
            <span className='text-white'>PILAR UTAMA TRANSIDO </span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[37px] text-[48px] text-white ss:leading-[60.8px] leading-[60px]'>
            PILAR UTAMA TRANSINDO <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Solusi Pengiriman Anda</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[39px] text-[55px] text-white ss:leading-[55px] leading-[65px] w-full'>
          Pasti Aman, Pasti Nyaman.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Kami hadir untuk memudahkan Anda, kirim kemanapun semakin aman, mudah dan efisien. Hemat waktu dan energi Anda, biar kami yang mengatur semuanya.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={ArtPilar}
          alt='billing'
          className='w-[90%] h-[89%] relative z-10'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
