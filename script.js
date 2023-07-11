// const Guadeloupe = document.querySelector('.region-01');
// Guadeloupe.addEventListener('click', () => {
//     console.log("coucou");
// })
// const Martinique = document.querySelector('.region-02');
// Martinique.addEventListener('click', () => {
//     console.log("coucou");
// })
// const Guyane = document.querySelector('.region-03');
// Guyane.addEventListener('click', () => {
//     console.log("coucou");
// })
// const LaRéunion = document.querySelector('.region-04');
// LaRéunion.addEventListener('click', () => {
//     console.log("coucou");
// })
// const Mayotte = document.querySelector('.region-06');
// Mayotte.addEventListener('click', () => {
//     document.querySelector('#nomregion').innerHTML = "Mayotte";
//     document.querySelector('#population').innerHTML = "";
//     document.querySelector('#densite').innerHTML = "Mayotte";
//     document.querySelector('#superficie').innerHTML = "Mayotte";
//     document.querySelector('#prefecture').innerHTML = "Mayotte";
// })
// const ÎleDeFrance = document.querySelector('.region-11');
// ÎleDeFrance.addEventListener('click', () => {
//     console.log("coucou");
// })
// const CentreValDeLoire = document.querySelector('.region-24');
// CentreValDeLoire.addEventListener('click', () => {
//     console.log("coucou");
// })
// const BourgogneFrancheComté = document.querySelector('.region-27');
// BourgogneFrancheComté.addEventListener('click', () => {
//     console.log("coucou");
// })
// const Normandie = document.querySelector('.region-28');
// Normandie.addEventListener('click', () => {
//     console.log("coucou");
// })
// const HautDeFrance = document.querySelector('.region-32');
// HautDeFrance.addEventListener('click', () => {
//     console.log("coucou");
// })
// const GrandEst = document.querySelector('.region-44');
// GrandEst.addEventListener('click', () => {
//     console.log("coucou");
// })
// const PaysDeLoire = document.querySelector('.region-52');
// PaysDeLoire.addEventListener('click', () => {
//     console.log("coucou");
// })
// const Bretagne = document.querySelector('.region-53');
// Bretagne.addEventListener('click', () => {
//     console.log("coucou");
// })
// const NouvelleAquitaine = document.querySelector('.region-75');
// NouvelleAquitaine.addEventListener('click', () => {
//     console.log("coucou");
// })
// const Occitanie = document.querySelector('.region-76');
// Occitanie.addEventListener('click', () => {
//     console.log("coucou");
// })
// const AuvergneRhoneAlpes = document.querySelector('.region-84');
// AuvergneRhoneAlpes.addEventListener('click', () => {
//     console.log("coucou");
// })
// const ProvenceAlpesCoteDazur = document.querySelector('.region-93');
// ProvenceAlpesCoteDazur.addEventListener('click', () => {
//     console.log("coucou");
// })
// const Corse = document.querySelector('.region-94');
// Corse.addEventListener('click', () => {
    
// })

// let region11 = document.querySelectorAll(".region-11");

// region11.forEach(region11 => {
//     region11()
// });


const regions = document.querySelectorAll("g");
const regionsinfo = {
    0: ["Guadeloupe", "395,700", "1,628", "-61.5510° W", "16.2650° N"],
    1: ["Martinique", "356,480", "1,128", "-61.0242° W", "14.6415° N"],
    2: ["Guyane", "294,071", "83,534", "-53.1258° W", "3.9339° N"],
    3: ["Reunion", "852,924", "2,512", "55.5364° E", "-21.1151° S"],
    4: ["Mayotte", "279,471", "374", "45.1662° E", "-12.8275° S"],
    5: ["Ile-de-France", "12,278,210", "12,012", "2.3515° E", "48.8566° N"],
    6: ["Centre-Val de Loire", "2,571,676", "39,151", "1.4541° E", "47.7516° N"],
    7: ["Bourgogne-Franche-Comte", "2,817,424", "47,784", "4.4600° E", "47.2529° N"],
    8: ["Normandie", "3,328,364", "29,906", "0.7320° E", "48.8799° N"],
    9: ["Hauts-de-France", "6,011,767", "31,813", "3.0797° E", "50.6292° N"],
    10: ["Grand Est", "5,552,388", "57,433", "5.3660° E", "48.8566° N"],
    11: ["Pays de la Loire", "3,801,851", "32,082", "-0.5811° W", "47.4808° N"],
    12: ["Bretagne", "3,337,561", "27,208", "-2.9999° W", "48.2020° N"],
    13: ["Nouvelle-Aquitaine", "5,956,972", "84,061", "-0.5792° W", "45.7326° N"],
    14: ["Occitanie", "5,850,729", "72,724", "3.2950° E", "43.8367° N"],
    15: ["Auvergne-Rhone-Alpes", "7,993,076", "69,711", "4.9260° E", "45.4642° N"],
    16: ["Provence-Alpes-Cote d'Azur", "5,088,714", "31,400", "6.6453° E", "43.7102° N"],
    17: ["Corse", "337,576", "8,680", "9.1934° E", "42.0396° N"]
  };
for (let i = 0; i < regions.length; i++) {
  regions[i].addEventListener("click", () => {
    const regionsname = regions[i].getAttribute("data-nom");
    document.querySelector("#nomregion").innerHTML = regionsname;
    document.querySelector("#population").innerHTML = regionsinfo[i][1] + " hab.";
    document.querySelector("#superficie").innerHTML = regionsinfo[i][2] + " km2";
    document.querySelector("#coordonée").innerHTML = regionsinfo[i][3] + " | " + regionsinfo[i][4];
    document.querySelector("#departement").innerHTML = "";
    for (let j = 1; j < regions[i].childNodes.length; j += 2) {
      const tmp = document.createElement("p");
      tmp.innerText = regions[i].childNodes[j].getAttribute('data-nom') + "(" + regions[i].childNodes[j].getAttribute('data-numerodepartement') + ")";
      document.querySelector("#departement").appendChild(tmp);
    }
  })
}






    