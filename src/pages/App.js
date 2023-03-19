import React from 'react'

const style = {
    nav: `md:flex justify-between md:h-[100px] md:items-center md:px-8`,
    options: `md:flex md:gap-between`,
    socials: `mt-4 flex`,
    items: `mx-4 text-lg font-bold`,
    logo: `font-bold italic m-4 text-3xl`
}

const App = () => {
  return (
    <div className={style.nav}>
        <h1 className={style.logo}>Degen Wars</h1>
        <div className={style.options}>
            <p className={style.items}>Whitepaper</p>
            <p className={style.items}>Roadmap</p>
            <p className={style.items}>Contact</p>
        </div>
        <div className={style.socials}>
            <p className={style.items}>Telegram</p>
            <p className={style.items}>Twitter</p>
        </div>
    </div>
  )
}

export default App