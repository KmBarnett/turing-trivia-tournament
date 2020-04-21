export const dataStore = {
  questions: [
    {
      category: "Entertainment: Film",
      type: "boolean",
      difficulty: "easy",
      question: "The film &quot;2001: A Space Odyssey&quot; was released on December 31st, 2000.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    }, {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?",
      correct_answer: "Chile",
      incorrect_answers: ["Peru", "Brazil", "Argentina"]
    }
  ],
  user: {
    name: 'Alen Turing',
    cohort: 1911,
    program: 'BE'
  },
  categories: [
    {
      id: 1,
      name: 'All'
    }, {
      id: 2,
      name: 'test'
    }
  ],
  scoresData: [
    {
      score: 12000,
      name: "kyle barnett",
      cohort: "1911BE",
      time: 6,
      correctAnswers: "2/10"
    },
    {
      score: 12000,
      name: "kyle barnett",
      cohort: "1911BE",
      time: 6,
      correctAnswers: "2/10"
    },
    {
      score: 12000,
      name: "kyle barnett",
      cohort: "1911BE",
      time: 6,
      correctAnswers: "2/10"
    },
  ]
}
