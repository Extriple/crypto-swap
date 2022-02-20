import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons'
import { AiOutlineDown } from 'react-icons'
import { HiOutlineDotsVertical } from 'react-icons'

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>Crypto Swap</div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'vote' && style.activeNavItem
            }`}
          >
            vote
          </div>
        </div>
        <div
          onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding}`}
        ></div>
        <div className={style.buttonIconContainer}>
          <div className={`${style.button} ${style.padding}`}>
            <div className={style.buttonIconContainer}></div>
            <p>Ethereum</p>
            <div className={style.buttonIconContainer}></div>
          </div>
        </div>
        <div onClick={() => connectWallet()}
        className={`${style.button} ${style.buttonPadding}`}>
            <div className={`${style.buttonAccent} ${style.buttonAccentPadding}`}>
                Connect wallet
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
