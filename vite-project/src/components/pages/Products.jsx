import Header from "../shared/Header";
import SearchBar from "../shared/Searchbar";
import { HiOutlineViewList } from "react-icons/hi";
import { BiGridHorizontal } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";

export default function Products() {
    return(
        <div className="pb-10">
            <Header/>
            <SearchBar/>
            <div className="flex flex-row justify-between mx-10 mt-10 border-b border-gray-300 pb-6 text-xl">
                <p>21 products</p>
                <div className="flex flex-row gap-4">
                    <BiGridAlt className="hover:bg-gray-300 rounded "/>
                    <HiOutlineViewList className="hover:bg-gray-300 rounded" />
                </div>
            </div>
            <ul className="grid grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-4 gap-4 mx-10 my-10">
                <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                    <img className="rounded-lg"  src="/card-pic1.jpeg" alt="" />
                    <p className="font-semibold text-center">convertable sleeper sofa</p>
                    <p className="text-sm text-blue-800">$199.99</p>
                </li>
                <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                    <img className="rounded-lg"  src="/card-pic1.jpeg" alt="" />
                    <p className="font-semibold text-center">convertable sleeper sofa</p>
                    <p className="text-sm text-blue-800">$199.99</p>
                </li>
                <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                    <img className="rounded-lg"  src="/card-pic1.jpeg" alt="" />
                    <p className="font-semibold text-center">convertable sleeper sofa</p>
                    <p className="text-sm text-blue-800">$199.99</p>
                </li>
                <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                    <img className="rounded-lg"  src="/card-pic1.jpeg" alt="" />
                    <p className="font-semibold text-center">convertable sleeper sofa</p>
                    <p className="text-sm text-blue-800">$199.99</p>
                </li>
                <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                    <img className="rounded-lg"  src="/card-pic1.jpeg" alt="" />
                    <p className="font-semibold text-center">convertable sleeper sofa</p>
                    <p className="text-sm text-blue-800">$199.99</p>
                </li>
                <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                    <img className="rounded-lg"  src="/card-pic1.jpeg" alt="" />
                    <p className="font-semibold text-center">convertable sleeper sofa</p>
                    <p className="text-sm text-blue-800">$199.99</p>
                </li>
                <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                    <img className="rounded-lg"  src="/card-pic1.jpeg" alt="" />
                    <p className="font-semibold text-center">convertable sleeper sofa</p>
                    <p className="text-sm text-blue-800">$199.99</p>
                </li>
            </ul>
        </div>
    )
}