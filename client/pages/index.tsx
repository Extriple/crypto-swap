import type { NextPage } from 'next'
import { Main } from 'next/document'
import Header from '../components/Header'
import SwapMenu from '../components/SwapMenu'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header/>
      <SwapMenu/>
      <h2>Transaction history</h2>
    </div>
  )
}

export default Home
