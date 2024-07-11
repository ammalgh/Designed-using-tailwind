import Section1 from "./compnents/Section1";
import "./App.css";
import Section2 from "./compnents/Section2";
import Section3 from "./compnents/Section3";
import Main1 from "./compnents/Main1";
import Main2 from "./compnents/Main2";
import Main3 from "./compnents/Main3";
import copyright from "./assets/copyright.png";

function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Main1 />
      <Main2 />
      <Main3 />
      <div className="flex flex-col md:flex-row justify-around items-center p-4 bg-[#000000] text-[#fff] space-y-4 md:space-y-0">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#">FreshGoods</a>
          </li>
        </ul>
        <ul className="flex items-center space-x-2">
          <li>
            <img className="w-6 h-6" src={copyright} alt="Copyright Icon" />
          </li>
          <li>
            <a href="#">2020 Insert Name Here. All rights reserved.</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
