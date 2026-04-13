import { Link } from "react-router-dom";
import Header from "../component/Header";

export default function LandingPage() {
    return (
        <div>
            <Header />
            <main className="flex flex-col items-center gap-1 h-screen text-center mt-8">
                <h1 className=" text-5xl font-bold selection:bg-white selection:text-gray-900">Be the Architect of your own tech</h1>
                <p className="text-center max-w-120 mt-3 selection:bg-white selection:text-gray-900">Build and compare different PC configurations to find the perfect setup for your needs.</p>
                <div className="flex gap-4 mt-7">
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
                
            </main>
        </div>
    );
}