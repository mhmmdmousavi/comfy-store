export default function SearchBar() {
    return(
        <div className="grid grid-cols-2 place-items-center bg-sky-100 mt-10 mx-10 rounded-lg p-6 gap-6 min-md:grid-cols-4">
            <div className="w-full">
                <span className="px-2  text-sm">Search Product</span>
                <input className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search..."/>
            </div>
            <div className="w-full">
                <span className="px-2  text-sm">Select Category</span>
                <select className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search...">
                    <option value="region">All</option>
                    <option value="Africa">Beds</option>
                    <option value="Asia">Sofas</option>
                    <option value="Americas">Chairs</option>
                    <option value="Europe">Tables</option>
                    <option value="Oceania">Kids</option>
                </select>
            </div>
            <div className="w-full">
                <span className="px-2  text-sm">Select Company</span>
                <select className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search...">
                    <option value="region">All</option>
                    <option value="Africa">Beds</option>
                    <option value="Asia">Sofas</option>
                    <option value="Americas">Chairs</option>
                    <option value="Europe">Tables</option>
                    <option value="Oceania">Kids</option>
                </select>           
            </div>
            <div className="w-full">
                <span className="px-2  text-sm">Sort BY</span>
                <select className="bg-white rounded-lg px-2 py-1 mt-2 border border-gray-300 w-full" type="text" placeholder="search...">
                    <option value="region">All</option>
                    <option value="Africa">Beds</option>
                    <option value="Asia">Sofas</option>
                    <option value="Americas">Chairs</option>
                    <option value="Europe">Tables</option>
                    <option value="Oceania">Kids</option>
                </select>
            </div>
            <div className="w-full">
                <div>
                <span className="px-2  text-sm">Select Price</span> <label>{}</label>
                </div>
                <input type="range" min={0} max="100" className="range range-info" />
                <div className="flex flex-row justify-between">
                <span>0</span>
                <span>Max : $1,000.00</span>
                </div>    
            </div>
            <div className="w-full flex flex-col items-center gap-1">
                <span className="px-2  text-sm">Free Shiping</span>
                <input
                type="checkbox"
                
                className="checkbox border-blue-500 bg-sky-100 checked:border-blue-500 checked:bg-blue-500 checked:text-sky-100"
                />            
                </div>
            <button className="bg-blue-500 text-gray-200 w-full py-1 rounded-lg">SEARCH</button>
            <button className="bg-pink-500 text-gray-200 w-full py-1 rounded-lg">RESET</button>

        </div>
    )
}