import bg_car from '../../assets/hero_img/bg_car.png'
import logo from '../../assets/hero_img/logo.png'

import {
    FaBars,
    FaTelegramPlane,
    FaWhatsapp,
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa'

import './Hero.css'

export default function Hero() {
    return (
        <section
            className="hero relative min-h-screen w-full overflow-hidden bg-[#08090B] text-white"
            style={{ backgroundImage: `url(${bg_car})` }}
        >

            {/* DARK OVERLAY */}
            <div className="hero-overlay absolute inset-0"></div>

            {/* TOP NAV */}
            <header className="hero-header absolute top-0 left-0 z-20 w-full px-7 md:px-8 lg:px-[30px]">

                <div className="relative flex h-[135px] items-start justify-between">

                    {/* LEFT */}
                    <div className="flex items-center gap-8 pt-[62px]">

                        {/* BURGER */}
                        <button className="burger-btn group relative h-[24px] w-[42px]">
                            <span className="absolute left-0 top-[4px] h-[1px] w-[36px] bg-white transition-all duration-300 group-hover:w-[42px]"></span>
                            <span className="absolute left-[7px] top-[10px] h-[1px] w-[34px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-[42px]"></span>
                            <span className="absolute left-0 top-[16px] h-[1px] w-[36px] bg-white transition-all duration-300 group-hover:w-[42px]"></span>
                        </button>

                        <nav className="hidden items-center gap-9 text-[10px] font-medium md:flex">
                            <a
                                href="#cars"
                                className="nav-link"
                            >
                                Car List
                            </a>

                            <a
                                href="#yacht"
                                className="nav-link active"
                            >
                                Yacht list
                            </a>

                            <a
                                href="#chauffeur"
                                className="nav-link"
                            >
                                Chauffeur
                            </a>
                        </nav>

                    </div>


                    {/* CENTER LOGO */}
                    <div className="absolute left-1/2 top-[25px] -translate-x-1/2">
                        <div className="logo-wrapper flex flex-col items-center">

                            <img
                                src={logo}
                                alt="Trinity"
                                className="h-auto w-[105px] object-contain md:w-[115px]"
                            />

                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className="flex items-center gap-8 pt-[62px]">

                        {/* PHONE */}
                        <a
                            href="tel:+971585907875"
                            className="hidden text-[10px] font-semibold tracking-wide transition-opacity hover:opacity-60 lg:block"
                        >
                            +971 58 590 7875
                        </a>


                        {/* CITY */}
                        <div className="city-wrapper relative hidden md:block">

                            <button className="city-button flex items-center gap-1 text-[10px] font-bold uppercase">
                                Dubai
                                <FaChevronUp className="text-[7px]" />
                            </button>

                            <div className="city-dropdown">

                                <button className="city-item active">
                                    Dubai
                                </button>

                                <button className="city-item">
                                    Moscow
                                </button>

                                <button className="city-item">
                                    Budapest
                                </button>

                                <button className="city-item">
                                    Wiesbaden
                                </button>

                            </div>

                        </div>


                        {/* LANGUAGE */}
                        <button className="hidden items-center gap-1 text-[10px] font-bold uppercase md:flex">
                            ENG
                            <FaChevronDown className="text-[7px]" />
                        </button>

                    </div>

                </div>
            </header>


            {/* HERO CONTENT */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">

                <div className="hero-content flex flex-col items-center text-center">

                    <h1 className="hero-title text-[62px] font-bold leading-none tracking-[-3px] sm:text-[72px] md:text-[82px] lg:text-[76px]">
                        Dubai
                    </h1>

                    <p className="hero-subtitle mt-2 text-[17px] font-normal tracking-[-0.3px] sm:text-[19px]">
                        LUXURY CAR RENTAL
                    </p>

                </div>

            </div>


            {/* SOCIAL BUTTONS */}
            <div className="socials absolute bottom-[37px] right-[48px] z-20 flex items-center gap-3">

                <a
                    href="#telegram"
                    className="social telegram"
                    aria-label="Telegram"
                >
                    <FaTelegramPlane />
                </a>

                <a
                    href="#whatsapp"
                    className="social whatsapp"
                    aria-label="WhatsApp"
                >
                    <FaWhatsapp />
                </a>

            </div>


            {/* BOTTOM CENTER LINE */}
            <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">

                <div className="bottom-line"></div>

            </div>

        </section>
    )
}