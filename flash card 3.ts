// script.js
const flashcards = [
    { question: "Who is the Chairman of the Rajya Sabha?", answer: "The Vice President of India" },
    { question: "What is the tenure of a Lok Sabha member?", answer: "5 years" },
    { question: "Who appoints the Chief Justice of India?", answer: "The President of India" },
    { question: "What is the minimum age to become the Prime Minister of India?", answer: "25 years" },
    { question: "Which part of the Indian Constitution deals with Fundamental Rights?", answer: "Part III" },
    { question: "Who is known as the Architect of the Indian Constitution?", answer: "Dr. B.R. Ambedkar" },
];

let currentIndex = 0;

// Corrected element selection
const flashcard = document.querySelector('.flashcard');
const front = document.querySelector('.flashcard .front');
const back = document.querySelector('.flashcard .back');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const counter = document.getElementById('counter');
const progressBar = document.getElementById('progress');

function updateFlashcard(index) {
    if (!flashcard || !front || !back) return; // Ensure elements exist

    const currentFlashcard = flashcards[index];
    front.textContent = currentFlashcard.question;
    back.textContent = currentFlashcard.answer;
    counter.textContent = `Flashcard ${index + 1} of ${flashcards.length}`;
    progressBar.style.width = `${((index + 1) / flashcards.length) * 100}%`;
}

// Add event listeners only if buttons exist
if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        updateFlashcard(currentIndex);
    });
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
        updateFlashcard(currentIndex);
    });
}

updateFlashcard(currentIndex);
