import { Link } from "@inertiajs/react";
import { children } from "react";

export default function Navbar({ children }) {

    return (
        <>
            <nav className="flex items-center justify-between p-4 bg-[#D5FFF7]">
                <Link href="/">
                    <div className="flex items-center text-left text-2xl ">
                        <img className="w-auto h-14 object-contain" src="images/Chinook.jpg" alt="" />
                        Chinook
                    </div>
                </Link>
                <div className="flex space-x-6">
                    <Link className="hover:text-blue-300" href="/tracks">Tracks</Link>
                    <Link className="hover:text-gray-300" href="/albums">Albums</Link>
                    <Link className="hover:text-gray-300" href="/artists">Artists</Link>
                    <Link className="hover:text-gray-300" href="/order">Order</Link>
                    <Link className="hover:text-gray-300" href="/search">Search</Link>
                </div>
                <div>
                    <a className="text-right " href="">Login</a>
                </div>

            </nav>
            <main>
                {children}
            </main>
        </>
    )
};