import Briefly from '../assets/Briefly.png';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={Briefly} alt="sumz_logo" className='w-28 ml-3 object-contain scale-150'/>
        
        <button type='button' onClick={() => window.open("https://github.com/OtarJinchveladze")} className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='pink_gradient'>Article Summarizer</span>
      </h1>

      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article 
        summarizer that transforms lengthy articles into clear and concise summaries. 
      </h2>

    </header>
  )
}

export default Hero