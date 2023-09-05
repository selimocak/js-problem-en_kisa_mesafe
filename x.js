const grafik = {
  A: { B: 2, C: 9 },
  B: { C: 9, D: 9 },
  C: { D: 3, E: 1 },
  D: { E: 3, F: 9 },
  E: { F: 1 },
  F: {}
};

// bfs: Breadth First Search (Genislik Öncelikli Arama) olarak burada kullanilmistir.
function bfs(graf, baslangic, bitis) {
  const kuyruk = [baslangic]
  const mesafeler = {}
  const yollar = {}
  mesafeler[baslangic] = 0;
  yollar[baslangic] = [baslangic]

  
  while (kuyruk.length > 0) {
    const suankiNokta = kuyruk.shift();

    if (suankiNokta === bitis) {
      return {
        mesafe: mesafeler[bitis], 
        yol: yollar[bitis],
      };
    }

    const komsular = graf[suankiNokta]
    for (const komsu in komsular) {
      const yeniMesafe = mesafeler[suankiNokta] + komsular[komsu]
      if (!mesafeler.hasOwnProperty(komsu) || yeniMesafe < mesafeler[komsu]) {
        mesafeler[komsu] = yeniMesafe
        kuyruk.push(komsu)
        yollar[komsu] = [...yollar[suankiNokta], komsu]
      }
    }
  }
  return null
}

const baslangicNoktasi = 'A'
const bitisNoktasi = 'F'

const sonuc = bfs(grafik, baslangicNoktasi, bitisNoktasi)

if (sonuc !== null) {
  console.log("En Kisa Mesafe:", sonuc.mesafe)
  console.log("En Kisa Yol:", sonuc.yol.join(" - "))
} else {
  console.log("Hedefe Ulasilamadi.")
}
