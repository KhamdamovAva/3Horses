
import footerLogo from '../assets/icons/footerLogo.svg'

function Footer() {
  return (
    <div className="min-h-[204px] bg-[#262626] py-[20px]">
      <div className='max-w-[1280px] mx-auto px-4'>
        <nav className="flex justify-center text-white pt-[40px] pb-[10px]">
          <ul className="flex mb-[20px] sm:mb-0 gap-[10px] sm:gap-[30px] text-[14px] sm:text-[16px]">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Мероприятия</a></li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </nav>
        <div >
          <img className='mb-[20px] m-auto sm:m-0' src={footerLogo} alt={footerLogo} />
        </div>
        <div className='text-white text-center'>
          “Три коня”, 2025 год
        </div>
      </div>
    </div>
  )
}

export default Footer
