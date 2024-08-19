import PS5 from "../../images/PS5.webp";
import womanImg from "../../images/Womanimage.webp";
import gucciImg from '../../images/gucci.webp'
import speakersImg from '../../images/speakers.webp'

export default function Featured() {
  return (
    <div className="flex flex-col gap-0.5 lg:gap-2 lg:flex-row mt-7">
      <div className="flex items-end bg-black w-full lg:w-1/2 h-[450px] lg:h-[650px] relative overflow-hidden">
        <div className="z-10 w-[400px] pl-14 pb-14 flex flex-col gap-2 text-white text-lg">
          <h2 className="text-3xl">PlayStation 5</h2>
          <p className="text-stone-100">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className="underline underline-offset-4 w-fit text-md">
            Shop Now
          </button>
        </div>
        <img
          src={PS5}
          alt="PS5"
          className="w-[360px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[600px] absolute bottom-0 left-1/2 translate-x-[-50%] drop-shadow-[0_0_50px_#ffffff20]"
        />
      </div>

      <div className="flex flex-col gap-0.5 lg:gap-2 w-full lg:w-1/2 min-h-[650px] lg:h-[650px]">
        <div className="flex items-end h-[300px] lg:h-1/2  relative overflow-hidden bg-[#0D0D0D]">
          <div className="z-10  w-[400px] pl-10 pb-10 lg:pl-14 lg:pb-14 flex flex-col gap-2 text-white text-lg">
            <h2 className="text-3xl">Women's Collections</h2>
            <p className="text-stone-100">
              Featured woman collections that give you another vibe.
            </p>
            <button className="underline underline-offset-4 w-fit text-md">
              Shop Now
            </button>
          </div>
          <img
            src={womanImg}
            alt="PS5"
            className="w-[360px] sm:w-[400px] md:w-[450px] lg:w-[450px] xl:w-[500px] absolute bottom-0 right-0"
          />
        </div>

        <div className="flex flex-col md:flex-row h-[600px] md:h-[300px] lg:h-1/2 gap-0.5 lg:gap-2 relative overflow-hidden">
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-end bg-stone-950 relative overflow-hidden">
            <div className="z-10 w-[300px] pl-10 pb-10 flex flex-col gap-2 text-white text-lg">
              <h2 className="text-3xl">Speakers</h2>
              <p className="text-stone-100">Amazon Wireless Speakers.</p>
              <button className="underline underline-offset-4 w-fit text-md">
                Shop Now
              </button>
            </div>
            <img
              src={speakersImg}
              alt="speaker"
              className="w-[200px] md:w-[250px] lg:w-[200px] xl:w-[230px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0_50px_#ffffff30]"
            />
          </div>

          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-end bg-stone-950 relative overflow-hidden">
            <div className="z-10 w-[300px] pl-10 pb-10 flex flex-col gap-2 text-white text-lg">
              <h2 className="text-3xl">Perfume</h2>
              <p className="text-stone-100">GUCCI INTENSE OUD EDP.</p>
              <button className="underline underline-offset-4 w-fit text-md">
                Shop Now
              </button>
            </div>
            <img
              src={gucciImg}
              alt="perfume"
              className="w-[200px] md:w-[250px] lg:w-[200px] xl:w-[230px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0_50px_#ffffff30]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
