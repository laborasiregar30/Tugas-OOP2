class PengisianKRS {
    constructor(namaMahasiswa) {
      this.namaMahasiswa = namaMahasiswa;
      this.mataKuliah = [];
      this.khs = {};
      this.transkripNilai = {};
    }
  
    tambahMataKuliah(namaMataKuliah, sks) {
      this.mataKuliah.push({ nama: namaMataKuliah, sks: sks });
    }
  
    inputNilai(namaMataKuliah, nilai) {
      if (!this.transkripNilai[namaMataKuliah]) {
        this.transkripNilai[namaMataKuliah] = nilai;
      } else {
        console.log("Nilai untuk mata kuliah ini sudah diinput sebelumnya.");
      }
    }
  
    hitungIPS() {
      let totalSKS = 0;
      let totalBobotNilai = 0;
  
      for (const mataKuliah of this.mataKuliah) {
        const namaMataKuliah = mataKuliah.nama;
        const sks = mataKuliah.sks;
        const nilai = this.transkripNilai[namaMataKuliah];
  
        if (nilai) {
          totalSKS += sks;
          totalBobotNilai += sks * this.convertNilaiToBobot(nilai);
        } else {
          console.log(`Nilai untuk mata kuliah ${namaMataKuliah} belum diinput.`);
        }
      }
  
      if (totalSKS > 0) {
        const ips = totalBobotNilai / totalSKS;
        return ips.toFixed(2);
      } else {
        return "Belum ada mata kuliah yang diambil.";
      }
    }
  
    convertNilaiToBobot(nilai) {
      switch (nilai.toUpperCase()) {
        case "A":
          return 4.0;
        case "B":
          return 3.0;
        case "C":
          return 2.0;
        case "D":
          return 1.0;
        case "E":
          return 0.0;
        default:
          return 0.0;
      }
    }
  
    cetakKRS() {
      console.log(`Kartu Rencana Studi (${this.namaMahasiswa}):`);
      console.log("Mata Kuliah yang diambil:");
  
      for (const mataKuliah of this.mataKuliah) {
        console.log(`${mataKuliah.nama} (${mataKuliah.sks} SKS)`);
      }
  
      console.log("\nKartu Hasil Studi (KHS):");
      for (const [mataKuliah, nilai] of Object.entries(this.transkripNilai)) {
        console.log(`${mataKuliah}: ${nilai}`);
      }
  
      console.log(`\nIndeks Prestasi Semester (IPS): ${this.hitungIPS()}`);
    }
  }
  
  // Contoh penggunaan kelas PengisianKRS
  const mahasiswa1 = new PengisianKRS("Andi Sirait");
  
  mahasiswa1.tambahMataKuliah("Matematika", 3);
  mahasiswa1.tambahMataKuliah("Fisika", 4);
  mahasiswa1.tambahMataKuliah("Bahasa Inggris", 2);
  
  mahasiswa1.inputNilai("Matematika", "A");
  mahasiswa1.inputNilai("Fisika", "B");
  mahasiswa1.inputNilai("Bahasa Inggris", "C");
  
  mahasiswa1.cetakKRS();

  const mahasiswa2 = new PengisianKRS("Gery Harahap");
  
  mahasiswa2.tambahMataKuliah("Matematika", 3);
  mahasiswa2.tambahMataKuliah("Fisika", 4);
  mahasiswa2.tambahMataKuliah("Bahasa Inggris", 2);
  
  mahasiswa2.inputNilai("Matematika", "B");
  mahasiswa2.inputNilai("Fisika", "A");
  mahasiswa2.inputNilai("Bahasa Inggris", "C");
  
  mahasiswa2.cetakKRS();
   