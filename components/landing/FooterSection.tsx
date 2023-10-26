"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
const ZIP_FILE_URL = "https://www.iknowspots.com/brandingkit.zip";
const FooterSection = () => {
    const downloadFileAtURL = (url:any) => {
        const fileName = url.split("/").pop();  
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }

    return (
        <div className="relative flex flex-col sm:flex-row justify-between p-4 sm:p-8 mx-4 sm:mx-8 border-white footer-gradient z-10 overflow-hidden footerDiv">
            <div className="flex flex-col relative z-10 px-8">
                <div className="">
                    <img
                        src="/iks-logo.png"
                        width="252"
                        height="300"
                        className=""
                        alt="I know spots logo"
                    />
                    <p className="text-[#ffffffbf] text-[0.75rem] sm:text-base">
                        Seamless granular events hosting with NFT tickets.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center sm:justify-normal items-center sm:items-initial w-full gap-3 my-8">
                    <input
                        className="email-input px-5 py-1"
                        placeholder="Email"
                    ></input>
                    <button className="subscribe-button px-5 py-1">
                        Subscribe
                    </button>
                </div>
                
                <div className="flex justify-center sm:justify-normal gap-5">
                    <a href="https://twitter.com/iknowspots">
                    <img src="/twitter.png" alt="twitter"/>

                    </a>
                    <a href="https://www.linkedin.com/company/iknowspots">
                    <img src="/linkedin.png" alt="linkedin" />
                    </a>

                    <a href="https://github.com/orgs/IKnowSpots/repositories">
                    <img src="/github.svg" alt="linkedin" />
                    </a>

                    <a href="https://medium.com/@iknowspots">
                    <img className="mt-1" src="/medium.png" alt="linkedin" />
                    </a>

                </div>

                <p className="text-[0.75rem] sm:text-base my-8">@2023 All rights reserved.</p>
            </div>
            <div className="footerGradientDiv flex flex-col sm:flex-row px-8">
                <Image
                    src="/mediumGradient.png"
                    alt="footer gradient"
                    width="300"
                    height="300"
                    className="footerGradient"
                />
                <Image
                    src="/largerGradient.png"
                    alt="footer gradient"
                    width="300"
                    height="200"
                    className="footerGradient"
                />
            </div>
            <div className="flex text-[0.75rem] sm:text-base z-[10] px-8">
                <div className="px-8">
                    <p className="mb-2 font-semibold">Company</p>
                    <ul>

                        <li className="hoverFooter">
                            <button onClick={() => {
                                downloadFileAtURL(ZIP_FILE_URL);
                            }}>
                                Branding Kit
                            </button>
                            </li>
                        <li className="hoverFooter">Terms</li>
                        <li className="hoverFooter">Privacy</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2 font-semibold">Support</p>
                    <ul>
                        <li className="hoverFooter">
                            <a href="mailto:info@iknowspots.com">Contact Us</a></li>
                        <li className="hoverFooter">
                            <Link href="https://drive.google.com/file/d/1AksnU1BU4UNidCx0Pw0ts2m76i2gqDDR/view?usp=sharing" target="_blank">Docs</Link></li>
                        {/* <li className="">Text 1</li>
            <li className="">Text 1</li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default FooterSection;
