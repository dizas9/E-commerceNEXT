import Image from "next/image";
import Logo from "../Logo/Logo";

export default function Footer() {
  const Company = ["About US", "Career", "Start Selling", "Order History"];
  const Account = ["Track my Order", "View Cart", "Sign In", "Help" , "Wish List"];
  const Customer = [
    "Payment Method",
    "Money Return Policy",
    "Product Return",
    "Contact Seller",
    "Terms & Conditions",
  ];

  const socialIcon = [
    { src: "/images/facebook.svg" },
    { src: "/images/twitter.svg" },
    { src: "/images/linkedin.svg" },
    { src: "/images/instagram.svg" },
  ];
  return (
    <div className=" bg-[#212529] h-fit w-full">
      <div className="h-full  lg:m-16 md:mx-10 mx-3 py-2 flex flex-col lg:flex-row gap-2">
        {/* logo + company */}
        <div className=" flex items-baseline justify-between lg:w-1/2">
          <div className="w-1/2">
            <div className="flex items-center relative  w-[100%] lg:ml-5 text-white ">
              <Logo />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-[#ffffff7d]">
                Got Question? Call us 24/7
              </p>
              <p className="text-[white] font-semibold">+02 055 4156</p>
              <p className="text-sm text-[#ffffff7d]">
                Register now & get you 10% offer from first order
              </p>
              <p className="text-[#ffffffdb] font-semibold">Join US</p>

              {/* Social Icons */}
              <div className="flex gap-7 items-center">
                {socialIcon.map((item, idx) => (
                  <Image key={idx} src={item.src} width={15} height={15} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-lg text-white font-semibold">Company</p>
            <div className="flex flex-col gap-2 mt-2">
              {Company.map((item, idx) => (
                <p key={idx} className="text-sm text-[#ffffff7d]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* account + Customer */}
        <div className="flex items-baseline justify-between lg:w-1/2">
          <div className="w-1/2">
            <p className="text-lg text-white font-semibold">My Account</p>
            <div className="flex flex-col gap-2 mt-2">
              {Account.map((item, idx) => (
                <p key={idx} className="text-sm text-[#ffffff7d]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-lg text-white font-semibold">Customer Service</p>
            <div className="flex flex-col gap-2 mt-2">
              {Customer.map((item, idx) => (
                <p key={idx} className="text-sm text-[#ffffff7d]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
