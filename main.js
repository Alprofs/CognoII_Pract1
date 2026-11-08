let activeQuestionSet = [];
let currentRoundQuestions = [];
let currentIndex = 0;
let currentRound = 1;
let isEssayMode = false;
let isCurtainRevealed = false;

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

function toggleStudyMode() {
    isEssayMode = !isEssayMode;
    const modeBadge = document.getElementById('mode-badge');
    const modeBtn = document.getElementById('study-mode-toggle');

    if (isEssayMode) {
        modeBadge.innerText = "Curtain / Essay Mode";
        modeBadge.style.background = "#E6F9D5";
        modeBadge.style.color = "#46A302";
        modeBtn.style.color = "#58CC02";
        modeBtn.style.borderColor = "#58CC02";
    } else {
        modeBadge.innerText = "MCQ Mode";
        modeBadge.style.background = "#F0F0F0";
        modeBadge.style.color = "#666";
        modeBtn.style.color = "#777";
        modeBtn.style.borderColor = "var(--border-color)";
    }
    loadQuestion();
}

function updateQuizUI() {
    document.getElementById('round-info').innerText = `Round ${currentRound}`;
}

function loadQuestion() {
    const qData = currentRoundQuestions[currentIndex];
    const total = currentRoundQuestions.length;

    document.getElementById('counter').innerText = `${currentIndex + 1} / ${total}`;
    setTimeout(() => {
        document.getElementById('bar').style.width = `${((currentIndex + 1) / total) * 100}%`;
    }, 40);

    document.getElementById('q-txt').innerHTML = qData.q;

    // --- Image Handling with Skeleton Loader ---
    const imgWrapper = document.getElementById('q-img-wrapper');
    const imgEl = document.getElementById('q-img');
    const loaderEl = document.getElementById('img-loader');

    if (qData.image) {
        imgWrapper.style.display = 'flex';
        imgEl.classList.remove('loaded');
        imgEl.style.display = 'none';
        loaderEl.style.display = 'flex';

        // Preload new image to eliminate slow-network freezing or old-image ghosting
        const preloader = new Image();
        preloader.src = qData.image;
        preloader.onload = () => {
            imgEl.src = qData.image;
            imgEl.style.display = 'block';
            loaderEl.style.display = 'none';
            setTimeout(() => imgEl.classList.add('loaded'), 20);
        };
        preloader.onerror = () => {
            loaderEl.innerHTML = "<span>Image unavailable</span>";
        };
    } else {
        imgWrapper.style.display = 'none';
        imgEl.src = '';
    }

    // --- Mode Separation: Essay / Curtain vs MCQ ---
    const optBox = document.getElementById('opt-box');
    const curtainBox = document.getElementById('essay-curtain');
    const hintBox = document.getElementById('hint-box');

    if (isEssayMode) {
        optBox.style.display = 'none';
        hintBox.style.display = 'none';
        curtainBox.style.display = 'block';

        // Reset curtain
        isCurtainRevealed = false;
        document.getElementById('curtain-sheet').style.display = 'flex';
        document.getElementById('curtain-content').style.display = 'none';

        document.getElementById('essay-ans-text').innerText = qData.opts[qData.correct];
        document.getElementById('essay-expl-text').innerText = qData.hint || '';
    } else {
        curtainBox.style.display = 'none';
        optBox.style.display = 'grid';
        optBox.innerHTML = '';

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
            optBox.appendChild(btn);
        });

        if (qData.userAnswerIndex !== null && qData.hint) {
            document.getElementById('hint-content').innerHTML = qData.hint;
            hintBox.style.display = 'block';
        } else {
            hintBox.style.display = 'none';
        }
    }

    // Footer Navigation Controls
    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    const nextBtn = document.getElementById('next-btn');

    if (isEssayMode) {
        nextBtn.disabled = false; // Free navigation allowed in Essay mode
        document.getElementById('next-label').innerText = (currentIndex === total - 1) ? "Finish" : "Next";
    } else {
        nextBtn.disabled = (qData.userAnswerIndex === null);
        document.getElementById('next-label').innerText = (currentIndex === total - 1 && qData.userAnswerIndex !== null)
            ? "Finish Round"
            : "Next";
    }
}

function revealCurtain() {
    isCurtainRevealed = true;
    document.getElementById('curtain-sheet').style.display = 'none';
    document.getElementById('curtain-content').style.display = 'block';
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
    if (isEssayMode) {
        document.getElementById('win-msg').innerText = "You've reviewed all flashcards in this section!";
        document.getElementById('win-overlay').style.display = 'flex';
        confettiEffect();
        return;
    }

    let failedQuestions = currentRoundQuestions.filter(q => q.userAnswerIndex !== q.correct);

    if (failedQuestions.length > 0) {
        currentRound++;
        prepareRound(JSON.parse(JSON.stringify(failedQuestions)));
        document.getElementById('round-info').innerText = `Round ${currentRound} (Retesting ${failedQuestions.length} Mistake${failedQuestions.length > 1 ? 's' : ''})`;
        loadQuestion();
    } else {
        document.getElementById('win-msg').innerText = "All questions completed with 100% accuracy!";
        document.getElementById('win-overlay').style.display = 'flex';
        confettiEffect();
    }
}

function confettiEffect() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 180,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
}

function triggerCamouflageFlash() {
    const el = document.querySelector('.author-name');
    if (!el) return;
    el.classList.remove('flash-triggered');
    void el.offsetWidth;
    el.classList.add('flash-triggered');
}

window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ screen: 'home-screen' }, '', '');
});