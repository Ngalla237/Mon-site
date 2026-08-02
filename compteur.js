function compter() {
  const texte = document.getElementById("texte").value;
  
  const nbCaracteres = texte.length;
  const nbCaracteresSansEspaces = texte.replace(/\s/g, "").length;
  const nbMots = texte.trim() === "" ? 0 : texte.trim().split(/\s+/).length;
  const nbPhrases = texte.trim() === "" ? 0 : texte.split(/[.!?]+/).filter(p => p.trim() !== "").length;
  
  document.getElementById("resultats").innerHTML =
    `Caractères : ${nbCaracteres} (${nbCaracteresSansEspaces} sans espaces)<br>
     Mots : ${nbMots}<br>
     Phrases : ${nbPhrases}`;
}
