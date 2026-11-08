/* ==========================================================================
   Pharmacognosy II - Sheet 1 Practical Exam Logic
   Clean Engine - Questions are referenced from questions.js
   ========================================================================== */

let activeQuestionSet = [];
let currentRoundQuestions = [];
let currentIndex = 0;
let currentRound = 1;

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startQuizMode(mode) {
    if (mode === 'elements') {
        activeQuestionSet = elementsQuizData;
    } else if (mode === 'ts') {
        activeQuestionSet = tsQuizData;
    }

    currentRound = 1;
    prepareRound(activeQuestionSet);

    navigateToScreen('quiz-screen');
    updateQuizUI();
    loadQuestion();
}

function navigateToScreen(screenId, pushHistory = true) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    if (pushHistory) {
        history.pushState({ screen: screenId }, '', `#${screenId}`);
    }
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.screen === 'quiz-screen') {
        navigateToScreen('quiz-screen', false);
    } else {
        goHome(false);
    }
});

function goHome(pushHistory = true) {
    currentRoundQuestions = [];
    navigateToScreen('home-screen', pushHistory);
    document.getElementById('win-overlay').style.display = 'none';
}

function closeWinOverlay() {
    document.getElementById('win-overlay').style.display = 'none';
    goHome();
}

function prepareRound(questionsArray) {
    currentRoundQuestions = questionsArray.map(q => {
        let clonedQ = JSON.parse(JSON.stringify(q));
        const numOptions = clonedQ.opts.length;
        const baseIndices = Array.from({ length: numOptions }, (_, i) => i);

        clonedQ.shuffledIndices = shuffleArray(baseIndices);
        clonedQ.userAnswerIndex = null;
        return clonedQ;
    });
    currentIndex = 0;
}

function updateQuizUI() {
    document.getElementById('round-info').innerText = `Round (${currentRound})`;
    document.getElementById('prev-btn').innerText = "Prev";
}

function loadQuestion() {
    const qData = currentRoundQuestions[currentIndex];
    const total = currentRoundQuestions.length;

    // Counter & Smooth Progress
    document.getElementById('counter').innerText = `${currentIndex + 1} / ${total}`;
    setTimeout(() => {
        document.getElementById('bar').style.width = `${((currentIndex + 1) / total) * 100}%`;
    }, 40);

    // Question Text
    document.getElementById('q-txt').innerHTML = qData.q;

    // Image Element
    const imgEl = document.getElementById('q-img');
    if (qData.image) {
        imgEl.src = qData.image;
        imgEl.style.display = 'block';
    } else {
        imgEl.src = '';
        imgEl.style.display = 'none';
    }

    // Render Options
    const box = document.getElementById('opt-box');
    box.innerHTML = '';

    qData.shuffledIndices.forEach(originalIdx => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.innerHTML = qData.opts[originalIdx];

        if (qData.userAnswerIndex === null) {
            btn.onclick = () => selectOption(btn, originalIdx, qData);
        } else {
            btn.disabled = true;
            if (originalIdx === qData.correct) {
                btn.classList.add('correct');
            } else if (originalIdx === qData.userAnswerIndex) {
                btn.classList.add('wrong');
            }
        }
        box.appendChild(btn);
    });

    // Hint / Explanation Display
    const hintBox = document.getElementById('hint-box');
    if (qData.userAnswerIndex !== null && qData.hint) {
        hintBox.innerHTML = `
            <div class="quiz-hint-header">
                <span>💡</span>
                <span>Explanation</span>
            </div>
            <div class="quiz-hint-content">${qData.hint}</div>
        `;
        hintBox.style.display = 'block';
    } else {
        hintBox.style.display = 'none';
        hintBox.innerHTML = '';
    }

    // Navigation buttons state
    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = (qData.userAnswerIndex === null);

    nextBtn.innerText = (currentIndex === total - 1 && qData.userAnswerIndex !== null)
        ? "Finish Round"
        : "Next";
}

function selectOption(selectedBtn, originalIdx, qData) {
    qData.userAnswerIndex = originalIdx;
    loadQuestion();
}

function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function goNext() {
    if (currentIndex < currentRoundQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        evaluateRoundEnd();
    }
}

function evaluateRoundEnd() {
    let failedQuestions = currentRoundQuestions.filter(q => q.userAnswerIndex !== q.correct);

    if (failedQuestions.length > 0) {
        currentRound++;
        prepareRound(JSON.parse(JSON.stringify(failedQuestions)));
        document.getElementById('round-info').innerText = `Round (${currentRound}) - Reviewing Mistakes`;
        loadQuestion();
    } else {
        document.getElementById('win-overlay').style.display = 'flex';
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    }
}

// --------------------------------------------------------------------------
// Trigger Camouflage Click Effect
// --------------------------------------------------------------------------
function triggerCamouflageFlash() {
    const authorEl = document.querySelector('.author-name');
    if (!authorEl) return;
    authorEl.classList.remove('stealth-clicked');
    void authorEl.offsetWidth; // Reflow
    authorEl.classList.add('stealth-clicked');
    setTimeout(() => {
        authorEl.classList.remove('stealth-clicked');
    }, 1200);
}

window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ screen: 'home-screen' }, '', '');
});