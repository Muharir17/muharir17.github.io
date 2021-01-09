alert("SELAMAT DATANG DI PORTAL SIA UNISKA BANJARMASIN \n\nKepada mahasiswa angkatan baru login pertama dapat dilakukan menggunakan NPM/NIM sebagai username \n\dan No. Pembayaran (tanpa spasi) sebagai password");

document.write("<h2>Silahkan Login Terlebih Dahulu</h2>");

function cekNama()
{
    var txt;
    var mahasiswa = prompt("Nama Anda Siapa ? ", "mila");
    if(mahasiswa == null || mahasiswa == "")
    {
        txt = "User Membatalkan Login";
    }else{
        txt = "Hello "+ mahasiswa + " Sudah Login";
    }
    document.getElementById("contoh").innerHTML = txt;
}