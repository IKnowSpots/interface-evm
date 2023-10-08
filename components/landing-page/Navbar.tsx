import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav
            className="flex gap-[15rem] justify-center items-center py-8 w-full absolute"
        >
            <Image
                src="/iks-logo.png"
                width="252"
                height="300"
                className=""
                alt="I know spots logo"
            />
            <div className="flex gap-[5rem] justify-center items-center">
                <Link href="/product">
                    <p>Product</p>
                </Link>
                <Link href="/product">
                    <p>Infra</p>
                </Link>
                <Link href="/product">
                    <p>Docs</p>
                </Link>
                <Link href="/product">
                    <p>Support</p>
                </Link>
            </div>

            <Link href="/product">
                <button className="border border-[#C584F5] px-4 py-2 rounded-xl ">
                    Connect Wallet
                </button>
            </Link>
        </nav>
    );
};
export default Navbar;
