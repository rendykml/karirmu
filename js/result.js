const scores = JSON.parse(localStorage.getItem("finalScores")) || {};

const labels = {
  realistic: "Praktikal",
  investigative: "Logika",
  artistic: "Kreativitas",
  social: "Empati",
  enterprising: "Leadership",
  conventional: "Terstruktur",
};

const descriptions = {
  realistic: "Anda unggul dalam aktivitas praktikal dan teknis.",

  investigative: "Anda memiliki kemampuan analisis dan logika yang kuat.",

  artistic: "Anda memiliki kreativitas dan imajinasi tinggi.",

  social: "Anda memiliki empati dan kemampuan interpersonal yang baik.",

  enterprising: "Anda memiliki jiwa leadership dan komunikasi yang kuat.",

  conventional: "Anda unggul dalam keteraturan dan ketelitian.",
};

const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

const topContainer = document.getElementById("topTalentContainer");

const top1 = sortedScores[0];
const top2 = sortedScores[1];
const top3 = sortedScores[2];

const maxScore = 60;

[top1, top2, top3].forEach((item) => {
  const percent = Math.round((item[1] / maxScore) * 100);

  topContainer.innerHTML += `

    <div class="group">

      <div class="flex justify-between mb-xs">

        <span class="font-label-bold text-on-surface">
          ${labels[item[0]]}
        </span>

        <span class="font-label-bold text-primary">
          ${percent}%
        </span>

      </div>

      <div
        class="h-3 w-full progress-track rounded-full overflow-hidden"
      >

        <div
          class="h-full progress-fill rounded-full"
          style="width:${percent}%"
        ></div>

      </div>

    </div>

  `;
});

document.getElementById("superpowerTitle").innerText =
  `Superpower: "${labels[top1[0]]}"`;

document.getElementById("superpowerDesc").innerText = descriptions[top1[0]];
