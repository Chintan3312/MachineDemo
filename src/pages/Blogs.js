import React from 'react'

export default function Blogs() {
    return (
        <>
            <main id="main" style={{marginTop: "5%"}}>
                <section id="contact" className="contact">
                    <div className='container' data-aos="fade-up">
                        <div className="section-title">
                            <h2>Blogs</h2>
                            <p>Review our blogs for more Details</p>
                        </div>
                        <main class="cards">
                            <section class="card card-one">
                            <div class="top">
                                <div class="date">4 Oct 2023</div>
                            </div>
                            <div class="bottom">
                                <div class="author">
                                <div><img class="author-img pulsesss" src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
                                <span>John Doe</span>
                                </div>
                                <h1>Best Farming Ideas in 2023</h1>
                                <div class="text">
                                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consecte, adipisci...</p>
                                    {/* <button>Read More</button> */}
                                </div>
                            </div>
                            </section>
                        </main>
                        <main class="cards">
                            <section class="card card-two">
                            <div class="top">
                                <div class="date">6 Sept 2023</div>
                            </div>
                            <div class="bottom">
                                <div class="author">
                                <div><img class="author-img pulsesss" src="https://randomuser.me/api/portraits/women/11.jpg" /></div>
                                <span>Jane Doe</span>
                                </div>
                                <h1>My Happy Memory at the Beach</h1>
                                <div class="text">
                                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consecte, adipisci...</p>
                                    {/* <button>Read More</button> */}
                                </div>
                            </div>
                            </section>
                        </main>
                    </div>
                </section>
            </main>
        </>
    )
}
