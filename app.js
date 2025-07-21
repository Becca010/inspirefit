
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const schedule = {};
const moods = ["😊", "😐", "😓", "😤", "😡"];
let calendar;

document.addEventListener("DOMContentLoaded", () => {
  calendar = document.getElementById("calendar");
  days.forEach(day => {
    const div = document.createElement("div");
    div.className = "day-tile";
    div.innerHTML = `<strong>${day}</strong><br><span id="data-${day}">No plan</span>`;
    div.onclick = () => assignWorkout(day);
    calendar.appendChild(div);
  });
});

function assignWorkout(day) {
  const workout = prompt(`Workout for ${day}?`);
  const mood = prompt(`Mood? (😊 😐 😓 😤 😡)`);
  const stars = prompt(`Intensity? (1–5 stars)`);
  const note = prompt(`Notes for ${day}:`);
  schedule[day] = { workout, mood, stars, note };
  document.getElementById(`data-${day}`).innerHTML =
    `${workout || ''} ${mood || ''} ${"⭐".repeat(stars || 0)}`;
}

function exportPlan() {
  const output = document.getElementById("output");
  let result = "InspireFit Weekly Plan\n=======================\n";
  days.forEach(day => {
    const s = schedule[day];
    if (s) {
      result += `\n${day}: ${s.workout} ${s.mood || ""} ${"⭐".repeat(s.stars)}\nNote: ${s.note || "None"}\n`;
    } else {
      result += `\n${day}: No plan\n`;
    }
  });
  output.textContent = result;
}

function loadSmartPlan() {
  const goal = document.getElementById("goal").value;
  if (goal === "strength") {
    assignSmart({Mon:"Strength",Tue:"Upper",Thu:"Full Body",Sat:"Lower"});
  } else if (goal === "fatburn") {
    assignSmart({Mon:"HIIT",Tue:"Core",Thu:"HIIT",Sat:"HIIT"});
  } else if (goal === "core") {
    assignSmart({Mon:"Core Yoga",Tue:"Plank Series",Thu:"Pilates",Sat:"Stretch+Core"});
  }
}

function assignSmart(plan) {
  for (const [day, workout] of Object.entries(plan)) {
    schedule[day] = { workout, mood: "", stars: "", note: "" };
    document.getElementById(`data-${day}`).innerHTML = workout;
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
