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

while (suankiNokta !== bitis) {
  const komsular = grafik[suankiNokta]
  let enKisaKomsununNoktasi = null
  let enKisaMesafe = Infinity 

  for (let komsununNoktasi in komsular) {
    const mesafe = komsular[komsununNoktasi]

    if (!yol.includes(komsununNoktasi) && uzaklik + mesafe < enKisaMesafe) {
      enKisaKomsununNoktasi = komsununNoktasi
      enKisaMesafe = uzaklik + mesafe
    }
  }

  yol.push(suankiNokta)
  suankiNokta = enKisaKomsununNoktasi
  uzaklik = enKisaMesafe
}

yol.push(bitis) 
console.log("En Kisa Yol:", yol.join(" - "))
console.log("Toplam Uzaklik:", uzaklik)
