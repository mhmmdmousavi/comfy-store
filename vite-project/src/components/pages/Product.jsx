import { Link } from "react-router";
import Header from "../shared/Header";
import { IoIosArrowForward } from "react-icons/io";


export default function Product() {
    return(
        <div className="flex flex-col gap-5 pb-10">
            <Header/>
            <div className="flex flex-row items-center  mx-10 mt-10">
                <Link to={"/"}>Home</Link>
                <IoIosArrowForward />
                <Link to={"products"}>Products</Link>
            </div>
            <div className="mx-10 flex flex-row items-start gap-10 justify-center mt-5">
                <div className="w-5/12 overflow-hidden rounded-2xl">
                    <img className=" w-full h-full object-cover" src="/card-pic1.jpeg" alt="" />
                </div>
                <div className="w-5/12 flex flex-col items-start gap-4"> 
                    <h2 className="text-3xl font-semibold">Convertible Sleeper Sofa</h2>
                    <h3 className="text-xl font-semibold text-gray-400">Comfora</h3>
                    <p className="text-xl mb-4">$199.99</p>
                    <p>
                        Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
                    </p>
                    <span>Colors</span>
                    <span>Amount</span>
                    <input className="border border-purple-950 rounded-lg py-1 text-xl " type="number" min={1} step={1}/>
                    <button className="bg-purple-900 text-gray-200 px-4 py-3 rounded-lg text-sm font-bold">ADD TO BAG</button>
                </div>
            </div>
        </div>
    )
}