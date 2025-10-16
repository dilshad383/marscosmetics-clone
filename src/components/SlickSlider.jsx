import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/about-slide1.png";
import slide2 from "../assets/about-slide2.png";
import slide3 from "../assets/about-slide3.png";
import slide4 from "../assets/about-slide4.png";
import slide5 from "../assets/about-slide5.png";
import slide6 from "../assets/about-slide6.png";

const SlickSlider = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const autoplayTime = 12000; 
  const [isClient, setIsClient] = useState(false); 

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

  // helper to compute responsive values for a given width
  const getResponsiveForWidth = (w) => {
    if (w <= 480) return { slidesToShow: 1.3, centerPadding: "5px" };
    if (w <= 768) return { slidesToShow: 2, centerPadding: "15px" };
    if (w <= 1024) return { slidesToShow: 3, centerPadding: "30px" };
    return { slidesToShow: 4, centerPadding: "40px" };
  };

  // initialize responsive values synchronously on first render (uses window if available)
  const [responsiveVals, setResponsiveVals] = useState(() => {
    if (typeof window !== "undefined") return getResponsiveForWidth(window.innerWidth);
    return { slidesToShow: 4, centerPadding: "40px" };
  });

  const computeResponsiveVals = React.useCallback(() => {
    if (typeof window === "undefined") return;
    setResponsiveVals(getResponsiveForWidth(window.innerWidth));
  }, []);

  // ensure slider only renders after window is available
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Start autoplay initially
    const timer = setTimeout(() => {
      sliderRef.current?.slickPause();
    }, autoplayTime);

    // Pause or play when visible
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sliderRef.current?.slickPlay();

            // Stop again after some time
            setTimeout(() => {
              sliderRef.current?.slickPause();
            }, autoplayTime);
          } else {
            sliderRef.current?.slickPause();
          }
        });
      },
      { threshold: 0.1 }
    );

    const node = sliderRef.current?.innerSlider?.list;
    if (node) observerRef.current.observe(node);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [isClient]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 9000,
    cssEase: "linear",
  slidesToShow: responsiveVals.slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
  centerPadding: responsiveVals.centerPadding, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3, // 1 full + half visible
          centerPadding: "5px",
        },
      },
    ],
  };

  // set initial responsive values on mount and update on resize
  useEffect(() => {
    if (!isClient) return;
    computeResponsiveVals();
    const onResize = () => computeResponsiveVals();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isClient]);

  // responsive settings are static here; no key required

  // Force slick to refresh after mount
  useEffect(() => {
    if (isClient && sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickGoTo(0);
      }, 150);

      // Also force a recalculation of layout so responsive `slidesToShow` applies immediately
      setTimeout(() => {
        try {
          // react-slick exposes innerSlider with onWindowResized helper
          sliderRef.current?.innerSlider?.onWindowResized?.();
        } catch {
          // ignore if not accessible
        }
        // dispatch a resize event as a fallback
        window.dispatchEvent(new Event("resize"));
      }, 200);
    }
  }, [isClient]);

  // Stronger refresh: observe container size and reapply responsive options if needed
  useEffect(() => {
    if (!isClient) return;


    const refresh = () => {
      const slick = sliderRef.current?.innerSlider;
      try {
        slick?.onWindowResized?.();
      } catch (err) {
        void err;
      }
      try {
        sliderRef.current?.slickSetOption?.("responsive", settings.responsive, true);
      } catch (err) {
        void err;
      }
      window.dispatchEvent(new Event("resize"));
    };

  // initial refresh after a longer delay, plus a second refresh in case layout shifts
  const initTimer = setTimeout(() => refresh(), 500);
  const secondTimer = setTimeout(() => refresh(), 1000);

    let ro;
    const node = containerRef.current;
    if (node && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        refresh();
      });
      ro.observe(node);
    }

    return () => {
      clearTimeout(initTimer);
      clearTimeout(secondTimer);
      if (ro) ro.disconnect();
    };
    // settings.responsive is static; ignore exhaustive-deps for this effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  return (
    <div ref={containerRef} className="mx-auto pt-4">
      {isClient && (
        <Slider ref={sliderRef} {...settings}>
          {slides.map((img, idx) => (
            <div key={idx} className="relative px-2">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="h-[180px] sm:h-[200px] sm:w-[300px] md:h-[230px] md:w-[346px] object-cover rounded-xl w-full"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SlickSlider;
