export default function SearchBar({name, setName, category, setCategory, order, setOrder, price, setPrice, shipping, setShipping, company, setCompany}) {
    return(
        <div className="grid grid-cols-2 place-items-center bg-sky-100 mt-10 mx-10 rounded-lg p-6 gap-6 min-md:grid-cols-4">
            <div className="w-full">
                <span className="px-2  text-sm">Search Product</span>
                <input value={name} onChange={(e)=> setName(e.target.value)} className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search..."/>
            </div>
            <div className="w-full">
                <span className="px-2  text-sm">Select Category</span>
                <select value={category} onChange={(e)=> setCategory(e.target.value)} className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search...">
                    <option value="All">All</option>
                    <option value="Beds">Beds</option>
                    <option value="Sofas">Sofas</option>
                    <option value="Chairs">Chairs</option>
                    <option value="Tables">Tables</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>
            <div className="w-full">
                <span className="px-2  text-sm">Select Company</span>
                <select value={company} onChange={(e)=> setCompany(e.target.value)} className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search...">
                    <option value="All">All</option>
                    <option value="Artifex">Artifex</option>
                    <option value="Luxora">Luxora</option>
                    <option value="Comfora">Comfora</option>
                    <option value="Modenza">Modenza</option>
                    <option value="Homestead">Homestead</option>
                </select>           
            </div>
            <div className="w-full">
                <span className="px-2  text-sm">Sort BY</span>
                <select value={order} onChange={(e)=> setOrder(e.target.value)}  className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search...">
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                    <option value="high">high</option>
                    <option value="low">low</option>
                </select>
            </div>
            <div className="w-full">
                <div className="flex flex-row justify-between">
                <span className="px-2  text-sm">Select Price</span> <label>{price}</label>
                </div>
                <input value={price} onChange={(e)=> setPrice(Number(e.target.value))}  type="range" min={0} step={100} max={100000} className="range range-info" />
                <div className="flex flex-row justify-between">
                <span>0</span>
                <span>Max : $1,000.00</span>
                </div>    
            </div>
            <div className="w-full flex flex-col items-center gap-1">
                <span className="px-2  text-sm">Free Shiping</span>
                <input
                type="checkbox"
                checked={shipping} onChange={(e)=> setShipping(e.target.checked)} 
                className="checkbox border-blue-500 bg-sky-100 checked:border-blue-500 checked:bg-blue-500 checked:text-sky-100"
                />            
                </div>
            <button className="bg-blue-500 text-gray-200 w-full py-1 rounded-lg">SEARCH</button>
            <button className="bg-pink-500 text-gray-200 w-full py-1 rounded-lg">RESET</button>

        </div>
    )
}