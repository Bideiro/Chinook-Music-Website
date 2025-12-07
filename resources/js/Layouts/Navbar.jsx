import { Link } from "@inertiajs/react";
import { children } from "react";

export default function Navbar() {

    return (

        <nav className="grid grid-cols-3 items-center p-4 bg-[#DBBEA1] text-black font-bebas text-xl">
            <Link href="/" className="">
                <div className="flex items-center text-left text-2xl">
                    <img className="w-auto h-14 object-contain" src="images/Chinook.jpg" alt="" />
                    Chinook
                </div>
            </Link>
            <div className="flex justify-center space-x-10">
                <Link className="hover:text-blue-300 " href="/library">Library</Link>
                <Link className="hover:text-gray-300" href="/order">Order</Link>
                <Link className="hover:text-gray-300" href="/search">Search</Link>
            </div>
            <div className=" flex justify-end mr-4">
                <a className="" href="/login">Login</a>
            </div>
        </nav>
    )
};