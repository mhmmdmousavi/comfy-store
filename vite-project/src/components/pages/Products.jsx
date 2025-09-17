import Header from "../shared/Header";
import SearchBar from "../shared/Searchbar";
import { HiOutlineViewList } from "react-icons/hi";
import { BiGridAlt } from "react-icons/bi";
import { client } from "../lib";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Products() {
    const [products , setProducts] = useState([])
    const [name ,setName] = useState("")
    const [category, setCategory] = useState("all")
    const [order, setOrder] = useState("a-z")
    const [price, setPrice] = useState(100000)
    const [shipping, setShipping] = useState(false)
    const [company, setCompany] = useState("all")
    const [page, setPage] = useState(1)

    async function getProducts() {
        try {
            const response = await client.get(`/products?${name?search=name:""}&category=${category}&company=${company}&order=${order}&price=${price}&shipping=${shipping}&page=${page}`)
            setProducts(response.data.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=> {getProducts()}, [name, category, company, order, price, shipping])

    return(
        <div className="pb-10">
            <Header/>
            <SearchBar 
            name={name} setName={setName} 
            category = {category} setCategory ={setCategory} 
            order = {order} setOrder ={setOrder} 
            price = {price} setPrice ={setPrice} 
            shipping = {shipping} setShipping ={setShipping}
            company={company} setCompany ={setCompany} />
            <div className="flex flex-row justify-between mx-10 mt-10 border-b border-gray-300 pb-6 text-xl">
                <p>21 products</p>
                <div className="flex flex-row gap-4">
                    <BiGridAlt className="hover:bg-gray-300 rounded "/>
                    <HiOutlineViewList className="hover:bg-gray-300 rounded" />
                </div>
            </div>
            <ul className="grid grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-4 gap-4 mx-10 my-10">
                {products.map((product)=> (
                    <Link to={`/products/${product.id}`} key={product.id}>                
                        <li className="flex flex-col items-center shadow-xl rounded-lg overflow-hidden hover:shadow-2xl gap-2 p-2">
                            <div className="w-84 h-54 overflow-hidden">
                            <img className="rounded-lg"  src={product?.attributes?.image} alt="" />
                            </div>
                            <p className="font-semibold text-center">{product?.attributes?.title}</p>
                            <p className="text-sm text-blue-800">{product?.attributes?.price}</p>
                        </li>
                    </Link>
                ))}
            </ul>
            <div>
                <ul>
                    <li className={page === 1 ? "disabled" : ""}> <button>PREV</button> </li>
                    {Array.from({ length: products?.meta?.pagination?.pageCount }, (_, index) => (
                        <li key={index} className={page === index + 1 ? "active" : ""}>
                        {index + 1}
                        </li>
                    ))}
                    <li className={page === products?.meta?.pagination?.pageCount ? "disabled" : ""}>
                        <button>NEXT</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}