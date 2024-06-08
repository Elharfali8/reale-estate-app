import { FaSearch } from "react-icons/fa";

const Hero = () => {

  return (
    <section className='container mx-auto px-4 lg:px-2 xl:px-1 min-h-[100vh] text-white flex items-center justify-start'>
      <div className='grid lg:grid-cols-3 gap-x-6 place-items-center'>

        <div className='col-span-1 white-color '> 
          <h1 className='text-4xl lg:text-5xl xl:text-6xl poppins-semibold mb-3'>
            Find Your Place
          </h1>
          <p className='text-lg lg:text-xl mb-4'>
            We are glad to have you around. Feel free to browse our website.
          </p>
          <div className='text-black relative'>
            <input type="text" className='h-[40px] rounded-badge px-3 bg-white focus:outline-none w-full' placeholder='Find a location' />
            <button type="button" className="absolute top-0 bottom-0 right-3">
              <FaSearch size={20} className="main-color" />
            </button>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Hero