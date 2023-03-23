import React from 'react'

const style={
    phaseContainer: `bg-[#293246ff] border-[#fff] border w-[250px] text-[#fff] p-8 rounded-md md:mx-4 mb-10`,
    header: `text-base mb-4 text-xl`,
    listItems: `text-sm list-disc text-left font-medium text-lg`
}

const RoadmapPhase = (props) => {
  return (
    <div className={style.phaseContainer}>
          <h1 className={style.header}>{props.name}</h1>
          <ul className={style.listItems}>
           {props.items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
          </ul>
    </div>
  )
}

export default RoadmapPhase
