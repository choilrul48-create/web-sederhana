// ===================================
// 1. SISTEM LOGIN
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.getElementById("formLogin");

  if (formLogin) {
    formLogin.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      // Mencari akun di data.js
      const pengguna = dataPengguna.find(function (user) {
        return user.email === email && user.password === password;
      });

      if (pengguna) {
        // Menyimpan data pengguna
        sessionStorage.setItem("namaUser", pengguna.nama);
        sessionStorage.setItem("roleUser", pengguna.role);

        alert("Login Berhasil! Selamat Datang, " + pengguna.nama);

        window.location.href = "dashboard.html";
      } else {
        alert("Email atau password yang Anda masukkan salah!");
      }
    });
  }

  // ===================================
  // 2. JAM DIGITAL DAN GREETING
  // ===================================

  updateWaktu();
  setInterval(updateWaktu, 1000);
});

function updateWaktu() {
  const elemenGreeting = document.getElementById("greeting");
  const elemenJam = document.getElementById("jam");

  if (elemenGreeting && elemenJam) {
    const sekarang = new Date();
    const jam = sekarang.getHours();

    let sapaan = "";

    if (jam >= 5 && jam < 11) {
      sapaan = "☀️ Selamat Pagi";
    } else if (jam >= 11 && jam < 15) {
      sapaan = "🌤️ Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
      sapaan = "⛅ Selamat Sore";
    } else {
      sapaan = "🌙 Selamat Malam";
    }

    const format = (angka) => String(angka).padStart(2, "0");

    const jamTeks = format(sekarang.getHours());
    const menitTeks = format(sekarang.getMinutes());
    const detikTeks = format(sekarang.getSeconds());

    const namaAktif = sessionStorage.getItem("namaUser") || "User";

    elemenGreeting.innerText = sapaan + ", " + namaAktif + "!";

    elemenJam.innerText =
      "Waktu saat ini: " + jamTeks + ":" + menitTeks + ":" + detikTeks;
  }
}

// ===================================
// 3. FUNGSI MODAL
// ===================================

function bukaModal(tipe) {
  alert("Fitur " + tipe + " belum tersedia.");
}

// ===================================
// 4. FUNGSI HISTORY
// ===================================

function tampilHistory() {
  const modal = document.getElementById("modal");
  const isiHistory = document.getElementById("isiHistory");

  if (modal && isiHistory) {
    isiHistory.innerHTML = "<p>Belum ada riwayat transaksi terbaru.</p>";

    modal.classList.add("show");
  }
}
