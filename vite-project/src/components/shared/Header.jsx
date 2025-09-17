import { Link } from "react-router";
import { FaMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export default function Header() {
    return(
        <div className="flex flex-col w-full">
            <div className="flex flex-row bg-blue-950  justify-end gap-4 pr-10 text-gray-300 text-sm py-1">
                <Link>Sign in / Guest</Link>
                <Link>Create Account</Link>
            </div>
            <div className="bg-sky-50 flex flex-row justify-between px-10 items-center">
                <p className="bg-blue-500 text-sky-50 px-3 py-1 m-2 rounded-lg text-2xl font-extrabold">C</p>
                <ul className="flex flex-row gap-2 items-center text-sm">
                    <li className="bg-sky-50 text-black px-2 py-1 rounded-md hover:bg-gray-200"><Link to={"/"}>Home</Link></li>
                    <li className="bg-sky-50 text-black px-2 py-1 rounded-md hover:bg-gray-200"><Link to={"/about"}>About</Link></li>
                    <li className="bg-sky-50 text-black px-2 py-1 rounded-md hover:bg-gray-200"><Link to={"/products"}>Products</Link></li>
                    <li className="bg-sky-50 text-black px-2 py-1 rounded-md hover:bg-gray-200"><Link to={"/"}>Cart</Link></li>
                </ul>
                <div className="flex flex-row items-center gap-4 text-xl">
                    <button><FaMoon /></button>
                    <button className="relative hover:bg-gray-200 p-2 rounded-full"><FaCartShopping /> <p className="bg-blue-500 text-white rounded-2xl text-xs absolute -right-2 -top-2">0</p></button>
                </div>
            </div>
        </div>
    )
}