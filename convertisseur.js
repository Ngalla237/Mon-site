const unites = {
  longueur: {
    metre: 1,
    kilometre: 1000,
    centimetre: 0.01,
    mile: 1609.34,
    pied: 0.3048,
    pouce: 0.0254
  },
  poids: {
    kilogramme: 1,
    gramme: 0.001,
    livre: 0.453592,
    once: 0.0283495,
    tonne: 1000
  },
  vitesse: {
    "km/h": 1,
    "m/s": 3.6,
    "mph": 1.60934
  },
  volume: {
    litre: 1,
    millilitre: 0.001,
    "gallon (US)": 3.78541,
    metreCube: 1000
  }
};

function majUnites() {
  const categorie = document.getElementById("categorie").value;
  const unite1 = document.getElementById("unite1");
  const unite2 = document.getElementById("unite2");
  unite1.innerHTML = "";
  unite2.innerHTML = "";
  
  if (categorie === "temperature") {
    ["Celsius", "Fahrenheit", "Kelvin"].forEach(u => {
      unite1.innerHTML += `<option value="${u}">${u}</option>`;
      unite2.innerHTML += `<option value="${u}">${u}</option>`;
    });
  } else {
    Object.keys(unites[categorie]).forEach(u => {
      unite1.innerHTML += `<option value="${u}">${u}</option>`;
      unite2.innerHTML += `<option value="${u}">${u}</option>`;
    });
  }
  convertir();
}

function convertirTemperature(valeur, de, vers) {
  let celsius;
  if (de === "Celsius") celsius = valeur;
  else if (de === "Fahrenheit") celsius = (valeur - 32) * 5 / 9;
  else if (de === "Kelvin") celsius = valeur - 273.15;
  
  if (vers === "Celsius") return celsius;
  if (vers === "Fahrenheit") return celsius * 9 / 5 + 32;
  if (vers === "Kelvin") return celsius + 273.15;
}

function convertir() {
  const categorie = document.getElementById("categorie").value;
  const valeur = parseFloat(document.getElementById("valeur").value);
  const de = document.getElementById("unite1").value;
  const vers = document.getElementById("unite2").value;
  
  if (isNaN(valeur)) {
    document.getElementById("resultat").textContent = "";
    return;
  }
  
  let resultat;
  if (categorie === "temperature") {
    resultat = convertirTemperature(valeur, de, vers);
  } else {
    const base = valeur * unites[categorie][de];
    resultat = base / unites[categorie][vers];
  }
  
  document.getElementById("resultat").textContent =
    `${valeur} ${de} = ${resultat.toFixed(3)} ${vers}`;
}

majUnites();
