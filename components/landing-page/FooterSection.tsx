import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="flex justify-between pt-6 mt-12 mx-12 border-white footer-gradient z-10 overflow-hidden footerDiv">
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
        <div className="flex justify-between  my-12">
          <input className="email-input px-5" placeholder="Email"></input>
          <button className="subscribe-button px-5 py-1">Subscribe</button>
        </div>
        <div className="flex justify-between my-6">
          <img src="./facebook.png" alt="facebook" />
          <img src="./twitter.png" alt="twitter" />
          <img src="./instagram.png" alt="instagram" />
          <img src="./linkedin.png" alt="linkedin" />
          <img src="./discord.png" alt="discord" />
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
      <div className="flex justify-evenly">
        <div className="px-8">
          Network
          <ul>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
          </ul>
        </div>
        <div>
          Network
          <ul>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
