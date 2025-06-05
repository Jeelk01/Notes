const readline = require('readline');

const QUIZ_QUESTIONS = [
  {
    question: "What's the capital of France?",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
    answer: 3
  },
  {
    question: "Who originally created JavaScript?",
    options: ["Tim Berners-Lee", "Brendan Eich", "James Gosling", "Dennis Ritchie"],
    answer: 2
  },
  {
    question: "Pick the method used to read a file in Node.js:",
    options: ["fs.read()", "fs.readFile()", "fs.getFile()", "fs.openFile()"],
    answer: 2
  },
  {
    question: "Do you know which company maintains Node.js?",
    options: ["Microsoft", "Facebook", "Google", "OpenJS Foundation"],
    answer: 4
  },
  {
    question: "Choose the correct way to comment a line in JavaScript:",
    options: ["<!-- -->", "#", "//", "**"],
    answer: 3
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(prompt) {
  return new Promise(resolve => rl.question(prompt, resolve));
}

async function startQuiz() {
  console.log("Welcome The Quiz.");

  const userReady = await ask("Would you like to begin? (Y/N): ");

  if (userReady.trim().toUpperCase() !== 'Y') {
    console.log("\nNo worries. Maybe another time.");
    rl.close();
    return;
  }

  console.clear();
  console.log("Before we begin:");
  console.log("- You'll go through each prompt one at a time.");
  console.log("- No rush. Just pick your answer.");
  console.log("- We'll show how you did at the end.\n");

  let score = 0;

  for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
    const q = QUIZ_QUESTIONS[i];

    console.log(`${q.question}`);
    q.options.forEach((opt, idx) => {
      console.log(`  ${idx + 1}) ${opt}`);
    });

    const input = await ask("Your pick (1-4): ");
    const userAns = parseInt(input);

    if (userAns === q.answer) {
      console.log("Got it.");
      score++;
    } else {
      console.log(`Hmm, not quite. It was: ${q.options[q.answer - 1]}`);
    }
  }

  console.log("That's it.");
  console.log(`You got ${score} out of ${QUIZ_QUESTIONS.length} right.`);

  if (score === QUIZ_QUESTIONS.length) {
    console.log("Nice work — full marks.");
  } else if (score >= 3) {
    console.log("Not bad at all.");
  } else {
    console.log("Keep learning — you'll get there.");
  }

  rl.close();
}

startQuiz();
