import Header from "../shared/Header";

export default function Checkout() {
    return(
        <div>
            <Header/>
            <div className="flex flex-col my-10 px-10 ">
                <h1 className="text-3xl font-semibold pb-6">place your order</h1>
                <div className="flex flex-row border-t border-gray-300 pt-6 gap-6 max-md:flex-col max-md:items-center">
                    <div className="flex flex-col w-6/12">
                        <h2 className="text-2xl font-semibold py-4">shipping information</h2>
                        <form className="flex flex-col">
                            <span>First Name</span>
                            <input className="border border-gray-300 rounded-lg py-2 mb-4" type="text" />
                            <span>Address</span>
                            <input className="border border-gray-300 rounded-lg py-2" type="text" />
                            <button className="bg-blue-500 py-3 mt-6 rounded-lg text-gray-200 hover:bg-blue-600">PLACE YOUR ORDER</button>
                        </form>
                    </div>
                    <div className="flex flex-col h-fit mt-6 bg-sky-100 px-4 py-6 rounded-xl w-6/12">
                        <div className="flex flex-row justify-between border-b border-gray-400 py-1"><span>subtotal</span><span>$45.99</span></div>
                        <div  className="flex flex-row justify-between border-b border-gray-400 py-1"><span>subtotal</span><span>$45.99</span></div>
                        <div  className="flex flex-row justify-between border-b border-gray-400 py-1"><span>subtotal</span><span>$45.99</span></div>
                        <div  className="flex flex-row justify-between mt-2 py-1"><span>subtotal</span><span>$45.99</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}