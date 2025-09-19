import { useEffect, useState } from "react";
import Header from "../shared/Header";
import { client } from "../lib";

export default function Order() {
    const [page, setPage] = useState(1)
    const [orders, setOrder] = useState([])
    const access_token = localStorage.getItem("access")

    async function getOrders() {
        try {
            const response = await client.get("/orders",{
            headers: {Authorization:`Bearer ${access_token}`}
        })
        setOrder(response.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{getOrders()},[])

    return(
        <div>
            <Header/>
            <div className="px-10 my-10">
                <h2 className="text-3xl font-semibold pb-6 border-b border-gray-300">Your Orders</h2>
                <div className="overflow-x-auto mt-10">
                    <p className="text-2xl mb-8">total orders : {orders?.meta?.pagination?.total}</p>
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Address</th>
                            <th className="border border-gray-300 px-4 py-2">Products</th>
                            <th className="border border-gray-300 px-4 py-2">Cost</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Giggle Gary</td>
                            <td className="border border-gray-300 px-4 py-2">	Wit Way, Snickerston</td>
                            <td className="border border-gray-300 px-4 py-2">6</td>
                            <td className="border border-gray-300 px-4 py-2">	₹1,12,849.23</td>
                            <td className="border border-gray-300 px-4 py-2">03:43 pm - Sep 16th, 2025</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
            <div className="place-items-end px-10 ">
                <ul className="flex flex-row  w-30 rounded-xl mr-20">
                    <li className={page === 1 ? "disabled hidden" : "hover:bg-sky-200 px-4 bg-sky-100 py-2 rounded-l-xl"}> <button onClick={()=>setPage(page-1)}>PREV</button> </li>
                    <li className=" px-4 bg-sky-100 py-2 ">{page}</li>
                    <li className={page === orders?.meta?.pagination?.pageCount ? "disabled hidden" : "hover:bg-sky-200 px-4 bg-sky-100 py-2 rounded-r-xl"}>
                        <button onClick={()=>setPage(page+1)}>NEXT</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}