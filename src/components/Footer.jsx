
import footerLogo from '../assets/icons/footerLogo.svg'

function Footer() {
  return (
    <div className="min-h-[204px] bg-[#262626] py-[20px]">
      <div className='container'>
        <nav className="flex justify-center text-white pt-[40px] pb-[10px]">
          <ul className="flex gap-[40px] text-[16px]">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Мероприятия</a></li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </nav>
        <div>
          <img src={footerLogo} alt={footerLogo} />
        </div>
        <div className='text-white text-center'>
          “Три коня”, 2025 год
        </div>
      </div>
    </div>
  )
}

export default Footer
