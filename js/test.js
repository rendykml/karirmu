const questions = [
  {
    //1
    question:
      "Saya tertarik mencoba kegiatan yang melibatkan praktik langsung dibanding hanya teori. ",
  },
  {
    //2
    question:
      "Saya tertarik memahami alasan atau penyebab dari suatu kejadian.",
  },
  {
    //3
    question:
      "Saya tertarik mengikuti kegiatan yang berhubungan dengan seni atau kreativitas.",
  },
  {
    //4
    question:
      "Saya merasa senang ketika dapat membantu teman yang sedang mengalami kesulitan.",
  },
  {
    //5
    question:
      "Saat kerja kelompok, saya tertarik menjadi orang yang mengatur jalannya diskusi atau kegiatan.",
  },
  {
    //6
    question:
      "Saya merasa nyaman mengerjakan tugas yang berkaitan dengan pencatatan atau pengelolaan data.",
  },
];

let currentQuestion = 0;
const answers = [];

const container = document.getElementById("question-container");
const prevBtn = document.getElementById("prevBtn");
const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");

function renderQuestion() {
  const item = questions[currentQuestion];

  const percent = Math.round(((currentQuestion + 1) / questions.length) * 100);

  progressText.innerText = `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;

  progressPercent.innerText = `${percent}%`;

  progressBar.style.width = `${percent}%`;

  container.innerHTML = `

<div
  class="w-full max-w-3xl bg-surface-container-lowest rounded-xl p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex flex-col gap-lg items-center text-center transition-all duration-500"
>

  <div class="flex flex-col gap-md">

    <span
      class="material-symbols-outlined text-primary text-[48px]"
      data-icon="psychology"
    >
      psychology
    </span>

    <h1 class="font-h2 text-h2 text-on-surface leading-tight px-md">
      ${item.question}
    </h1>

  </div>

  <!-- Response Scale -->
  <div class="w-full max-w-xl py-md">

    <div class="flex justify-between items-start gap-xs md:gap-md">

      ${generateOption(1, "Sangat Tidak Senang")}
      ${generateOption(2, "Tidak Senang")}
      ${generateOption(3, "Senang")}
      ${generateOption(4, "Sangat Senang")}

    </div>

  </div>

</div>

`;

  addOptionListener();
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

      answers.push({
        question: questions[currentQuestion].question,
        answer: selectedValue,
      });

      // Disable semua tombol setelah pilih
      buttons.forEach((btn) => {
        btn.disabled = true;
      });

      // Animasi tombol dipilih
      container.classList.add("question-enter");
      button.classList.add("active");
      button.classList.remove("bg-gray-50");
      button
        .querySelector("div")
        .classList.remove("border-gray-300", "text-gray-700");

      button.querySelector("div").classList.add("border-white", "text-white");
      button.querySelector("span").classList.remove("text-gray-600");
      button.querySelector("span").classList.add("text-white");

      // Efek fade sebelum next
      container.classList.add("opacity-70", "scale-[0.98]");

      // Delay pindah soal
      setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
          container.classList.remove("opacity-70", "scale-[0.98]");
          renderQuestion();
        } else {
          showResult();
        }
      }, 800);
    });
  });
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (currentQuestion > 0) {
    currentQuestion--;

    // Hapus jawaban terakhir
    answers.pop();

    renderQuestion();
  }
});

function showResult() {
  container.classList.remove("opacity-70", "scale-[0.98]");
  container.innerHTML = `

    

      <h1 class="text-4xl font-bold text-gray-800">
        Survey Selesai!
      </h1>

      <p class="text-gray-500 text-lg">
        Terima kasih telah mengisi survey.
      </p>

     

    </div>

  `;

  progressText.innerText = "Selesai";
  progressPercent.innerText = "100%";
  progressBar.style.width = "100%";
}

renderQuestion();
