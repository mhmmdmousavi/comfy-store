import Header from "../shared/Header";

export default function Cart() {
    return(
        <div>
            <Header/>
            <div className="flex flex-col items-center px-10 py-10">
                <p className="text-3xl font-semibold pb-6">Shopping Cart</p>
                <div className="pt-6 border-t border-gray-300 flex flex-col  min-md:flex-row min-md:justify-between">
                    <div className="flex flex-col items-center min-md:flex-row min-md:items-start gap-6 min-md:w-6/12">
                        <img className="max-w-6/12 min-md:py-4" src="/card-pic1.jpeg" alt="" />
                        <div className="flex flex-col items-start w-8/12 min-md:flex-col min-md:items-center min-md:gap-4">
                            <p className="font-semibold mt-4 mb-4">Consol Table</p>
                            <p className="text-gray-400 mb-4 min-md:mb-0">Luxora</p>
                            <p className="mb-5">color:</p>
                            <span className="mb-4">Amount</span>
                            <input   className="border border-purple-950 rounded-lg py-1  text-xl w-40" type="number" min={1} step={1}/>      
                            <button className="text-red-600 ">remove</button>     
                            <p className="mt-4">$45.99</p>       
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full min-md:w-3/12 mt-10"> 
                        <div className="flex flex-col bg-sky-100 px-4 py-6 rounded-xl w-full">
                            <div className="flex flex-row justify-between border-b border-gray-400 py-1"><span>subtotal</span><span>$45.99</span></div>
                            <div  className="flex flex-row justify-between border-b border-gray-400 py-1"><span>subtotal</span><span>$45.99</span></div>
                            <div  className="flex flex-row justify-between border-b border-gray-400 py-1"><span>subtotal</span><span>$45.99</span></div>
                            <div  className="flex flex-row justify-between mt-2 py-1"><span>subtotal</span><span>$45.99</span></div>
                        </div>
                        <button className="bg-blue-500 text-gray-100 w-full py-3 mt-6 rounded-xl">PLEASE LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}