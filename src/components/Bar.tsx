import clsx from 'clsx';
import React from 'react'

type Props = {
    percentage : number;
    color : string
}

const Bar = ({color, percentage}: Props) => {
    

    const barStyle = {
        height: `${percentage}%`
    }
    const barBgClasses : Record<string, string> = {
        'green' : 'bg-green-500',
        'red' : 'bg-red-500',
        "blue" : 'bg-blue-500'
    }
  return (
    <div className='h-40 flex items-end justify-end'>
        <div style={barStyle} className={clsx(barBgClasses[color], "w-14 rounded-xl border-2 border-black")}>

        </div>
    </div>
  )
}

export default Bar