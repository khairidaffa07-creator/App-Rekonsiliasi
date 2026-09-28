const akunForm = document.getElementById("akunForm");
const akunTable = document.getElementById("akunTable");

async function loadAkun() {

    const { data, error } = await supabaseClient
        .from("akun_kas_bank")
        .select("*")
        .order("id_akun", { ascending: true });

    if (error) {
        console.error(error);
        return;
    }

    akunTable.innerHTML = "";

    data.forEach(akun => {

        akunTable.innerHTML += `
            <tr>
                <td>${akun.id_akun}</td>
                <td>${akun.nama_akun}</td>
                <td>${akun.jenis_akun}</td>
                <td>${akun.nama_bank || "-"}</td>
                <td>${akun.nomor_rekening || "-"}</td>
                <td>Rp ${Number(akun.saldo_awal).toLocaleString("id-ID")}</td>
            </tr>
        `;

    });
}


akunForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        nama_akun:
            document.getElementById("namaAkun").value,

        jenis_akun:
            document.getElementById("jenisAkun").value,

        nomor_rekening:
            document.getElementById("nomorRekening").value,

        nama_bank:
            document.getElementById("namaBank").value,

        saldo_awal:
            Number(document.getElementById("saldoAwal").value)

    };

    const { error } = await supabaseClient
        .from("akun_kas_bank")
        .insert([data]);

    if (error) {

        alert(error.message);

        return;
    }

    alert("Akun berhasil disimpan");

    akunForm.reset();

    loadAkun();

});


loadAkun();