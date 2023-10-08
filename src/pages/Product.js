import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Product() {
    return (
        <>
            <header id="header" className="fixed-top header-scrolled">
                <div className="container d-flex align-items-center justify-content-lg-between">
                    <Link className="get-started-btn" to="/">Back</Link>
                    <h1 className="logo me-auto me-lg-0"><Link to="/">Yash<span>.</span></Link></h1>
                    <span></span>
                </div>
            </header>

            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                    <h2>Product Details</h2>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>Product Details</li>
                    </ol>
                    </div>

                </div>
                </section>

                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-8">
                                <div className="portfolio-details-slider swiper">
                                <div className="swiper-wrapper align-items-center">
                                    <div className="swiper-slide">
                                        <img src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                                    </div>

                                    <div className="swiper-slide">
                                        <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                                    </div>

                                    <div className="swiper-slide">
                                        <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="portfolio-info">
                                    <h3>Product information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Machine</li>
                                        <li><strong>Client</strong>: Yash Company</li>
                                        <li><strong>Project date</strong>: 26 Nov, 2023</li>
                                        <li><strong>Product </strong>: www.example.com</li>
                                    </ul>
                                </div>
                                <div className="portfolio-description">
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                    <p>
                                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}