import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="z-[10] flex gap-[15rem] justify-center items-center py-8 w-full absolute">
            <Link href="/">
                <Image
                    src="/iks-logo.png"
                    width="252"
                    height="300"
                    className=""
                    alt="I know spots logo"
                />
            </Link>
            <div className="flex gap-[5rem] justify-center items-center">
                <Link href="/product">
                    <p>Product</p>
                </Link>
                {/* <Link href="/infra">
                    <p>Infra</p>
                </Link> */}
                <Link href="/dashboard/active">
                    <p>Dashboard</p>
                </Link>
                <Link href="/docs">
                    <p>Docs</p>
                </Link>
                <Link href="/support">
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
