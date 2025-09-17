import { Link, useParams } from "react-router";
import Header from "../shared/Header";
import { IoIosArrowForward } from "react-icons/io";
import { client } from "../lib";
import { useEffect, useState } from "react";


export default function Product() {
    const {productID} = useParams()
    const [product, setProduct] = useState(null)
    const [amount, setAmount] = useState(1)
    async function getProduct() {
        try {
            const response = await client.get(`/products/${productID}`)
            setProduct(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {getProduct()},[])

    return(
        <div className="flex flex-col gap-5 pb-10">
            <Header/>
            <div className="flex flex-row items-center  mx-10 mt-10">
                <Link to={"/"}>Home</Link>
                <IoIosArrowForward />
                <Link to={"/products"}>Products</Link>
            </div>
            <div className="mx-10 flex flex-row items-start gap-10 justify-center mt-5">
                <div className="w-5/12 overflow-hidden rounded-2xl">
                    <img className=" w-full h-full object-cover" src="/card-pic1.jpeg" alt="" />
                </div>
                <div className="w-5/12 flex flex-col items-start gap-4"> 
                    <h2 className="text-3xl font-semibold">{product?.attributes?.title}</h2>
                    <h3 className="text-xl font-semibold text-gray-400">{product?.attributes?.company}</h3>
                    <p className="text-xl mb-4">{product?.attributes?.price?  `$${product.attributes.price.toLocaleString()}` : ""}</p>
                    <p>
                        {product?.attributes?.description}
                    </p>
                    <span>Colors</span>
                    <span>Amount</span>
                    <input value={amount} onChange={(e)=> setAmount(e.target.value)} className="border border-purple-950 rounded-lg py-1 pl-2 text-xl " type="number" min={1} step={1}/>
                    <button className="bg-purple-900 text-gray-200 px-4 py-3 rounded-lg text-sm font-bold">ADD TO BAG</button>
                </div>
            </div>
        </div>
    )
}