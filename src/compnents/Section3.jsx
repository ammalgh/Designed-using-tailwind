import imge2Bg from "../assets/imge2Bg.png";
import Comma from "../assets/Comma.jpg";
import UntitledImg3 from "../assets/UntitledImg3.png";
import Star from "../assets/Star.jpg"

function Section3() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex flex-col  items-center"
        style={{ backgroundImage: `url(${imge2Bg})` }} >
        <h2 className="text-[#fff] mb-4 text-lg mt-20 font-sans md:font-serif m-8 text-center">
          What our customers say
        </h2>

        <img className="w-24  mt-6" src={Comma}></img>

        <p className="mb-4 text-2xl  mt-6 font-sans md:font-serif  m-8   text-center text-[#fff] italic ">Share a real testimonial that hits some of </p>
        <p className="mb-4 text-2xl  mt-6 font-sans md:font-serif  m-8   text-center text-[#fff] italic">your benefits (but is not too sales-y).</p>

        <img className="w-24  mt-6" src={UntitledImg3}></img>
        <h3 className="text-[#fff]">REAL NAME</h3>
        <h3 className="text-[#fff]"> Location</h3>
        <img className="w-24  mt-6" src={Star}></img>
      </div>



    </>
  );
}

export default Section3;
