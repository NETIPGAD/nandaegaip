// Generate angka acak antara 1 dan 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Inisialisasi jumlah percobaan
let attempts = 0;

// Fungsi untuk memeriksa jawaban pemain
function checkGuess() {
    // Ambil jawaban pemain dari elemen input
    const playerGuess = document.getElementById('guess').value;
    
    // Periksa apakah jawaban benar
    if (playerGuess == targetNumber) {
        alert(`Selamat! Anda berhasil menebak angka ${targetNumber} dalam ${attempts} percobaan.`);
    } else if (playerGuess < targetNumber) {
        alert('Coba lagi. Angka yang Anda tebak terlalu kecil.');
    } else {
        alert('Coba lagi. Angka yang Anda tebak terlalu besar.');
    }

    // Tambah jumlah percobaan
    attempts++;
}

// Event listener untuk tombol "Cek Jawaban"
document.getElementById('checkButton').addEventListener('click', checkGuess);
