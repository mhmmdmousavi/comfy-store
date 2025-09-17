import { Link } from "react-router";

export default function Banner() {
    return(
        <div className="flex flex-row px-10 mt-10 gap-10 items-center justify-center">
            <div className="w-6/12 flex flex-col gap-4">
                <h1 className="text-5xl font-bold">We are changing the way people shop</h1>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
                </span>
                <Link className="bg-blue-500 hover:bg-blue-600 w-fit  px-2 py-2 rounded-lg text-sm text-gray-200 ">OUR PRODUCTS</Link>
            </div>
            <div className="w-6/12 place-items-center ">
                <img className="max-h-96" src="/banner-img1.webp" alt="" />
            </div>
        </div>
    )
}