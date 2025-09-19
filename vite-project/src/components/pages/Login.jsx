import { Link } from "react-router";
import { client } from "../lib";
import { useForm, } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
    
    const validationSchema = z.object({
        email: z.email({message:"email is not valid"}),
        password: z.string().min(2, "password is too short")
    })

    const {handleSubmit, register, formState:{ errors }} = useForm({
        resolver: zodResolver(validationSchema)
    })

    async function submitLogin(user) {
        try {
            const response = await client.post("/auth/local", {identifier: user.email, password: user.password})
            const access = response.data.jwt
            const refresh = response.data.refresh
            localStorage.setItem("access", access)
            
            if (response.status === 200) {
                window.location.href = "/";
                alert("you are logged in")
                

        }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="place-items-center mx-10 py-10">
            <div className="flex flex-col items-center shadow-xl max-w-100 w-full place-items-center rounded-2xl">
                <h2 className="text-3xl font-semibold px-4 py-4">LOGIN</h2>
                <form onSubmit={handleSubmit(submitLogin)} className="flex flex-col gap-2 p-4 w-full">
                    <span>Email</span>
                    <input {...register("email")} className="border rounded-md py-1 border-gray-300 w-full"  type="text" />
                    <span>Password</span>
                    <input {...register("password")} className="border rounded-md py-1 border-gray-300 w-full"  type="text" />
                    <button className="bg-blue-500 hover:bg-blue-600 text-gray-200 py-1 text-lg rounded-lg mt-6 ">Login</button>
                </form>
                <span className="pb-8">Already a member? <Link className="text-blue-500" to={"/register"}>register</Link> </span>
            </div>
        </div>
    )
}