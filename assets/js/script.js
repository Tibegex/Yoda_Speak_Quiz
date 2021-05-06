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
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
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

var yodaSaying = [
  "You're%20all%20about%20what%20is%20next-%20the%20next%20adventure%20or%20project.%20",
  "If%20tested,%20you%20will%20stand%20your%20ground%20with%20grace%20and%20composure.%20",
  "You%20have%20a%20special%20connection%20to%20nature.%20It%20feeds%20your%20soul.%20",
  "Team%20building%20is%20a%20natural%20skill%20because%20others%20are%20drawn%20to%20your%20zest%20for%20life%20and%20even-keeled%20positivity.%20",
  "While%20others%20are%20stalled%20by%20indecisiveness,%20your%20spontaneity%20and%20willingness%20to%20take%20action%20positions%20you%20several%20steps%20ahead%20of%20the%20competition.%20",
  "Witty%20and%20smart,%20you%20sparkle%20socially%20particularly%20in%20small%20groups.%20",
  "That%20little%20voice%20inside%20your%20head%20is%20especially%20chatty%20and%20clear.%20",
  "Bursting%20with%20charisma,%20you%20are%20like%20a%20people%20magnet.%20",
  "Flying%20by%20the%20seat%20of%20your%20pants%20usually%20works%20out%20well%20for%20you.%20",
  "Others%20trust%20you%20to%20set%20the%20bar%20for%20appropriate%20behavior%20and%20decorum.%20",
  "You%20have%20a%20knack%20for%20seeing%20the%20big%20picture%20and%20understanding%20multiple%20points%20of%20view.%20",
  "Recognizing%20and%20putting%20the%20needs%20of%20others%20first%20works%20for%20you.%20",
  "You%20have%20a%20keen%20sense%20of%20fair%20play%20and%20like%20being%20in%20charge%20of%20keeping%20order.%20",
  "You%20are%20outgoing%20and%20usually%20enjoy%20being%20the%20life%20of%20the%20party%20and%20center%20of%20attention.%20",
  "You%20endear%20yourself%20quickly%20with%20your%20uncanny%20ability%20to%20recall%20names%20and%20tidbits%20of%20info%20about%20others.%20",
  "You%20do%20things%20slow%20and%20stead.%20Do%20it%20right%20or%20not%20at%20all.%20",
  "You%20have%20a%20special%20knack%20for%20finding%20treasures%20in%20the%20most%20unexpected%20places.%20",
  "You%20are%20comfortable%20projecting%20an%20air%20of%20mystery,%20which%20can%20help%20mask%20moments%20of%20insecurity.%20",
  "You%20need%20to%20learn%20to%20trust%20others%20and%20express%20your%20emotions%20in%20a%20healthy%20way.%20",
  "You%20tend%20to%20take%20the%20role%20of%20a%20martyr%20in%20order%20to%20catch%20attention.%20",
  "You%20need%20to%20learn%20patience%20and%20to%20keep%20your%20temper%20in%20check.%20",
  "You%20need%20to%20learn%20to%20not%20be%20so%20stubborn.%20Your%20way%20is%20not%20always%20the%20best.%20",
  "Please%20make%20up%20your%20mind.%20This%20double%20head%20thing%20gets%20annoying.%20",
  "When%20you%20see%20a%20glass%20that%20is%20half%20empty,%20remember%20that%20it%20is%20also%20half%20full.%20",
  "We%20still%20do%20not%20know%20what%20is%20at%20the%20center%20of%20the%20universe,%20but%20we%20are%20sure%20that%20you%20are%20not%20it.%20",
  "Please%20take%20a%20chill%20pill.%20Sometimes%20it%20is%20okay%20to%20play.%20",
  "Forgive%20and%20forget.%20That%20grudge%20is%20just%20going%20to%20give%20you%20wrinkles.%20",
  "Yoda%20is%20the%20only%20one%20who%20should%20be%20green.%20Stop%20being%20jealous.%20",
  "Your%20words%20have%20consequences.%20Try%20being%20a%20little%20diplomatic%20once%20and%20a%20while. %20",
  "Do%20you%20ever%20tire%20of%20being%20an%20insufferable%20know-it-all?%20",
  "Your%20hands%20are%20too%20big!%20Must%20have%20the%20bulky%20controller!%20",
  "Your%20delicate%20touch%20must%20only%20be%20used%20on%20the%20high%20quality%20gaming%20systems.%20",
  "Buttons!%20Buttons!%20Buttons!%20My%20precious%20buttons!%20",
  "Ignore%20the%20naysayers.%20Pineapple%20simply%20tastes%20good%20and%20is%20healthy!%20",
  "The%20texture,%20who%20could%20love%20the%20mess.%20Stick%20with%20the%20meat%20and%20cheese%20like%20an%20American!%20",
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
      localStorage.setItem(
        "answer" + questionCounter,
        JSON.stringify($(this).text())
      );
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
  var color;
  var answer0 = JSON.parse(localStorage.getItem("answer0"));
  if (answer0 === "Red") {
    color = yodaSaying[0];
  } else if (answer0 === "Blue") {
    color = yodaSaying[1];
  } else if (answer0 === "Green") {
    color = yodaSaying[2];
  } else if (answer0 === "Orange") {
    color = yodaSaying[3];
  } else if (answer0 === "Yellow") {
    color = yodaSaying[4];
  } else if (answer0 === "Pink") {
    color = yodaSaying[5];
  } else if (answer0 === "Purple") {
    color = yodaSaying[6];
  } else if (answer0 === "Violet") {
    color = yodaSaying[7];
  } else if (answer0 === "Turquoise") {
    color = yodaSaying[8];
  } else if (answer0 === "Gold") {
    color = yodaSaying[9];
  } else if (answer0 === "Lime") {
    color = yodaSaying[10];
  } else if (answer0 === "Aqua") {
    color = yodaSaying[11];
  } else if (answer0 === "Navy") {
    color = yodaSaying[12];
  } else if (answer0 === "Coral") {
    color = yodaSaying[13];
  } else if (answer0 === "Teal") {
    color = yodaSaying[14];
  } else if (answer0 === "Brown") {
    color = yodaSaying[15];
  } else if (answer0 === "White") {
    color = yodaSaying[16];
  } else if (answer0 === "Black") {
    color = yodaSaying[17];
  }

  var gamingConsole;
  var answer4 = JSON.parse(localStorage.getItem("answer4"));
  if (answer4 === "XBox") {
    gamingConsole = yodaSaying[30];
  } else if (answer4 === "PlayStation") {
    gamingConsole = yodaSaying[31];
  } else if (answer4 === "PC") {
    gamingConsole = yodaSaying[32];
  }
  var pineapple;
  var answer5 = JSON.parse(localStorage.getItem("answer5"));
  if (answer5 === "Yes") {
    pineapple = yodaSaying[33];
  } else if (answer5 === "No") {
    pineapple = yodaSaying[34];
  }
  var zodiac;
  var month = JSON.parse(localStorage.getItem("answer1"));
  var day = JSON.parse(localStorage.getItem("answer2"));

  if (month === "January" && day < 20) {
    zodiac = yodaSaying[29];
  } else if (month === "January" && day > 19) {
    zodiac = yodaSaying[18];
  } else if (month === "February" && day < 19) {
    zodiac = yodaSaying[18];
  } else if (month === "February" && day > 18) {
    zodiac = yodaSaying[19];
  } else if (month === "March" && day < 21) {
    zodiac = yodaSaying[19];
  } else if (month === "March" && day > 20) {
    zodiac = yodaSaying[20];
  } else if (month === "April" && day < 20) {
    zodiac = yodaSaying[20];
  } else if (month === "April" && day > 19) {
    zodiac = yodaSaying[21];
  } else if (month === "May" && day < 21) {
    zodiac = yodaSaying[21];
  } else if (month === "May" && day > 20) {
    zodiac = yodaSaying[22];
  } else if (month === "June" && day < 21) {
    zodiac = yodaSaying[22];
  } else if (month === "June" && day > 20) {
    zodiac = yodaSaying[23];
  } else if (month === "July" && day < 23) {
    zodiac = yodaSaying[23];
  } else if (month === "July" && day > 22) {
    zodiac = yodaSaying[24];
  } else if (month === "August" && day < 23) {
    zodiac = yodaSaying[24];
  } else if (month === "August" && day > 22) {
    zodiac = yodaSaying[25];
  } else if (month === "September" && day < 23) {
    zodiac = yodaSaying[25];
  } else if (month === "September" && day > 22) {
    zodiac = yodaSaying[26];
  } else if (month === "October" && day < 23) {
    zodiac = yodaSaying[26];
  } else if (month === "October" && day > 22) {
    zodiac = yodaSaying[27];
  } else if (month === "November" && day < 22) {
    zodiac = yodaSaying[27];
  } else if (month === "November" && day > 21) {
    zodiac = yodaSaying[28];
  } else if (month === "December" && day < 22) {
    zodiac = yodaSaying[28];
  } else if (month === "December" && day > 21) {
    zodiac = yodaSaying[29];
  }

  var yodaUrl = "https://";
  // "https://api.funtranslations.com/translate/yoda.json?text=";
  fetch(yodaUrl + color + gamingConsole + pineapple + zodiac)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var translation = data.contents.translated;
      $(".yoda").text(translation);
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
