import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import $ from 'jquery';

export default function Home() {
  const [collapse, setCollaps] = useState("1");
  const [isAnime, setAnime] = useState("");

  return (
    <>
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1>Powerful Machine Solutions With Yash<span>.</span></h1>
              <h2>We are team of talented maintain Machines</h2>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line"></i>
                <h3><a href="/#">Lorem Ipsum</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line"></i>
                <h3><a href="/#">Dolor Sitema</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line"></i>
                <h3><a href="/#">Sedare Perspiciatis</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-paint-brush-line"></i>
                <h3><a href="/#">Magni Dolores</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line"></i>
                <h3><a href="/#">Nemos Enimade</a></h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <div class="container mt-4 mb-4">
        <div class="row">
          <div class="col-md-5">
            <div class="card card-1">
              <h3>Ionic Native</h3>
              <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div class="card card-3">
              <h3>Theming</h3>
              <p>Learn how to easily customize and modify your app’s design to fit your
                brand across all mobile platform styles.</p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div class="card card-1">
              <h3>Ionic Native</h3>
              <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div class="card card-2">
              <h3>UI Components</h3>
              <p>Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
                of mobile UI components, ready to go.</p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-5">
            <div class="card card-1">
              <h3>Ionic Native</h3>
              <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div class="card card-3">
              <h3>Theming</h3>
              <p>Learn how to easily customize and modify your app’s design to fit your
                brand across all mobile platform styles.</p>
            </div>
          </div>
        </div>
      </div> */}

      <section class="freelance_section">
        <div id="accordion">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 offset-md-1">
                <div class="detail-box">
                  <div class="heading_container">
                    <h2>
                      Work Freelaner Has Done
                    </h2>
                  </div>
                  <div class="tab_container">
                    <div class="t-link-box collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded={collapse == "1" ? true : false} aria-controls="collapseOne" onClick={() => setCollaps("1")}>
                      <div class="img-box">
                        <img src="/assets/img/f1.png" alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>
                          $250 Million
                        </h5>
                        <h3>
                          Paid to Freelancers
                        </h3>
                      </div>
                    </div>
                    <div class="t-link-box" data-toggle="collapse" data-target="#collapseTwo" aria-expanded={collapse == "2" ? true : false} aria-controls="collapseTwo" onClick={() => setCollaps("2")}>
                      <div class="img-box">
                        <img src="/assets/img/f2.png" alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>
                          2 Million
                        </h5>
                        <h3>
                          Paid Invoices
                        </h3>
                      </div>
                    </div>
                    <div class="t-link-box collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded={collapse == "3" ? true : false} aria-controls="collapseThree" onClick={() => setCollaps("3")}>
                      <div class="img-box">
                        <img src="/assets/img/f3.png" alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>
                          700,000
                        </h5>
                        <h3>
                          Worldwide Freelancer
                        </h3>
                      </div>
                    </div>
                    <div class="t-link-box collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded={collapse == "4" ? true : false} aria-controls="collapseFour" onClick={() => setCollaps("4")}>
                      <div class="img-box">
                        <img src="/assets/img/f4.png" alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>
                          98%
                        </h5>
                        <h3>
                          Customer <br />
                          Satisfaction Rate
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class={`collapse ${ collapse == "1" ? "show" : "" }`} id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion" >
                  <div class="img-box">
                    <img src="/assets/img/about.jpg" alt="" />
                  </div>
                </div>
                <div class={`collapse ${ collapse == "2" ? "show" : "" }`} id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion" >
                  <div class="img-box">
                    <img src="/assets/img/freelance-img.jpg" alt="" />
                  </div>
                </div>
                <div class={`collapse ${ collapse == "3" ? "show" : "" }`} id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion" >
                  <div class="img-box">
                    <img src="/assets/img/freelance-img.jpg" alt="" />
                  </div>
                </div>
                <div class={`collapse ${ collapse == "4" ? "show" : "" }`} id="collapseFour" aria-labelledby="headingfour" data-parent="#accordion" >
                  <div class="img-box">
                    <img src="/assets/img/freelance-img.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="statistics"  class="statistics">
        {/* <div class="container">
          <div class="statistics-counter d-flex"> 
            <div class="col-md-3 col-sm-6">
              <div class="single-ststistics-box">
                <div class="statistics-content">
                  <div class="counter">90 </div> <span>K+</span>
                </div>
                <h3>listings</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-ststistics-box">
                <div class="statistics-content">
                  <div class="counter">40</div> <span>k+</span>
                </div>
                <h3>listing categories</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-ststistics-box">
                <div class="statistics-content">
                  <div class="counter">65</div> <span>k+</span>
                </div>
                <h3>visitors</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-ststistics-box">
                <div class="statistics-content">
                  <div class="counter">50</div> <span>k+</span>
                </div>
                <h3>happy clients</h3>
              </div>
            </div>
          </div>
        </div> */}

        <section class="counters">
          <div class="container">
            <div className='single-ststistics-box'>
              <i class="fab fa-youtube fa-4x"></i>
              <div class="counter statistics-content" data-target="60000">0</div>
              <h3>Subscribers</h3>
            </div>
            <div className='single-ststistics-box'>
              <i class="fab fa-twitter fa-4x"></i>
              <div class="counter statistics-content" data-target="15000">0</div>
              <h3>Followers</h3>
            </div>
            <div className='single-ststistics-box'>
              <i class="fab fa-facebook fa-4x"></i>
              <div class="counter statistics-content" data-target="9000">0</div>
              <h3>Likes</h3>
            </div>
            <div className='single-ststistics-box'>
              <i class="fab fa-linkedin fa-4x"></i>
              <div class="counter statistics-content" data-target="5000">0</div>
              <h3>Connections</h3>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className='text-container'>
          <div class="text-content">
            <h2>Workspace</h2>
            <h2>Workspace</h2>
          </div>
        </div>
        <div class="vatcontainer">
          <div
              class={`slide ${isAnime == "one" ? "active" : ""}`}
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80')" }}
              onClick={() => setAnime("one")}
          >
            <h3>Audi</h3>
          </div>
          <div
              class={`slide ${isAnime == "two" ? "active" : ""}`}
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80')" }}
              onClick={() => setAnime("two")}
            >
            <h3>Mazda</h3>
          </div>
          <div
              class={`slide ${isAnime == "three" ? "active" : ""}`}
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569240651738-2c9ec2f50f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80')" }}
              onClick={() => setAnime("three")}
          >
            <h3>Porsche</h3>
          </div>
          <div
              class={`slide ${isAnime == "four" ? "active" : ""}`}
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542705959-878ca346eb20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80')" }}
              onClick={() => setAnime("four")}
          >
            <h3>Night</h3>
          </div>
          <div
              class={`slide ${isAnime == "five" ? "active" : ""}`}
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1614040940611-a0ebb66b32b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxjYXJzfGVufDB8fDB8fHww&w=1000&q=80')" }}
              onClick={() => setAnime("five")}
          >
            <h3>Ferrari</h3>
          </div>
        </div>
      </section>

      <section id="brand" class="brand">
        <div class="container">
          <div class="brand-area">
            <div class="owl-carousel owl-theme brand-item owl-loaded owl-drag">
            <div class="owl-stage-outer"><div class="owl-stage" style={{ transform: "translate3d(-1900px, 0px, 0px)", transition: "all 1s ease 0s", width: "3420px" }}><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br1.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br2.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br3.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br4.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br5.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br6.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br1.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br2.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br3.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br4.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item active" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br5.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item active" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br6.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned active" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="assets/img/brand/br1.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned active" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br2.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned active" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br3.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned active" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br4.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br5.png" alt="brand-image" />
                </a>
              </div></div><div class="owl-item cloned" style={{ width: "190px" }}><div class="item">
                <a href="#">
                  <img src="/assets/img/brand/br6.png" alt="brand-image" />
                </a>
              </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev">prev</div><div class="owl-next">next</div></div><div class="owl-dots disabled"></div></div>
          </div>
        </div>
		  </section>

      <Helmet>
        <script>
          {
            `
            // const counters = document.querySelectorAll('.counter');
            // const speed = 200; // The lower the slower
            
            document.querySelectorAll('.counter').forEach(counter => {
              const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
            
                // Lower inc to slow and higher to slow
                const inc = target / 200;
            
                // console.log(inc);
                // console.log(count);
            
                // Check if target is reached
                if (count < target) {
                  // Add inc to count and output in counter
                  counter.innerText = count + inc;
                  // Call function every ms
                  setTimeout(updateCount, 1);
                } else {
                  counter.innerText = target;
                }
              };

              updateCount();
            });
            `
          }
        </script>
      </Helmet>
    </>
  )
}