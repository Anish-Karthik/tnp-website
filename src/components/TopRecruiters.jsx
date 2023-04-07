// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import Marquee from "react-fast-marquee";

function TopRecruiters() {
  let src =
    "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png";
  return (
    <div className="w-100 max-h-min flex flex-1 flex-col pt-5 justify-center align-middle sm:flex-row">
      <div className="h-100 flex flex-col justify-center align-middle flex-initial md:w-2/5 sm:w-full">
        <div className="m-8">
          <p className="font-bold text-3xl font-title pb-4">Top Recruiters</p>
          <p className="text-slate-700 font-Inter text-lg">
            TCET has an enviable record in placement of students. The institute
            has been accredited by major companies like Infosys, Tata
            Consultancy Services, iGATE, and Tech mahindra, etc.
          </p>
        </div>
      </div>
      {/* inset_0px_0px_-5px_5px_rgba(185,185,185,0.37) */}
      <div className="carousel relative flex-initial  w-100 rounded-l-xl  bg-[#FCFCFD] pt-4 pb-4 xl:w-4/3 md:w-2/3 sm:w-full">
        <div className="mt-5">
          <Marquee speed={30}>
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />

          </Marquee>
        </div>
        <div className="mt-5">
        <Marquee direction="right" speed={30}>
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />

          </Marquee>
        </div>
        <div className="mt-5">
        <Marquee speed={30}>
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />

          </Marquee>
        </div>
        <div className="mt-5 mb-5">
        <Marquee direction="right" speed={30}>
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />
          <img className="h-8 object-contain" src={src} alt="random" />

          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default TopRecruiters;
