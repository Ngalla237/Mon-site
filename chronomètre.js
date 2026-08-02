let secondes = 0;
let intervalle = null;

function formater(s) {
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

function demarrer() {
  if (intervalle) return;
  intervalle = setInterval(() => {
    secondes++;
    document.getElementById("affichage").textContent = formater(secondes);
  }, 1000);
}

function pause() {
  clearInterval(intervalle);
  intervalle = null;
}

function reinitialiser() {
  pause();
  secondes = 0;
  document.getElementById("affichage").textContent = formater(secondes);
}
