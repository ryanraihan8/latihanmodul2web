function hitung() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        var hasil = bilangan1 + bilangan2;
        alert("Hasil Penjumlahan: " + hasil);
    } else {
        alert("Masukkan angka yang valid.");
    }
}

function reset() {
    document.getElementById("bilangan1").value = "";
    document.getElementById("bilangan2").value = "";
}