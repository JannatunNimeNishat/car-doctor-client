import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper";

import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'


const Team = () => {
    return (
        <div className='mt-12 mb-5'>
            <div className='text-center mb-5'>
                <h3 className='text-2xl font-bold text-orange-600'>Team</h3>
                <h2 className='text-5xl'>Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            {/* slider */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className=' mb-12'
            >

                <SwiperSlide >
                    <div className="card w-96 bg-base-100 shadow-xl border">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                   
                                </button>
                            </div>

                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                <div className="card w-96 bg-base-100 border shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                   
                                </button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card w-96 bg-base-100 border shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                   
                                </button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card w-96 bg-base-100 border shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                    
                                </button>
                                <button className="btn btn-circle">
                                   
                                </button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Team;