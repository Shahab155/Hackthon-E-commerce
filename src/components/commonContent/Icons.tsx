import Image from "next/image";
import Link from "next/link";
export default function Icons() {
  return (
    <>
      <ul className="flex gap-5 ">
        <li>
          <Link href="https://www.linkedin.com/in/shahab-ud-din-7547762b9">
          
          <Image src={"/Images/facebook.png"} alt="" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link href="">
          
          <Image src={"/Images/instagram.png"} alt="" width={30} height={24} />
          </Link>
        </li>

        <li>
        <Link href={""}>
         <Image src={"/Images/twitter2.png"} alt="" width={30} height={24} />
        </Link> 
        </li>
      </ul>
    </>
  );
}
