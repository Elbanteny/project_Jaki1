import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
  <div>
     <a
      href='#features'
    >
     <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>CEK</span>
              </p>
                <img
                  src={arrowUp}
                  alt='arrow'
                  className='w-[23px] h-[23px] object-contain'
                />
               </div>
              <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>HARGA</span>
          </p>
          </div>
      </div>
      </a>
   </div>
   
  )
}

export default GetStarted
