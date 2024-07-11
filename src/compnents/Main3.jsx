import Lastimge from "../assets/Lastimge.png"

function Main3() {
  return (
    <>
    
    <div
        className="relative bg-cover bg-center h-screen flex flex-col  items-center justify-center"
        style={{ backgroundImage: `url(${Lastimge})` }} >

       <h1 className=" font-semibold mb-4 text-[#0d0d0d] my-8 text-6xl mt-6">End with one</h1>
       <h1 className=" font-semibold mb-4 text-[#0e0e0e] text-6xl"> final call to action</h1>
       
       <p className=" text-lg  mt-6 font-sans md:font-serif  m-8   text-center font-semibold ">This is your last shot at converting someone. Remind them about the</p>
       <p className="mb-4 text-lg  font-sans md:font-serif    text-center font-semibold "> benefits of your offer and encourage them to act now.</p>

       <button className="bg-[#ffb400] hover:bg-[#ffb400] text-black font-bold py-2 px-4 rounded  mt-6">
           ORDER NOW
          </button>



        </div>
    
    
    </>
  )
}

export default Main3