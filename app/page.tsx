import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#1E1F23F2] text-white">

      <nav className ="flex justify-evenly items-center py-8">
        <Image
          src="/iks-logo.png"
          width="252"
          height="300"
          className =""
        />
        <Link href="/product">
          <p>Product</p>
        </Link>
        <Link href="/product">
          <p>Pricing</p>
        </Link>
        <Link href="/product">
          <p>FAQ's</p>
        </Link>
        <Link href="/product">
          <p>About</p>
        </Link>
        <Link href="/product">
          <button className = "border border-[#C584F5] px-4 py-2 rounded-xl ">Connect Wallet</button>
        </Link>
      </nav>
    </div>
  )
}
