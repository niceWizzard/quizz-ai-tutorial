import { cn } from '@/lib/utils'
import clsx from 'clsx'
import React from 'react'

type Props = {
    isCorrect : boolean,
    correctAnswer : string
}

const ResultCard = ({isCorrect, correctAnswer}: Props) => {
    const text = isCorrect ? 'Correct' : 'Incorrect! The correct answer is ' + correctAnswer

    // const borderClasses = isCorrect ? "border border-green-500" : "border border-red-500";
    const borderClasses = clsx({
        "border-green-500": isCorrect,
        "border-red-500": !isCorrect,
    })

  return (
    <div className={cn(
        borderClasses,
        "border-2",
        "rounded-lg p-4 text-center text-lg font-semibold my-4 bg-secondary",
    )}>{text}</div>
  )
}

export default ResultCard