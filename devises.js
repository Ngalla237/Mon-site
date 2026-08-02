async function convertir() {
  const montant = parseFloat(document.getElementById("montant").value);
  const de = document.getElementById("deviseDepart").value;
  const vers = document.getElementById("deviseArrivee").value;
  
  if (isNaN(montant)) {
    document.getElementById("resultat").textContent = "";
    return;
  }
  
  document.getElementById("resultat").textContent = "Chargement...";
  
  try {
    const reponse = await fetch(`https://api.exchangerate-api.com/v4/latest/${de}`);
    const donnees = await reponse.json();
    const taux = donnees.rates[vers];
    const resultat = (montant * taux).toFixed(2);
    
    document.getElementById("resultat").textContent =
      `${montant} ${de} = ${resultat} ${vers}`;
  } catch (erreur) {
    document.getElementById("resultat").textContent =
      "Erreur : impossible de récupérer les taux de change.";
  }
}

convertir();
