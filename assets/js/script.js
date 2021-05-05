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

var YodaSayings = [
  "You're%all%about%what%is%next-%the%next%adventure%or%project.%",
  "If%tested,%you%will%stand%your%ground%with%grace%and%composure.%",
  "You%have%a%special%connection%to%nature.%It%feeds%your%soul.%",
  "Team%building%is%a%natural%skill%because%others%are%drawn%to%your%zest%for%life%and%even-keeled%positivity.%",
  "While%others%are%stalled%by%indecisiveness,%your%spontaneity%and%willingness%to%take%action%positions%you%several%steps%ahead%of%the%competition.%",
  "Witty%and%smart,%you%sparkle%socially%particularly%in%small%groups.%",
  "That%little%voice%inside%your%head%is%especially%chatty%and%clear.%",
  "Bursting%with%charisma,%you%are%like%a%people%magnet.%",
  "Flying%by%the%seat%of%your%pants%usually%works%out%well%for%you.%",
  "Others%trust%you%to%set%the%bar%for%appropriate%behavior%and%decorum.%",
  "You%have%a%knack%for%seeing%the%big%picture%and%understanding%multiple%points%of%view.%",
  "Recognizing%and%putting%the%needs%of%others%first%works%for%you.%",
  "You%have%a%keen%sense%of%fair%play%and%like%being%in%charge%of%keeping%order.%",
  "You%are%outgoing%and%usually%enjoy%being%the%life%of%the%party%and%center%of%attention.%",
  "You%endear%yourself%quickly%with%your%uncanny%ability%to%recall%names%and%tidbits%of%info%about%others.%",
  "You%do%things%slow%and%stead.%Do%it%right%or%not%at%all.%",
  "You%have%a%special%knack%for%finding%treasures%in%the%most%unexpected%places.%",
  "You%are%comfortable%projecting%an%air%of%mystery,%which%can%help%mask%moments%of%insecurity.%",
  "You%need%to%learn%to%trust%others%and%express%your%emotions%in%a%healthy%way.%",
  "You%tend%to%take%the%role%of%a%martyr%in%order%to%catch%attention.%",
  "You%need%to%learn%patience%and%to%keep%your%temper%in%check.%",
  "You%need%to%learn%to%not%be%so%stubborn.%Your%way%is%not%always%the%best.%",
  "Please%make%up%your%mind.%This%double%head%thing%gets%annoying.%",
  "When%you%see%a%glass%that%is%half%empty,%remember%that%it%is%also%half%full.%",
  "We%still%do%not%know%what%is%at%the%center%of%the%universe,%but%we%are%sure%that%you%are%not%it.%",
  "Please%take%a%chill%pill.%Sometimes%it%is%okay%to%play.%",
  "Forgive%and%forget.%That%grudge%is%just%going%to%give%you%wrinkles.%",
  "Yoda%is%the%only%one%who%should%be%green.%Stop%being%jealous.%",
  "Your%words%have%consequences.%Try%being%a%little%diplomatic%once%and%a%while. %",
  "Do%you%ever%tire%of%being%an%insufferable%know-it-all?%",
  "Your%hands%are%too%big!%Must%have%the%bulky%controller!%",
  "Your%delicate%touch%must%only%be%used%on%the%high%quality%gaming%systems.%",
  "Buttons!%Buttons!%Buttons!%My precious buttons!%",
  "Ignore%the%naysayers.%Pineapple%simply%tastes%good%and%is%healthy!%",
  "The%texture,%who%could%love%the%mess.%Stick%with%the%meat%and%cheese%like%an%American!%",
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
