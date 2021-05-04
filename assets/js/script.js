
var questions = [
  {
    question: "What is your favorite color?",
    answer:
      "Red Blue Green Orange Yellow Pink Purple Violet Turquoise Gold Lime Aqua Navy Coral Teal Brown White Black",
  },
  {
    question: "What is your birth date?",
    month:
      "January February March April May June July August September October November December",
    day:
      "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31",
  },
  {
    question: "Are you a dog or cat person?",
    answer: "Cat Dog",
  },
  {
    question: "What console do you mainly play games on?",
    answer: "XBox PC PlayStation",
  },
  {
    question: "Do you like pineapples on your pizza?",
    answer: "Yes No",
  },
];



$(".start").on("click", displayQuestions());