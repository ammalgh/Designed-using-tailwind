import imge1 from "../assets/imge1.png";

function Section1() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${imge1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white p-8 max-w-xl mx-auto ms-8  ">
          <h4 className="text-4xl font-bold mb-4  mt-10">FreshGoods</h4>
          <div className="text-left text-2xl mb-2  mt-6  font-mono">
            <h2>Concisely </h2>
            <h2>describe your</h2>
            <h2> product or service</h2>
          </div>
          <p className="mb-4 text-lg  mt-6 font-sans md:font-serif">
            No need to get clever. Tell people exactly what you are offering,
            then use this space to communicate your key value proposition.
          </p>
          <button className="bg-[#ffb400] hover:bg-[#ffb400] text-black font-bold py-2 px-4 rounded  mt-6">
            ORDER NOW
          </button>
        </div>
      </div>
    </>
  );
}

export default Section1;
