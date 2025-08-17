"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { quizQuestions, products } from "@/lib/data"
import { getProductWhatsAppLink } from "@/lib/whatsapp"

export default function ChipQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [quizResult, setQuizResult] = useState<string | null>(null)

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      calculateResult()
    }
  }

  const calculateResult = () => {
    const counts: Record<string, number> = {}
    Object.values(answers).forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1
    })

    let bestMatch = ""
    let maxCount = 0
    for (const chipId in counts) {
      if (counts[chipId] > maxCount) {
        maxCount = counts[chipId]
        bestMatch = chipId
      }
    }
    setQuizResult(bestMatch || products[0].id) // Default to first product if no clear winner
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setQuizResult(null)
  }

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const selectedAnswer = answers[currentQuestionIndex]
  const resultProduct = quizResult ? products.find((p) => p.id === quizResult) : null

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
        Which Vitabowl Chip Fits Your Mood?
      </h2>
      <Card className="max-w-2xl mx-auto p-6 shadow-lg rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            {quizResult ? "Your Perfect Match!" : `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`}
          </CardTitle>
        </CardHeader>
        <CardContent className="py-6">
          {quizResult ? (
            <div className="text-center">
              {resultProduct && (
                <>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                    We recommend: {resultProduct.name}!
                  </h3>
                  <p className="text-gray-700 mb-6">{resultProduct.description}</p>
                  <Button
                    size="lg"
                    onClick={() => window.open(getProductWhatsAppLink(resultProduct), "_blank")}
                    className="py-3 text-lg"
                  >
                    Order My Chip
                  </Button>
                </>
              )}
              <Button variant="outline" onClick={resetQuiz} className="mt-4 bg-transparent">
                Retake Quiz
              </Button>
            </div>
          ) : (
            <>
              <p className="text-lg font-medium text-gray-800 mb-6 text-center">{currentQuestion.question}</p>
              <RadioGroup
                value={selectedAnswer}
                onValueChange={(value) => handleAnswerChange(currentQuestionIndex, value)}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {currentQuestion.options.map((option) => (
                  <Label
                    key={option.value}
                    htmlFor={`q${currentQuestionIndex}-${option.value}`}
                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors duration-200"
                  >
                    <RadioGroupItem
                      id={`q${currentQuestionIndex}-${option.value}`}
                      value={option.value}
                      className="sr-only"
                    />
                    <span className="text-base font-medium text-center">{option.text}</span>
                  </Label>
                ))}
              </RadioGroup>
            </>
          )}
        </CardContent>
        {!quizResult && (
          <CardFooter className="flex justify-center pt-6">
            <Button onClick={handleNextQuestion} disabled={!selectedAnswer}>
              {currentQuestionIndex === quizQuestions.length - 1 ? "See My Result" : "Next Question"}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
