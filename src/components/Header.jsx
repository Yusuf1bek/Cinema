import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoIcon from "../assets/images/logo-icon.svg"
import { FiTablet } from "react-icons/fi";
import { RiTv2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { RiFileListLine } from "react-icons/ri";
import Language from './Language';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const {t} = useTranslation()
  return (
    <header className='container p-[22px] flex items-center justify-between mb-[16px] max-sm:flex-col max-sm:items-start sticky z-10 bg-black'>
      <Link to={"/"}>
        <img className='max-sm:inline-block' src={LogoIcon} alt="Logo Img" width={112} height={36} />
      </Link>
      <ul className='flex items-center gap-[30px] ml-[120px] max-sm:mt-[-45px] max-sm:mb-[20px]'>
        <NavLink to={"/"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <RiTv2Line className='text-[24px] '/>
          <span>{t("header.afisha")}</span>
        </NavLink>
        <NavLink to={"/sessions"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <FiTablet className='text-[24px] '/>
          <span>{t("header.sessions")}</span>
        </NavLink>
        <NavLink to={"/tickets"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <RiFileListLine className='text-[24px] '/>
          <span>{t("header.genre")}</span>
        </NavLink>
        <NavLink to={"/categories"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <IoSearch className='text-[24px] '/>
          <span>{t("header.search")}</span>
        </NavLink>
      </ul>
      <div className='flex items-center gap-[20px] max-sm:ml-[70px]'>
        <Language/>
      <button className='bg-redText text-white w-[150px] py-[9px] rounded-xl'>
      {t("header.login")}
      </button>
      </div>
    </header>
  )
}

export default Header