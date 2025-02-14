import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import blogImage1 from "../../assets/image/blogimage1.png"
import blogImage2 from "../../assets/image/blogimage2.png"

export default function Blog() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "",
      perView: 2,
      autoplay: 1500,
      rewind: true,
      animationDuration: 1000,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/* Component: Carousel with indicators outside */}
      <div className="glide-05 relative my-2 mx-0 p-4 md:p-10 md:m-14"> {/* Reduced my */}
        {/* Slides */}
        <h2 className='text-[#F17806] mx-auto justify-center text-[42px] leading-10 text-center mb-4'>Latest Blogs</h2>
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="border-[8px] border-[#F9F9F9] rounded-3xl shadow-md shadow-gray-400 mt-2 mb-4">
              <img src={blogImage1}  className="m-auto max-h-full w-full max-w-full rounded-2xl"  alt=""  />
            </li>
            <li className="border-[8px] border-[#F9F9F9] rounded-3xl shadow-md shadow-gray-400 mt-2 mb-4">
              <img src={blogImage2} className="m-auto max-h-full w-full max-w-full rounded-2xl"alt=""/>
            </li>
          </ul>
        </div>

        {/* Indicators */}
        <div className="flex w-full items-center justify-center gap-2" data-glide-el="controls[nav]" >
          <button  className="group p-4"  data-glide-dir="=0" aria-label="goto slide 1"  >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>

      {/*<!-- End Carousel with indicators outside --> */}
    </>
  )
}