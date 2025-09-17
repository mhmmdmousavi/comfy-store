import Header from "../shared/Header";

export default function About() {
    return(
        <div className="flex flex-col items-center">
            <Header/>
            <div className="flex flex-col gap-6 items-center mt-10 px-10 min-md:w-8/12">
                <h1 className="text-5xl font-bold">We love <span className="bg-blue-500 text-gray-200 px-4 py-2 rounded-2xl text-4xl">comfy</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
                </p>
            </div>
        </div>
    )
}