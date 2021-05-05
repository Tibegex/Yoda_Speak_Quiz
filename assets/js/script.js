var questions = [
  {
    question: "What is your favorite color?",
    answer: [
      "Red",
      "Blue",
      "Green",
      "Orange",
      "Yellow",
      "Pink",
      "Purple",
      "Violet",
      "Turquoise",
      "Gold",
      "Lime",
      "Aqua",
      "Navy",
      "Coral",
      "Teal",
      "Brown",
      "White",
      "Black",
    ],
  },
  {
    question: "What month were you born?",
    answer: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  {
    question: "And what day?",
    answer: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
  },
  {
    question: "Are you a dog or cat person?",
    answer: ["Cat", "Dog"],
  },
  {
    question: "What console do you mainly play games on?",
    answer: ["XBox", "PC", "PlayStation"],
  },
  {
    question: "Do you like pineapples on your pizza?",
    answer: ["Yes", "No"],
  },
];

var questionH3 = $(".question");
var questionCounter = 0;

$(".start").on("click", displayQuestions);

function displayQuestions() {
  if (questionCounter < questions.length) {
    questionH3.text(questions[questionCounter].question);

    for (i = 0; i < questions[questionCounter].answer.length; i++) {
      var quiz = $(".quiz");
      var button = $("<button>").addClass("submit");
      button.text(questions[questionCounter].answer[i]);
      quiz.append(button);
    }

    $(".submit").on("click", function () {
      localStorage.setItem("answer" + questionCounter, $(this).text());
      questionCounter++;
      $(".submit").remove();
      displayQuestions();
    });
  } else {
    displayYoda();
  }
}
// FUNCTION FOR DISPLAYING THE YODA PHRASE
function displayYoda() {
  questionH3.text("Yoda says");
  //add sayings based off variables in if else statements
  var yodaUrl =
    // "https://api.funtranslations.com/translate/yoda.json?text=";
    fetch(yodaUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
}

// FUNCTION FOR DOG API
function getDogApi() {
  var dogUrl = "https://dog.ceo/api/breeds/image/random";

  fetch(dogUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getDogApi();

// FUNCTION FOR CAT API

function getCatApi() {
  var catUrl = "https://cataas.com/cat?json=true";

  fetch(catUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getCatApi();
