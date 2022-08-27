import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// const slides = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = ({ content }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      skipSnaps: false,
    }
    // [autoplay.current]
  );
  const contentByIndex = (index) => content[index % content.length];

  return (
    <div className="embla md:px-20">
      <div className=" h-96 md:mx-10	overflow-hidden" ref={viewportRef}>
        <div className="embla__container">
          {content.map((element, index) => (
            <div
              key={contentByIndex(index).id}
              className="md:px-4 md:mx-2 pt-20   md:min-w-1/3  min-w-full test-class"
            >
              <i
                className={` ${
                  contentByIndex(index).icon
                }   text-5xl  font-normal text-orange-600 `}
              ></i>
              <h5 className="text-xl font-bold opacity-60 mt-10 tracking-tight 	  ">
                {contentByIndex(index).title}
              </h5>
              <p className="text-slate-500 mt-3  tracking-tight">
                {contentByIndex(index).content}
              </p>
            </div>
          ))}
        </div>
        <div
          key="section-shadow"
          className=" top-0 absolute bottom-0 w-full md:w-28%	mx-auto left-0 right-0 h-full  shadow-gray-500 mix-blend-darken shadow-2xl"
        >
          <span className="block m-auto rounded center w-20 h-1 bg-orange-500 mb-20 "></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
