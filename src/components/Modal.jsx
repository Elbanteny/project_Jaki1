import React from 'react';
import { logoPilar, close, people01 } from '../assets'

const Modal = ({ setOpenModal }) => {
    if (!setOpenModal) return null;

    return (
        <div className='flex fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center'>
            <div className='p-5 sm:p-0 m-0'>
                <div className='relative bg-white w-auto h-auto p-8 z-40 rounded-xl sm:h-1/2'>
                    <div className='relative flex w-8 border border-gray-500 bg-gray-300 justify-center rounded-md left-[95%] -top-[15px] hover:bg-red-500 cursor-pointer drop-shadow-lg'
                        onClick={() => setOpenModal(false)}>
                        <img src={close} className="p-1" />
                    </div>
                    <div className='flex gap-2 p-1'>
                        <img src={logoPilar} alt="LOGO" className='w-[50px] h-[50px]' />
                        <h1 className='text-lg font-poppins py-1 px-3'>Mau Pindahan bang ?</h1>
                    </div>
                    <div className='flex py-5 px-1'>
                        <img src={people01} alt="gambar-sample" className='w-[70px] h-[70px]' />
                        <p className='font-poppins px-4 py-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            <br />Quia fuga non blanditiis libero eius doloribus, vero asperiores a quaerat molestias <br />nulla cum nostrum fugit commodi excepturi consectetur nam animi incidunt?</p>
                    </div>
                    <div className='flex relative gap-4 font-poppins my-3 mr-auto justify-center'>
                        <button className='border border-gray-500 bg-gray-300 rounded-lg p-2 hover:bg-blue-500'>Booking</button>
                        <button onClick={() => setOpenModal(false)
                        } className='border border-gray-500 bg-gray-300 rounded-lg p-2 hover:bg-red-500'>Kembali</button>
                    </div>
                </div>
            </div >
        </div>

    );
}

export default Modal;