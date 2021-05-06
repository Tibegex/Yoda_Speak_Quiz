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
