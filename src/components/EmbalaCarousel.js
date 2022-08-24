import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SERVICES_CONTENT } from "../sections/constants";
import Autoplay from "embla-carousel-autoplay";

export const contentByIndex = (index) =>
  SERVICES_CONTENT[index % SERVICES_CONTENT.length];

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

const EmblaCarousel = ({ slides }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 10000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              key={contentByIndex(index).id}
              className="p-4 mx-4 pt-20  embla__slide 	"
            >
              <i
                className={` ${
                  contentByIndex(index).icon
                }   text-5xl  font-normal text-orange-600 `}
              ></i>
              <h5 className="text-2xl font-semibold opacity-70 mt-10 tracking-tight 	  ">
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
          style={{ width: "26.5%" }}
          className="top-0  absolute bottom-0 	mx-auto left-0 right-0 h-full  shadow-gray-500 mix-blend-darken shadow-2xl"
        >
          <span className="block  m-auto rounded center w-20 h-1 bg-orange-500 mb-20 "></span>
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};

export default EmblaCarousel;