import React from 'react';

export default function About() {
    return (
        <>
            <main id="main" style={{marginTop: "5%"}}>
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About Us</h2>
                            <p>Check our Details</p>
                        </div>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/img/about.jpg" className="d-block w-100" height="750" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/img/testimonials-bg.jpg" className="d-block w-100" height="750" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/img/features.jpg" className="d-block w-100" height="750" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="row" style={{marginTop:"5%"}}>
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit
                                </p>
                                <div className='text-start'>
                                    <a href="#about" className="get-started-btn-about scrollto">More Info</a>
                                </div>
                            </div>
                        </div>

                        <hr class="featurette-divider" style={{marginTop: "4%"}} />

                        <div className="row" style={{marginTop:"5%"}}>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content" data-aos="fade-left" data-aos-delay="100">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit
                                </p>
                                <div className='text-end'>
                                    <a href="#about" className="get-started-btn-about scrollto">More Info</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="100">
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="clients" className="clients">
                    <div className="container" data-aos="zoom-in">
                        <div className="clients-slider swiper">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </section>

                <section id="features" className="features">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                        <div className="image col-lg-6" style={{ backgroundImage: 'url("assets/img/features.jpg")'}} data-aos="fade-right"></div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                                <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                                    <i className="bx bx-receipt"></i>
                                    <h4>Est labore ad</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                    <i className="bx bx-cube-alt"></i>
                                    <h4>Harum esse qui</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                    <i className="bx bx-images"></i>
                                    <h4>Aut occaecati</h4>
                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                </div>
                                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                    <i className="bx bx-shield"></i>
                                    <h4>Beatae veritatis</h4>
                                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}