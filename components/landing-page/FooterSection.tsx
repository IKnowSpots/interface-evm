import Image from "next/image";

const FooterSection = () => {
    return (
        <div className="flex justify-between pt-6 mt-12 mx-8 border-white footer-gradient z-10 overflow-hidden footerDiv">
            <div className="flex flex-col">
                <div className="">
                    <img
                        src="./iks-logo.png"
                        width="252"
                        height="300"
                        className=""
                        alt="I know spots logo"
                    />
                    <p className="text-[#ffffffbf] text-m">
                        Seamless granular events hosting with NFT tickets.
                    </p>
                </div>
                
                <div className="flex gap-6  my-8">
                    <input
                        className="email-input px-5"
                        placeholder="Email"
                    ></input>
                    <button className="subscribe-button px-5 py-1">
                        Subscribe
                    </button>
                </div>
                
                <div className="flex gap-5">
                    <img src="./twitter.png" alt="twitter" />
                    <img src="./linkedin.png" alt="linkedin" />
                    {/* <img src="./facebook.png" alt="facebook" /> */}
                    {/* <img src="./instagram.png" alt="instagram" /> */}
                    {/* <img src="./discord.png" alt="discord" /> */}
                </div>

                <p className="my-6">@2023 All rights reserved.</p>
            </div>
            <div className="footerGradientDiv flex">
                <Image
                    src="/largerGradient.png"
                    alt="footer gradient"
                    width="300"
                    height="300"
                    className="footerGradient"
                />
                <Image
                    src="/largerGradient.png"
                    alt="footer gradient"
                    width="500"
                    height="100"
                    className="footerGradient"
                />
            </div>
            <div className="flex  z-[10]">
                <div className="px-8">
                    <p className="mb-2 font-semibold">Company</p>
                    <ul>
                        <li className="">Branding Kit</li>
                        <li className="">Terms</li>
                        <li className="">Privacy</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2 font-semibold">Support</p>
                    <ul>
                        <li className="">Contact Us</li>
                        <li className="">Docs</li>
                        {/* <li className="">Text 1</li>
            <li className="">Text 1</li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default FooterSection;
