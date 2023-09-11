const yol = []
let uzaklik = 0

const baslangic = 'A'
const bitis = 'F'

const grafik = {
  A: { B: 2, C: 8 },
  B: { C: 5, D: 6 },
  C: { D: 3, E: 2 },
  D: { E: 1, F: 9 },
  E: { F: 3 },
  F: {}
}

let suankiNokta = baslangic

while (suankiNokta !== bitis) {  // bitise kadar calisir.
  const komsular = grafik[suankiNokta]
  let enKisaKomsununNoktasi = null
  let enKisaMesafe = Infinity  // burayaa null degeri girseydim baslangicta bir kisa yol bulamayacakti, baslangictan itibaren en kisa yolu bulmasi icin infinity girdim.

  for (let komsununNoktasi in komsular) {
    const mesafe = komsular[komsununNoktasi]

    if (!yol.includes(komsununNoktasi) && uzaklik + mesafe < enKisaMesafe) {
      enKisaKomsununNoktasi = komsununNoktasi
      enKisaMesafe = uzaklik + mesafe
    }
  }  // o anki dugumden sonraki en kisa mesafeyi teyit eder, eger daha kisa bir yol bulursa gunceller.

  yol.push(suankiNokta)  // buldugu en kisa yoldaki dugum toplam yola eklenir.
  suankiNokta = enKisaKomsununNoktasi
  uzaklik = enKisaMesafe
}

yol.push(bitis) 
console.log("En Kisa Yol:", yol.join(" - "))
console.log("Toplam Uzaklik:", uzaklik)
