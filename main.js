let activeQuestionSet = [];
let currentRoundQuestions = [];
let currentIndex = 0;
let currentRound = 1;
let isEssayMode = false;

// دالة خلط المصفوفات عشوائياً
function shuffleArray(array) {
    if (!array || !Array.isArray(array)) return [];
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// بدء الكويز بأسئلة عشوائية
function startQuizMode(mode) {
    let rawSet = (mode === 'elements') ? elementsQuizData : tsQuizData;
    if (!rawSet || rawSet.length === 0) {
        alert("No questions found!");
        return;
    }

    // خلط ترتيب الأسئلة بالكامل عشوائياً عند البداية
    activeQuestionSet = shuffleArray(rawSet);

    currentRound = 1;
    prepareRound(activeQuestionSet);

    navigateToScreen('quiz-screen');
    updateQuizUI();
    loadQuestion();
}

function navigateToScreen(screenId, pushHistory = true) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');

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
    const winOverlay = document.getElementById('win-overlay');
    if (winOverlay) winOverlay.style.display = 'none';
}

function closeWinOverlay() {
    const winOverlay = document.getElementById('win-overlay');
    if (winOverlay) winOverlay.style.display = 'none';
    goHome();
}

function prepareRound(questionsArray) {
    currentRoundQuestions = questionsArray.map(q => {
        let clonedQ = JSON.parse(JSON.stringify(q));
        const numOptions = clonedQ.opts ? clonedQ.opts.length : 0;
        const baseIndices = Array.from({ length: numOptions }, (_, i) => i);

        clonedQ.shuffledIndices = shuffleArray(baseIndices);
        clonedQ.userAnswerIndex = null;
        return clonedQ;
    });
    currentIndex = 0;
}

// تبديل وضع الأسئلة المقالية (الستارة)
function toggleStudyMode() {
    isEssayMode = !isEssayMode;
    const modeBadge = document.getElementById('mode-badge');
    const modeBtn = document.getElementById('study-mode-toggle');

    if (modeBadge) {
        modeBadge.innerText = isEssayMode ? "Curtain / Essay Mode" : "MCQ Mode";
        modeBadge.style.background = isEssayMode ? "#E6F9D5" : "#F0F0F0";
        modeBadge.style.color = isEssayMode ? "#46A302" : "#666";
    }

    if (modeBtn) {
        modeBtn.style.color = isEssayMode ? "#58CC02" : "#777";
        modeBtn.style.borderColor = isEssayMode ? "#58CC02" : "var(--border-color)";
    }

    loadQuestion();
}

function updateQuizUI() {
    const roundInfo = document.getElementById('round-info');
    if (roundInfo) roundInfo.innerText = `Round ${currentRound}`;
}

// دالة تحميل السؤال بأمان تام (Safe Rendering)
function loadQuestion() {
    if (!currentRoundQuestions || currentRoundQuestions.length === 0) return;

    const qData = currentRoundQuestions[currentIndex];
    const total = currentRoundQuestions.length;

    // 1. شريط التقدم والعداد
    const counterEl = document.getElementById('counter');
    if (counterEl) counterEl.innerText = `${currentIndex + 1} / ${total}`;

    const barEl = document.getElementById('bar');
    if (barEl) {
        setTimeout(() => {
            barEl.style.width = `${((currentIndex + 1) / total) * 100}%`;
        }, 40);
    }

    // 2. نص السؤال
    const qTxtEl = document.getElementById('q-txt');
    if (qTxtEl) qTxtEl.innerHTML = qData.q;

    // 3. معالجة آمنة للصورة واللودر (حتى لو لم تكن الحاوية موجودة)
    const imgWrapper = document.getElementById('q-img-wrapper');
    const imgEl = document.getElementById('q-img');
    const loaderEl = document.getElementById('img-loader');

    if (qData.image) {
        if (imgWrapper) imgWrapper.style.display = 'flex';
        if (loaderEl) loaderEl.style.display = 'flex';

        if (imgEl) {
            imgEl.classList.remove('loaded');
            imgEl.style.display = 'none';

            // آلية الـ Preload لحل مشكلة النت البطيء
            const preloader = new Image();
            preloader.src = qData.image;
            preloader.onload = () => {
                imgEl.src = qData.image;
                imgEl.style.display = 'block';
                if (loaderEl) loaderEl.style.display = 'none';
                setTimeout(() => imgEl.classList.add('loaded'), 20);
            };
            preloader.onerror = () => {
                if (loaderEl) loaderEl.innerHTML = "<span>Image unavailable</span>";
            };
        }
    } else {
        if (imgWrapper) imgWrapper.style.display = 'none';
        if (imgEl) {
            imgEl.src = '';
            imgEl.style.display = 'none';
        }
        if (loaderEl) loaderEl.style.display = 'none';
    }

    // 4. خيارات الإجابة والستارة
    const optBox = document.getElementById('opt-box');
    const curtainBox = document.getElementById('essay-curtain');
    const hintBox = document.getElementById('hint-box');
    const hintContent = document.getElementById('hint-content');

    if (isEssayMode && curtainBox) {
        if (optBox) optBox.style.display = 'none';
        if (hintBox) hintBox.style.display = 'none';
        curtainBox.style.display = 'block';

        // إعادة ضبط الستارة كـ مقفولة
        const curtainSheet = document.getElementById('curtain-sheet');
        const curtainContent = document.getElementById('curtain-content');
        if (curtainSheet) curtainSheet.style.display = 'flex';
        if (curtainContent) curtainContent.style.display = 'none';

        const ansTextEl = document.getElementById('essay-ans-text');
        const explTextEl = document.getElementById('essay-expl-text');
        if (ansTextEl) ansTextEl.innerText = qData.opts[qData.correct];
        if (explTextEl) explTextEl.innerText = qData.hint || '';
    } else {
        if (curtainBox) curtainBox.style.display = 'none';
        if (optBox) {
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
        }

        // عرض التلميح في وضع الاختيارات إذا أجاب المستخدم
        if (qData.userAnswerIndex !== null && qData.hint && hintBox) {
            if (hintContent) hintContent.innerHTML = qData.hint;
            hintBox.style.display = 'block';
        } else if (hintBox) {
            hintBox.style.display = 'none';
        }
    }

    // 5. أزرار الفوتر (Next و Prev)
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const nextLabel = document.getElementById('next-label');

    if (prevBtn) prevBtn.disabled = (currentIndex === 0);

    if (nextBtn) {
        if (isEssayMode) {
            nextBtn.disabled = false; // حرية التنقل في الوضع المقالي
            if (nextLabel) nextLabel.innerText = (currentIndex === total - 1) ? "Finish" : "Next";
        } else {
            nextBtn.disabled = (qData.userAnswerIndex === null);
            if (nextLabel) {
                nextLabel.innerText = (currentIndex === total - 1 && qData.userAnswerIndex !== null)
                    ? "Finish Round"
                    : "Next";
            }
        }
    }
}

// دالة فتح الستارة
function revealCurtain() {
    const curtainSheet = document.getElementById('curtain-sheet');
    const curtainContent = document.getElementById('curtain-content');
    if (curtainSheet) curtainSheet.style.display = 'none';
    if (curtainContent) curtainContent.style.display = 'block';
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
    const winMsg = document.getElementById('win-msg');
    const winOverlay = document.getElementById('win-overlay');

    if (isEssayMode) {
        if (winMsg) winMsg.innerText = "You've reviewed all flashcards in this section!";
        if (winOverlay) winOverlay.style.display = 'flex';
        confettiEffect();
        return;
    }

    let failedQuestions = currentRoundQuestions.filter(q => q.userAnswerIndex !== q.correct);

    if (failedQuestions.length > 0) {
        currentRound++;
        prepareRound(JSON.parse(JSON.stringify(failedQuestions)));
        const roundInfo = document.getElementById('round-info');
        if (roundInfo) {
            roundInfo.innerText = `Round ${currentRound} (Retesting ${failedQuestions.length} Mistake${failedQuestions.length > 1 ? 's' : ''})`;
        }
        loadQuestion();
    } else {
        if (winMsg) winMsg.innerText = "All questions completed with 100% accuracy!";
        if (winOverlay) winOverlay.style.display = 'flex';
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