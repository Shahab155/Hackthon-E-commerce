export default function Hero() {
  return (
    <>
      {/*  hero section  */}

      {/* container  */}

      <div className="w-full h-auto md:h-[711px]  bg-[url('/Images/heroSection/hero1.jpeg')] bg-cover  bg-center">
        <div className="mx-auto max-w-[1044px] h-[440px]  md:h-[651px] flex items-center justify-center  ">
          <main className="w-full h-[331px]">
            <div className="px-10 w-full sm:w-[599px] lg:w-[740px] h-auto sm:h-[331px] flex flex-col gap-[35px] text-center items-center sm:items-start sm:text-start">
              <h5 className="text-[16px] sm:text-[18px] lg:text-[20px] font-[700] text-white">
                Summer 2020
              </h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-white">
                NEW COLLECTION
              </h1>
              <p className="w-full sm:w-[376px] text-lg sm:text-xl  text-white">
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="btn">Shop Now</button>
            </div>
          </main>
        </div>
      </div>

      {/* 2nd section of page  */}
      <section>
        {/* container */}

        <main className="mx-auto mt-20 h-auto max-w-[1044px]">
          {/* heading and text  */}
            <div className="flex flex-col items-center gap-[10px] mx-auto">
            <h1 className="text-primary font-[700] text-2xl">
              EDITOR&#8217;S PICK
            </h1>
            <p className="text-[14px] text-secondary font-[500] text-center">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
          {/* images  */}
    <div className='max-w-[1024px] h-auto md:h-[600px] mx-auto ' >
  <div className='mx-2 mt-12  w-[full] h-auto md:h-[450px] text-xs   grid grid-cols-1 place-item-end grid-rows-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4'>
    {/* 1 */}
    <div className="border-l-2 border-red-900 h-[400px] md:h-full md:col-span-2 md:row-span-2 bg-[url('/Images/products/product1.jpeg')] bg-cover bg-center relative">
        <div className='px-10 py-1 text-center font-[700] bg-white rounded-sm absolute bottom-4 left-6'>
          MEN
        </div>
    </div>
    {/* 2 */}
    <div className="h-[400px] w-full md:h-full md:row-span-2 bg-[url('/Images/products/product2.jpeg')] bg-cover bg-center relative">
   <div className='px-10 py-1 text-center font-[700] bg-white rounded-sm absolute bottom-4 left-6'>
          WOMEN
        </div>
    </div>
    {/* 3 */}
    <div className="h-[400px] md:h-full bg-[url('/Images/products/product3.jpeg')] bg-cover bg-center relative">
    <div className='px-6 py-1 text-center font-[700] bg-white rounded-sm absolute bottom-4 left-6'>
          ACCESSORIES
        </div>
    </div>
    {/* 4 */}
    <div className="h-[400px]  md:h-full bg-[url('/Images/products/product4.jpeg')] bg-cover bg-center relative">
    <div className='px-10 py-1 text-center font-[700] bg-white rounded-sm absolute bottom-4 left-6'>
          KIDS
        </div>
    </div>
  </div>
    </div>
        </main>
      </section>
    </>
  );
}
