
const flashcards = [
    { question: "Who is the Chairman of the Rajya Sabha?", answer: "The Vice President of India" },
    { question: "What is the tenure of a Lok Sabha member?", answer: "5 years" },
    { question: "Who appoints the Chief Justice of India?", answer: "The President of India" },
];

let currentIndex = 0;

const flashcard = document.querySelector(".flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const nextButton = document.getElementById("next");

function updateFlashcard(index) {
    const currentFlashcard = flashcards[index];
    front.textContent = currentFlashcard.question;
    back.textContent = currentFlashcard.answer;
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateFlashcard(currentIndex);
});

updateFlashcard(currentIndex);
