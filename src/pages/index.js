import React, {useState} from 'react';
import RoadmapPhase from '@/components/RoadmapPhase'
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import {Link} from 'react-scroll';
import {logo} from '../../public/degen-logo.png'

const style = {
  page: `h-full w-full bg-[#293246ff] text-white`,
  nav: `sm:flex justify-between items-center justify-center p-8`,
  options: `grid grid-cols-1 px-3.5 md:px-0  sm:flex`,
  socials: ``,
  items: `text-lg font-base cursor-pointer hover:text-[#96BEDCff] sm:mx-2 md:mx-4`,
  logo: ``,
  heroContainer: `text-center mb-[20px] md:h-[250px]`,
  heroHeader: `text-4xl md:text-7xl font-bold mt-[100px] md:mt-[150px] bg-gradient-to-r from-[#28A0F0ff] via-[#96BEDCff] to-[white] p-1 text-transparent bg-clip-text`,
  heroText:`text-lg md:text-2xl`,
  buyNow: `bg-gradient-to-r from-[#28A0F0ff] via-[#96BEDCff] to-[white] text-[#293246ff] mt-10 px-8 py-4 rounded-full border-none hover:cursor-pointer`,
  roadmapContainer: `mt-12 text-center text-6xl font-bold w-full p-4`,
  roadmapList: `lg:flex lg:mx-[200px] lg:justify-between inline-block md:flex`,
  tokenomicsContainer: `mt-12 text-center text-6xl font-bold w-full p-4 md:mb-4`,
  sectionHeader: `mb-16`,
  token: `text-sm bg-[#293246ff] border-[#fff] border border text-[#fff] w-[50%] md:w-[40%] rounded-md p-12 md:text-xl lg:text-3xl inline-block mb-16 mt-8`,
  airdrop: `text-6xl font-bold text-center mb-[100px]`,
  airdropList: `list-disc text-left inline-block mb-8`,
  airdropItems: `text-xl mb-4 md:text-4xl px-4`,
  footer: `bg-[#1E2839ff] lg:flex items-center justify-between p-8 mt-4 text-sm pb-16 `,
  emailInput: `text-base p-4 rounded-l-lg outline-none mb-4 text-black`,
  emailButton: `bg-gray-200 text-[#293246ff] text-base p-4 rounded-r-lg`,
  footerLogo: `font-black italic md:mx-0 text-3xl pt-4 pb-4 md:pt-0 md:pb-0 border-black`,
  socialsFooter: `flex p-2 md:p-0 md:mr-4 mt-4`,
  imageChar: `flex relative items-center justify-center`,
  imageCharTwo: `flex relative items-center justify-center mb-20`,
  footerLogos: `md:flex lg:mx-12`

}

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitComplete, setSubmitComplete] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        email: email,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
    if (res.status === 201){
      setSubmitComplete(true)
    }
    setEmail('')
  }

  const phases = [
      {name:'Phase 1',
    items: [
      'Fair Token Launch $DEGN',
      'Website Launch',
      'Twitter',
      'Telegram',
      '$100k Market Cap',
      'Early prototype visuals',
      'Game Whitelist Signup',
      'CoinGecko & CoinMarketCap Listing'
    ]},
      {name:'Phase 2',items: [
      'BETA Test Demo & Participant Airdrop',
      'GODS NFT Launch purchased with $DEGN',
      'Major Marketing Campaign',
      '$1m Mcap minimum',
      'Exchange Listing',
      'Influencer Campaigns',
    ]},
       {name:'Phase 3',items: [
      'Full Game Launch',
      'Major Game Tournament',
      'Public NFT Mint (citizens)',
      'Second marketing campaign',
      'GODS NFT Owner council launch',
      'Rare game items release',
      'Phase 4 reveal!'
    ]}
  ]

  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className={style.page}>
    {/* {Nav} */}
       <div className={style.nav}>
       <Image className={style.logo} src='/degen-logo.png'
       height={150}
       width={300}
       />
        <div className={style.options}>
            <a className={style.items}>Whitepaper</a>
            <Link to="roadmap" smooth={true} offset={10} duration={500} className={style.items}>Roadmap</Link>
            <Link to="tokenomics" smooth={true} offset={10} duration={500} className={style.items}>Tokenomics</Link>
            <Link to="contact" smooth={true} offset={50} duration={500} className={style.items}>Contact</Link>
        </div>
    </div>
    {/* {Hero} */}
    <div className={style.heroContainer}>
       <h1 className={style.heroHeader}>Arbitrum AI Blockchain RPG</h1>
       <div className={style.heroText}>
         Decentralized community owned MMORPG
       </div>
       <button className={style.buyNow}>Buy Now</button>
    </div>
    {/* {Image} */}
    <div className={style.imageChar}>
    <Image src='/degen-pepe.png' height={400} width={400} alt='pepe degen warrior' />
    </div>
    {/* {roadmap} */}
    <div className={style.roadmapContainer}>
    <h1 id='roadmap' className={style.sectionHeader}>Roadmap</h1>
      <div className={style.roadmapList}>
        {phases.map((phase,index)=>(
          <RoadmapPhase
          key={index} 
          id={index}
          name={phase.name}
          items={phase.items}
          />
        ))}
      </div>
    </div>
    {/* {Tokenomics} */}
    <div className={style.tokenomicsContainer}>
    <h1 id='tokenomics' className={style.sectionHeader}>Tokenomics</h1>
       <div className={style.token}>
          <ul>
            <li>Total Supply: 100 Billion $DEGN</li>
            <li>2% Buy Tax</li>
            <li>2% Sell Tax</li>
            <li>5% Liquidity</li>
            <li>10% Marketing</li>
            <li>5% Airdrop</li>
          </ul>
       </div>
    </div>
    {/* {Image} */}
    <div className={style.imageCharTwo}>
    <Image src='/degen-chad.png' height={400} width={400} alt='pepe degen warrior' />
    </div>
    <div className={style.airdrop}>
       <h1 className={style.sectionHeader}>Airdrop</h1>
       <ul className={style.airdropList}>
       <li className={style.airdropItems}>Airdrop for all BETA Testers</li>
       <li className={style.airdropItems}>Already over 10,000 signups for upcoming BETA</li>
       <li className={style.airdropItems}>Token holders given priority</li>
       <li className={style.airdropItems}>Subscribe for a chance to be selected</li>
       </ul>
       <form onSubmit={subscribe}>
         <input value={email} onChange={(e)=>setEmail(e.target.value)} className={style.emailInput} type='email' placeholder='Sign up with your Email' />
         <button type='submit' name='email' id='email' className={style.emailButton}>Submit</button>
       </form>
       {submitComplete ? <p className='text-white text-sm'>Email Submitted Successfully</p> : null}
    </div>
    <div className={style.footer} id='contact'>
      {/* {Contact and company info} */}
      <div className='mb-8 md:mb-0'>
       <p>Degen Wars by Degen Labs Limited. {year}</p>
       <p>100 Place Street, London, SE1 2AA, UK, Company Number: 0000000</p>
       <p>Email: info@company.com</p>
      </div>
      <div className={style.footerLogos}>
        <Image src='/arbitrum-logo.png' height={100} width={100} alt='arbitrum logo' />
        <Image className='md:py-4' src='/degen-logo.png' height={50} width={300} alt='Degen Wars Logo' />
      </div>
      <div className={style.socialsFooter}>
      <a href="https://twitter.com/Degenwars_arb" target="_blank"><FontAwesomeIcon icon={faTwitter} className='h-8 mx-2 hover:cursor-pointer' /></a>
      <a href="https://t.me/+3gmcYs3zPQs2ODRk" target="_blank"><FontAwesomeIcon icon={faTelegram} className='h-8 mx-2 hover:cursor-pointer' /></a>
        </div>
    </div>
    </div>
  )
}
