
export default function FirstComponent() {

  return (
    <div className="w-full h-screen bg-[url('/img/bg-011.webp')] md:bg-[url('/img/bg-012.webp')] lg:bg-[url('/img/bg-013.webp')] xl:bg-[url('/img/bg-014.webp')] 2xl:bg-[url('/img/bg-015.webp')]
                    bg-[length:100%_100%] bg-no-repeat">
      <div className="w-full flex justify-center "> 
        <img src="/img/bg-01_logo.webp" className="w-9/12 md:w-5/12" alt="bg-dog"/>
      </div>
      <div className="h-5/6 md:h-4/6 flex flex-col md:flex-row items-center justify-center px-2 mt-4 ">
        <div className="w-full flex justify-end md:justify-center pr-6 md:order-last "> 
          <img src="/img/bg-01_packages.webp" className="w-4/12 md:w-7/12 my-3" alt="bg-dog"/>
        </div>
        <div className="w-full pl-3 flex md:justify-center "> 
          <img src="/img/bg-01_dog.webp" className="w-5/12 md:w-7/12 my-3" alt="bg-dog"/>
        </div>
        <div className="w-full flex justify-end md:justify-center pr-2 md:order-first"> 
          <img src="/img/bg-01_astro.webp" className="w-5/12 md:w-7/12 scale-x-[-1] md:scale-x-[1] rotate-45 md:rotate-0 my-3" alt="bg-dog"/>
        </div>  
      </div>
      
    </div>
  )
}
