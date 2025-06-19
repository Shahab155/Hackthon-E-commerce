import Navbar from "@/components/header/Navbar";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import ContactBottom from "./contactBottom";


export default function Contact() {
  return (
    <>
    <Navbar/>
      {/* conatiner */}
      <div>


        <main className=" mx-auto md:max-w-[1044px] flex flex-col md:flex-row w-[100%] items-center my-20 md:my-0">
          {/* contact left  */}
          <div className=" w-[100%] md:w-[45%]  h-[518px] flex flex-col  items-center md:items-start gap-8 px-2">
            <h5 className="font-[700] text-primary text-[16px] hidden md:flex">
              Contact Us
            </h5>
            <h1 className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl tracking-[0.2px] font-[700] text-primary">
              Get In Touch Today!
            </h1>
            <h4 className="w-[80%] md:w-[376px] text-secondary font-[400] text-xl tracking-[0.2px] text-center md:text-start">
              We know how large objects will act, but things on a small scale
            </h4>
            <div className="h-[84px] flex flex-col justify-between">
              <h3 className="text-2xl font-[700] text-primary">
                Phone: +451 215 215
              </h3>
              <h3 className="text-2xl font-[700] text-primary">
                Fax: +451 215 215
              </h3>
            </div>
            {/* icons  */}
            <div className="flex text-3xl text-primary gap-3">
              <FaTwitter />
              <FaFacebookSquare />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          {/* contact image  */}
          <div className="mx-auto  w-full md:w-[50%]  h-[826px] bg-[url('/Images/contact1.png')] bg-cover bg-center">
            <div className="hidden md:flex max-w-[500px] h-[500px] rounded-[50%] bg-red-200 relative top-20 z-[-1]"></div>

          </div>
        </main>
      
      </div>
      <ContactBottom/>

     
    </>
      
  );
}
