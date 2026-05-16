let currentQuestion = 0;
const scores = {
  realistic: 0,
  investigative: 0,
  artistic: 0,
  social: 0,
  enterprising: 0,
  conventional: 0,
};

const answers = [];

const container = document.getElementById("question-container");
const prevBtn = document.getElementById("prevBtn");

const progressText = document.getElementById("progress-text");

const progressPercent = document.getElementById("progress-percent");

const progressBar = document.getElementById("progress-bar");

function renderQuestion() {
  const item = sections[currentQuestion];

  const percent = Math.round(((currentQuestion + 1) / sections.length) * 100);

  progressText.innerText = `Pertanyaan ${currentQuestion + 1} dari ${sections.length}`;

  progressPercent.innerText = `${percent}%`;

  progressBar.style.width = `${percent}%`;

  container.innerHTML = `

    <div
      class="w-full max-w-3xl bg-surface-container-lowest rounded-xl p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex flex-col gap-lg items-center transition-all duration-500"
    >

      <div class="flex flex-col gap-md">

        <span
          class="material-symbols-outlined text-primary text-center text-[48px]"
        >
          psychology
        </span>

        <h1 class="font-h2 text-h2 text-on-surface leading-tight px-md">
          ${item.question}
        </h1>

      </div>

      <div class="w-full max-w-xl py-md">

        <div
          class="flex justify-between items-start gap-xs md:gap-md"
        >

          ${generateOption(1, "Sangat Tidak Senang")}
          ${generateOption(2, "Tidak Senang")}
          ${generateOption(3, "Senang")}
          ${generateOption(4, "Sangat Senang")}

        </div>

      </div>

    </div>

  `;

  addOptionListener();

  prevBtn.disabled = currentQuestion === 0;
}

function generateOption(value, label) {
  return `

    <button
      data-value="${value}"
      class="answer-btn scale-option flex flex-col items-center gap-sm group transition-all w-full"
    >

      <div
        class="scale-circle w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-outline flex items-center justify-center font-h3 text-on-surface transition-all"
      >
        ${value}
      </div>

      <span
        class="text-caption font-label-bold text-on-surface-variant opacity-60 group-hover:opacity-100"
      >
        ${label}
      </span>

    </button>

  `;
}

function addOptionListener() {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedValue = button.dataset.value;

      const item = sections[currentQuestion];

      answers.push({
        question: item.question,
        type: item.type,
        answer: Number(selectedValue),
      });

      // tambah score
      scores[item.type] += Number(selectedValue);

      // disable button
      buttons.forEach((btn) => {
        btn.disabled = true;
      });

      // active state
      button.classList.add("active");

      // transition
      container.classList.add("opacity-70", "scale-[0.98]");

      setTimeout(() => {
        container.classList.remove("opacity-70", "scale-[0.98]");

        currentQuestion++;

        if (currentQuestion < sections.length) {
          renderQuestion();
          console.log("Answers:", answers);
          console.log("Scores:", scores);
        } else {
          showResult();
        }
      }, 500);
    });
  });
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;

    answers.pop();

    renderQuestion();
  }
});

function getTopResults() {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

function showResult() {
  console.log("Answers:", answers);
  console.log("Scores:", scores);
  const topResults = getTopResults();

  const top1 = topResults[0];
  const top2 = topResults[1];
  const top3 = topResults[2];
  container.innerHTML = `

<div
  class="w-full max-w-3xl bg-surface-container-lowest rounded-xl p-xl text-center flex flex-col gap-lg items-center"
>

  <span
    class="material-symbols-outlined text-primary text-[72px]"
  >
    psychology
  </span>

  <h1 class="font-h1 text-h1 text-on-surface">
    Hasil Talent Test
  </h1>

  <p class="text-on-surface-variant font-body-lg">
    Berikut 3 potensi tertinggi Anda:
  </p>

  <div class="flex flex-col gap-md w-full">

    <div class="p-lg rounded-xl bg-primary-container text-white">
      <h2 class="text-2xl font-bold">
        #1 ${top1[0]}
      </h2>

      <p>
        Score: ${top1[1]}
      </p>
    </div>

    <div class="p-lg rounded-xl bg-surface-container-high">
      <h2 class="text-xl font-bold">
        #2 ${top2[0]}
      </h2>

      <p>
        Score: ${top2[1]}
      </p>
    </div>

    <div class="p-lg rounded-xl bg-surface-container-high">
      <h2 class="text-xl font-bold">
        #3 ${top3[0]}
      </h2>

      <p>
        Score: ${top3[1]}
      </p>
    </div>

  </div>

</div>

`;

  progressText.innerText = "Selesai";

  progressPercent.innerText = "100%";

  progressBar.style.width = "100%";
}

renderQuestion();
