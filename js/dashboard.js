async function loadDashboard() {

    const { count: akun } = await supabaseClient
        .from("akun_kas_bank")
        .select("*", { count: "exact", head: true });

    const { count: transaksi } = await supabaseClient
        .from("transaksi_kas")
        .select("*", { count: "exact", head: true });

    const { count: mutasi } = await supabaseClient
        .from("mutasi_bank")
        .select("*", { count: "exact", head: true });

    const { count: rekonsiliasi } = await supabaseClient
        .from("rekonsiliasi")
        .select("*", { count: "exact", head: true });

    document.getElementById("totalAkun").textContent = akun || 0;
    document.getElementById("totalTransaksi").textContent = transaksi || 0;
    document.getElementById("totalMutasi").textContent = mutasi || 0;
    document.getElementById("totalRekonsiliasi").textContent =
        rekonsiliasi || 0;
}

loadDashboard();