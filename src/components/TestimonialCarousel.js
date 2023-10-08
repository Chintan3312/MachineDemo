import React, { useEffect, useState } from "react";

const TestimonialCarousel = () => {
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // Change slide every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [activeItem]);
  const ArrayData = [
    {
      id: 1,
      name: "John Hissona",
      descreption: `passages of Lorem Ipsum available, but the majority have
  suffered alteration in some form, by injected humour, or
  randomised words which don't look even slightly
  believable. If youThere are many variations of passages of
  Lorem Ipsum available, but the majority have suffered
  alteration in s`,
    },
    {
      id: 2,
      name: "John Hissona1",
      descreption: `passages of Lorem Ipsum available, but the majority have
  suffered alteration in some form, by injected humour, or
  randomised words which don't look even slightly
  believable. If youThere are many variations of passages of
  Lorem Ipsum available, but the majority have suffered
  alteration in s`,
    },
    {
      id: 3,
      name: "John Hissona2",
      descreption: `passages of Lorem Ipsum available, but the majority have
  suffered alteration in some form, by injected humour, or
  randomised words which don't look even slightly
  believable. If youThere are many variations of passages of
  Lorem Ipsum available, but the majority have suffered
  alteration in s`,
    },
  ];
  const handlePrevClick = () => {
    setActiveItem(activeItem - 1 >= 0 ? activeItem - 1 : ArrayData.length - 1);
  };

  const handleNextClick = () => {
    setActiveItem(activeItem + 1 < ArrayData.length ? activeItem + 1 : 0);
  };
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-10 mx-auto">
            <div className="heading_container">
              <h2>Testimonial</h2>
            </div>
            <div id="carouselExampleControls" className="carousel test-slide" data-ride="carousel">
              <div className="carousel-inner">
                {ArrayData.map((item, index) => {
                  return (
                    <div key={index} className={`carousel-item ${ index === activeItem ? "active" : "" }`}>
                      <div className="detail-box" style={{color: "#000"}}>
                        <h4>{item.name}</h4>
                        <p>{item.descreption}</p>
                        <img src="/assets/img/quote.png" alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <a className="carousel-control-prev" onClick={handlePrevClick} role="button" data-slide="prev">
                <span className="sr-only"><img src="/assets/img/prev.png" /></span>
              </a>
              <a className="carousel-control-next" onClick={handleNextClick} role="button" data-slide="next">
                <span className="sr-only"><img src="/assets/img/next.png" /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
