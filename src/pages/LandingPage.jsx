import { Link } from "react-router-dom";
import Header from "../component/Header";

export default function LandingPage() {
    return (
        <div>
            <Header />
            <main className="flex flex-col items-center gap-1 h-screen text-center mt-25">
                <h1 className=" text-6xl font-bold selection:bg-white selection:text-gray-900">Be the Architect of your own tech</h1>
                <p className="text-center text-xl max-w-120 mt-10 selection:bg-white selection:text-gray-900">Build and compare different PC configurations to find the perfect setup for your needs.</p>
                <div className="flex gap-4 mt-10">
                    <Link to="/build">
                        <button className="bg-white hover:bg-gray-300 font-medium text-gray-800 py-2 px-4 rounded-xl">
                            Build a PC 
                        </button>
                    </Link>
                    <Link to="/learn-more">
                        <button className=" bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 text-white py-2 px-4 rounded-xl">
                            Learn more about PC
                        </button>
                    </Link>
                </div>

                <div className={`flex flex-1 overflow-hidden mt-35 `}>
                    <div className={'w-300 grid grid-cols-3 gap-5'}>
                        <div className="w-full mb-2 mt-2  px-10 py-5 rounded-xl cursor-pointer border-5 hover:border-dashed transition bg-gray-800 border-gray-700">
                            <h1 className="text-4xl m-1 text-left">Find</h1>
                            <p className="text-left">Look for PC Builds based on your needs.</p>
                        </div>
                        <div className="w-full mb-2 mt-2  px-10 py-5 rounded-xl border transition bg-gray-800 border-gray-700">
                            <h1 className="text-4xl m-1 text-left">Build</h1>
                        </div>
                        <div className="w-full mb-2 mt-2  px-10 py-5 rounded-xl border transition bg-gray-800 border-gray-700">
                            <h1 className="text-4xl m-1 text-left">Anggi</h1>
                        </div>
                    </div>
                </div>
                
            </main>
        </div>
    );
}