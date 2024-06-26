"use client"

import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import ProgressBar from '../../components/ui/ProgressBar';
import { ChevronLeft, X } from "lucide-react";
import ResultCard from "./ResultCard";


const questions = [
  {
    questionText : "What is React",
    answers: [
      {
        answerText: "A library",
        isCorrect: true,
        id: 1
      },
      {
        answerText: "A framewrk",
        isCorrect: false,
        id: 2
      },
      {
        answerText: "A good library",
        isCorrect: false,
        id: 3
      },
      {
        answerText: "A shjiot  library",
        isCorrect: false,
        id: 4
      },

    ]
  },
  {
    questionText : "What is React 2",
    answers: [
      {
        answerText: "A library",
        isCorrect: true,
        id: 1
      },
      {
        answerText: "A framewrk",
        isCorrect: false,
        id: 2
      },
      {
        answerText: "A good library",
        isCorrect: false,
        id: 3
      },
      {
        answerText: "A shjiot  library",
        isCorrect: false,
        id: 4
      },

    ]
  }
]

enum State {
  New,
  Correct,
  Wrong
}

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(-1)
  const [score, setScore] = useState(0)
  const [questionState, setQuestionState] = useState(State.New)

  const hasMoreQuestion = questionIndex < questions.length - 1
  const hasStarted = questionIndex > -1
  const currentQuestion = (!hasStarted ? null : questions[questionIndex])!

  const correctAnswer = useMemo(() => {
    if(!hasStarted) {
      return null
    }
    return questions[questionIndex].answers.find(a => a.isCorrect)
  }, [questionIndex])

  const handleNext = () => {
    if(questionIndex > questions.length - 1) {
      return
    }
    setQuestionState(State.New)
    setQuestionIndex(v => v + 1);
  }

  const handleAnswerClick = (isCorrect: boolean ) => {
    setQuestionState(isCorrect ? State.Correct : State.Wrong)
    if(isCorrect ) {
      
    }
  }

  const percentage = ((questionIndex + 1) / questions.length) * 100
  return (
    <div className="flex flex-col flex-1">
      <div className="sticky top-0 z-10 shadow-md py-4 w-full">
        <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2">
          <Button size="icon" variant="outline">
            <ChevronLeft/>
          </Button>
          <ProgressBar value={percentage} />
          <Button size="icon" variant="outline">
            <X/>
          </Button>
        </header>
      </div>
      <main className="flex justify-center flex-1">
       { !hasStarted  ? <h1 className="text-6xl font-bold">Hello World👋</h1>
        : (
          <div>
            <h2 className="text-6xl font-bold">
              {currentQuestion.questionText}
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {
                currentQuestion.answers.map(v => (
                  <Button key={v.id} onClick={() => handleAnswerClick(v.isCorrect)}>
                    {v.answerText}
                  </Button>
                ))
              }
            </div>
          </div>
        ) 
      }
      </main>
      <footer className="footer pb-9 px-6 relative mb-0">
        {
          questionState != State.New && 
          <ResultCard isCorrect={questionState == State.Correct} correctAnswer={correctAnswer?.answerText!} />
        }
        <Button onClick={handleNext} disabled={!hasMoreQuestion}>{hasStarted ? 'Next' : "Start"}</Button>
      </footer>
    </div>
  )
}
