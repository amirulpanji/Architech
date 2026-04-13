import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center content-center px-10 py-2 border-b border-gray-700">
      <h1 className="font-extrabold text-2xl ">Architech</h1>

      <div className="flex gap-6 items-center">
        <p className="cursor-pointer hover:text-white text-gray-400 ">Showcase</p>
        <p className="cursor-pointer text-gray-400 hover:text-white">Home</p>
        <p className="cursor-pointer text-gray-400 hover:text-white">Builds</p>
        <p className="cursor-pointer bg-gray-800 py-2 px-4 border-2 border-gray-700 rounded-xl  text-gray-400 hover:bg-gray-600 hover:text-white">Learn More</p>
        {/* <Link to="/learn-more">
          <button className=" bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 text-white py-2 px-4 rounded-xl">
            Learn more about PC
          </button>
        </Link> */}
      </div>
    </div>
  );
}