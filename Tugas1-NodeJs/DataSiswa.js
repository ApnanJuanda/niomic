const express = require("express");
const routers = express.Router();

routers.get("/", (req, res) => {
  res.send("Selamat Datang Di Data Center Siswa Indonesia");
});

routers.get("/DataSiswa", (req, res) => {
  res.json({
    Nama: "Richard Muhammad",
    TanggalLahir: "14 Januari 1994",
    JenisKelamin: "Laki - Laki",
    Hobi: "Membaca Buku",
  });
});

module.exports = routers;
