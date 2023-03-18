import Image from "next/image"
import splash from "../assets/AboutUs/splash.png"
import icon1 from "../assets/AboutUs/icon1.png"
import icon2 from "../assets/AboutUs/icon2.png"
import icon3 from "../assets/AboutUs/icon3.png"

const AboutUs = () => {
  return (
    <div className="relative h-[43rem] flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="w-auto h-[10rem] md:h-auto ">
            <Image src={splash} width={750} alt="" className="h-[10rem] md:h-[43rem] absolute z-0 bg-cover object-cover" />
            <div className='bg-blue-900 h-[10rem] z-10 absolute  w-[100%] opacity-80 md:h-[43rem]  md:w-auto'></div>
            <div className="absolute z-10 h-[10rem] grid grid-cols-3 gap-2 md:h-auto md:w-auto md:grid-rows-3 md:grid-cols-1 md:gap-8 ">
                <div className="flex justify-center items-center flex-col">
                    <Image src={icon3} alt="" className=" w-16" />
                    <h1 className="text-base text-center">EPC</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <Image src={icon1} alt="" className=" w-16" />
                    <h1 className="text-base text-center">Import & Export Services</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <Image src={icon2} alt="" className=" w-16" />
                    <h1 className="text-base text-center">International Joint Venture projects</h1>
                </div>
            </div>
        </div>
        <div className="h-[33rem]">
            <h1 className="text-green-500">
                Aboutus
            </h1>
        </div>
    </div>
  )
}

export default AboutUs