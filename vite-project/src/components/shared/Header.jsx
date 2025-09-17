import { Link } from "react-router";
import { FaMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export default function Header() {
    return(
        <div>
            <div>
                <Link>Sign in / Guest</Link>
                <Link>Create Account</Link>
            </div>
            <div>
                <p>C</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                    <li>Cart</li>
                </ul>
                <div>
                    <button><FaMoon /></button>
                    <button><FaCartShopping />
</button>
                </div>
            </div>
        </div>
    )
}