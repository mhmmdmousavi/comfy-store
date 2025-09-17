import { useEffect, useState } from "react";
import { client } from "../lib";
import Banner from "../shared/banner";
import Header from "../shared/Header";
import { Link } from "react-router";

export default function Home() {
    const[items, setItems] = useState([])
    
    async function getFeatured() {
        try {
            const response = await client.get("products?featured=true")
            setItems(response.data.data)
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{getFeatured()},[])

    return(
        <div className="pb-10 flex flex-col items-center">
            <Header/>
            <Banner/>
            <div className="flex flex-row mx-10 mt-10 border-b border-gray-300 pb-4">
                <p className="text-2xl font-semibold">Featured Products</p>
            </div>
            <ul className="grid grid-cols-3 gap-4 mx-10 my-10 w-10/12">
                {items.map((item)=>(
                    <Link to={`products/${item.id}`} key={item.id}>                    
                        <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                            <div className="w-84 h-54 overflow-hidden">
                            <img className="rounded-lg w-full h-full object-cover"  src={item.attributes.image} alt="" />
                            </div>
                            <p className="font-semibold text-center">{item.attributes.title}</p>
                            <p className="text-sm text-blue-800">{item.attributes.price}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}