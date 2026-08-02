function ajouterTache() {
  const input = document.getElementById("nouvelleTache");
  const texte = input.value.trim();
  if (texte === "") return;
  
  const li = document.createElement("li");
  li.textContent = texte;
  li.style.cursor = "pointer";
  
  li.onclick = () => {
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
  };
  
  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  btnSupprimer.style.marginLeft = "10px";
  btnSupprimer.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };
  
  li.appendChild(btnSupprimer);
  document.getElementById("listeTaches").appendChild(li);
  
  input.value = "";
}
