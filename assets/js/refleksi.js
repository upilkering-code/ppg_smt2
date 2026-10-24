(() => {
  "use strict";
  /*
   * DATA REFLEKSI
   * Untuk menambah mata kuliah, salin satu objek lengkap lalu ubah isinya.
   * semester hanya memakai: "sem1", "sem2", atau "akhir".
   * Angka jumlah mata kuliah pada tombol semester dihitung otomatis.
   */
  const entries = [
    {
      "semester": "sem1",
      "id": "fpi",
      "kode": "FPI",
      "nama": "Filosofi Pendidikan Indonesia",
      "tema": "Pendidikan yang berpihak pada murid",
      "fourC": {
        "connection": "Pemikiran Ki Hadjar Dewantara mengingatkan saya bahwa mengajar di kelas XI-9 bukan sekadar menyampaikan materi, melainkan menuntun murid sesuai kekuatan dan konteksnya.",
        "challenge": "Saya perlu meninggalkan kebiasaan menganggap satu strategi cocok untuk seluruh kelas. Setiap murid datang dengan pengalaman dan kebutuhan yang berbeda.",
        "concept": "Pendidikan yang memerdekakan, kodrat alam dan kodrat zaman, serta guru sebagai penuntun menjadi landasan yang paling saya maknai.",
        "change": "Saya akan memulai perencanaan dari pengenalan kondisi murid, menyediakan pilihan cara belajar, dan membuka ruang suara murid."
      },
      "analisisArtefak": "Modul ajar, hasil observasi kelas, serta catatan umpan balik murid. Artefak ini menunjukkan bagaimana prinsip berpihak pada murid diterjemahkan ke dalam keputusan pembelajaran.",
      "kaitanPraktis": "Saya akan meninjau kembali setiap rancangan ajar: apakah tujuan, aktivitas, dan asesmennya benar-benar memberi kesempatan murid untuk tumbuh."
    },
    {
      "semester": "sem1",
      "id": "pdp",
      "kode": "PDP",
      "nama": "Pemahaman Peserta Didik",
      "tema": "Mengenali keberagaman belajar",
      "fourC": {
        "connection": "Materi perkembangan peserta didik berkaitan langsung dengan pengalaman saya menghadapi minat, kesiapan, dan kepercayaan diri murid yang beragam.",
        "challenge": "Tugas yang sama belum tentu memberi kesempatan belajar yang setara. Saya perlu memberi dukungan tanpa memberi label kepada murid.",
        "concept": "Kesiapan belajar, motivasi, latar belakang, dan lingkungan sosial murid merupakan dasar pengambilan keputusan pembelajaran.",
        "change": "Saya akan memakai observasi dan asesmen awal, memberi bantuan bertahap, serta menyediakan variasi aktivitas."
      },
      "analisisArtefak": "Hasil asesmen diagnostik, profil belajar sederhana, dan dokumentasi diskusi kelompok. Ketiganya menjadi bukti bahwa kebutuhan murid dipetakan sebelum pembelajaran dilanjutkan.",
      "kaitanPraktis": "Ke depan saya akan membuat catatan perkembangan singkat agar dukungan yang diberikan lebih tepat dan keterlibatan murid lebih merata."
    },
    {
      "semester": "sem1",
      "id": "ppa1",
      "kode": "PPA I",
      "nama": "Pengajaran dan Asesmen Efektif I",
      "tema": "Tujuan, aktivitas, dan asesmen selaras",
      "fourC": {
        "connection": "Mata kuliah ini terhubung dengan penyusunan tujuan pembelajaran, LKPD, media, dan instrumen penilaian saat praktik mengajar.",
        "challenge": "Saya belajar bahwa asesmen bukan hanya nilai akhir; ia adalah informasi untuk menentukan bantuan selama proses belajar.",
        "concept": "Keselarasan tujuan–aktivitas–asesmen serta fungsi diagnostik, formatif, dan sumatif menjadi konsep utamanya.",
        "change": "Saya akan menulis indikator keberhasilan lebih jelas dan memakai cek pemahaman singkat sebelum melanjutkan materi."
      },
      "analisisArtefak": "Modul ajar, LKPD, rubrik, dan rekap exit ticket. Artefak ini menunjukkan hubungan antara tujuan yang ditetapkan, aktivitas yang dilakukan, dan bukti belajar yang dikumpulkan.",
      "kaitanPraktis": "Saya akan menggunakan hasil asesmen formatif untuk mengatur kelompok dukungan dan menyiapkan tindak lanjut yang lebih spesifik."
    },
    {
      "semester": "sem1",
      "id": "tbt",
      "kode": "TBT",
      "nama": "Teknologi Baru dalam Pengajaran",
      "tema": "Teknologi sebagai alat belajar bermakna",
      "fourC": {
        "connection": "Sebagai calon guru Informatika, teknologi dekat dengan bidang yang saya ajarkan; mata kuliah ini memperjelas bahwa media dipilih karena tujuan, bukan sekadar menarik.",
        "challenge": "Perangkat digital tidak otomatis membuat murid aktif. Tantangannya adalah memastikan teknologi mendorong berpikir, berkarya, dan berkolaborasi.",
        "concept": "Literasi digital, aksesibilitas, keamanan, serta kesesuaian antara pedagogi dan teknologi adalah konsep yang paling penting.",
        "change": "Saya akan memilih media secara lebih selektif dan menyiapkan alternatif bagi murid yang memiliki keterbatasan akses."
      },
      "analisisArtefak": "Tautan media interaktif, tangkapan layar aktivitas digital, dan hasil karya murid. Artefak tersebut membuktikan fungsi teknologi dalam proses belajar, bukan hanya sebagai hiasan presentasi.",
      "kaitanPraktis": "Saya akan mengevaluasi setiap penggunaan teknologi berdasarkan dampaknya terhadap pemahaman dan partisipasi murid."
    },
    {
      "semester": "sem1",
      "id": "pki",
      "kode": "PK I",
      "nama": "Projek Kepemimpinan I",
      "tema": "Bertumbuh melalui kolaborasi",
      "fourC": {
        "connection": "Pengalaman bekerja dalam tim memperlihatkan bahwa program yang baik membutuhkan komunikasi, pembagian peran, dan konsistensi, bukan hanya ide.",
        "challenge": "Saya ditantang untuk tidak selalu bekerja sendiri serta belajar mendengarkan sudut pandang anggota tim.",
        "concept": "Kepemimpinan kolaboratif, pemetaan kebutuhan, pembagian tanggung jawab, dan evaluasi program menjadi konsep kuncinya.",
        "change": "Saya akan membiasakan pembagian tugas yang jelas, pembaruan progres, dan refleksi bersama."
      },
      "analisisArtefak": "Proposal projek, pembagian peran, notulen rapat, dan dokumentasi pelaksanaan. Artefak ini memperlihatkan proses kolaborasi serta keputusan yang diambil bersama.",
      "kaitanPraktis": "Saya akan memulai projek berikutnya dengan indikator keberhasilan dan jadwal evaluasi yang disepakati seluruh tim."
    },
    {
      "semester": "sem1",
      "id": "ppl1",
      "kode": "PPL I",
      "nama": "Praktik Pengalaman Lapangan I",
      "tema": "Teori bertemu kelas nyata",
      "fourC": {
        "connection": "PPL menjadi ruang untuk menghubungkan filosofi pendidikan, pemahaman murid, asesmen, dan teknologi dalam situasi kelas XI-9.",
        "challenge": "Kelas tidak selalu berjalan seperti rencana. Saya perlu beradaptasi terhadap waktu, respons murid, fasilitas, dan dinamika yang berubah.",
        "concept": "Observasi, praktik terbimbing, pengelolaan kelas, komunikasi instruksional, dan umpan balik guru pamong menjadi pembelajaran utama.",
        "change": "Saya akan menyiapkan rencana cadangan, instruksi yang lebih ringkas, dan catatan refleksi segera setelah mengajar."
      },
      "analisisArtefak": "Jurnal PPL, lembar observasi guru pamong, modul ajar, serta foto kegiatan. Bukti ini mendukung refleksi karena memperlihatkan rencana, pelaksanaan, dan umpan balik praktik.",
      "kaitanPraktis": "Saya akan menjadikan refleksi pascamengajar sebagai kebiasaan agar keputusan pembelajaran berikutnya berbasis bukti."
    },
    {
      "semester": "sem2",
      "id": "pse",
      "kode": "PSE",
      "nama": "Pembelajaran Sosial Emosional",
      "tema": "Membangun kelas yang aman dan sadar diri",
      "fourC": {
        "connection": "PSE berkaitan dengan kebutuhan saya untuk membangun relasi yang hangat sekaligus menjaga iklim kelas yang aman bagi murid untuk berpendapat.",
        "challenge": "Saya perlu mengelola respons diri ketika kelas tidak berjalan sesuai rencana dan tetap melihat perilaku murid sebagai pesan yang perlu dipahami.",
        "concept": "Kesadaran diri, manajemen diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan bertanggung jawab menjadi konsep inti.",
        "change": "Saya akan menambahkan check-in singkat, bahasa umpan balik yang lebih empatik, dan kesepakatan kelas yang disusun bersama."
      },
      "analisisArtefak": "Kesepakatan kelas, jurnal check-in emosi, dan catatan observasi interaksi murid. Artefak ini menjadi bukti perubahan iklim belajar dan hubungan di kelas.",
      "kaitanPraktis": "Saya akan mengevaluasi rutinitas PSE secara berkala bersama murid agar praktiknya tidak hanya menjadi kegiatan pembuka."
    },
    {
      "semester": "sem2",
      "id": "ppa2",
      "kode": "PPA II",
      "nama": "Pengajaran dan Asesmen Efektif II",
      "tema": "Membaca bukti untuk memperbaiki pembelajaran",
      "fourC": {
        "connection": "Pembelajaran ini meneruskan pengalaman saya menggunakan asesmen formatif untuk memahami proses belajar murid, bukan sekadar mengumpulkan skor.",
        "challenge": "Tantangannya adalah mengolah bukti belajar dengan cepat agar umpan balik masih berguna bagi murid.",
        "concept": "Diferensiasi tindak lanjut, umpan balik deskriptif, dan asesmen sebagai pembelajaran menjadi konsep yang saya pegang.",
        "change": "Saya akan merancang satu atau dua bukti belajar yang sederhana namun bermakna pada setiap pertemuan."
      },
      "analisisArtefak": "Rubrik yang direvisi, contoh umpan balik, rekap asesmen formatif, dan rencana tindak lanjut. Artefak ini menunjukkan bahwa data belajar benar-benar dipakai untuk keputusan berikutnya.",
      "kaitanPraktis": "Saya akan mengajak murid memakai rubrik untuk menilai karya sendiri dan menetapkan target perbaikannya."
    },
    {
      "semester": "sem2",
      "id": "pkii",
      "kode": "PK II",
      "nama": "Projek Kepemimpinan II",
      "tema": "Memimpin perubahan yang terukur",
      "fourC": {
        "connection": "Mata kuliah ini berkaitan dengan usaha saya menggerakkan perubahan kecil yang relevan dengan kebutuhan lingkungan belajar.",
        "challenge": "Saya belajar bahwa perubahan memerlukan pemetaan pihak terkait dan komunikasi yang konsisten, bukan hanya semangat awal.",
        "concept": "Perencanaan perubahan, pemangku kepentingan, monitoring, dan evaluasi dampak menjadi konsep penting.",
        "change": "Saya akan menyusun projek dengan target realistis, indikator bukti, dan ruang evaluasi bagi pihak yang terlibat."
      },
      "analisisArtefak": "Peta kebutuhan, rencana aksi, logbook projek, dan umpan balik peserta. Artefak ini menjadi alasan kuat karena mendokumentasikan perjalanan perubahan dari masalah sampai evaluasi.",
      "kaitanPraktis": "Saya akan membawa kebiasaan membuat siklus rencana–aksi–evaluasi ke dalam program kelas dan sekolah."
    },
    {
      "semester": "sem2",
      "id": "ppl2",
      "kode": "PPL II",
      "nama": "Praktik Pengalaman Lapangan II",
      "tema": "Menguatkan identitas profesional",
      "fourC": {
        "connection": "PPL II menghubungkan seluruh pembelajaran PPG dengan praktik mandiri di kelas XI-3, termasuk komunikasi dengan guru pamong dan respons terhadap kebutuhan murid.",
        "challenge": "Saya perlu menjaga keseimbangan antara ketegasan pengelolaan kelas dan fleksibilitas saat strategi belum bekerja.",
        "concept": "Profesionalisme guru tercermin dalam perencanaan, etika, kolaborasi, refleksi, serta keberanian memperbaiki praktik.",
        "change": "Saya akan membangun rutinitas perencanaan mingguan dan meminta umpan balik terarah dari guru pamong."
      },
      "analisisArtefak": "Perangkat ajar, jurnal mengajar, hasil observasi, dan dokumentasi pembelajaran. Artefak ini memperlihatkan perkembangan praktik dari persiapan hingga refleksi.",
      "kaitanPraktis": "Saya akan menyusun portofolio bukti praktik secara rapi sebagai dasar pengembangan profesional berkelanjutan."
    },
    {
      "semester": "sem2",
      "id": "seminar",
      "kode": "SEM",
      "nama": "Seminar Pendidikan Profesi Guru",
      "tema": "Menyuarakan praktik berbasis bukti",
      "fourC": {
        "connection": "Seminar menghubungkan pengalaman praktik dengan kemampuan menyusun narasi profesional yang jelas dan dapat dipertanggungjawabkan.",
        "challenge": "Tantangannya adalah merangkum pengalaman yang kompleks menjadi paparan yang runtut tanpa kehilangan bukti penting.",
        "concept": "Argumentasi berbasis data, komunikasi akademik, dan refleksi kritis menjadi konsep utama.",
        "change": "Saya akan melatih penyusunan presentasi yang berangkat dari masalah, bukti, tindakan, hasil, dan pembelajaran."
      },
      "analisisArtefak": "Slide seminar, naskah presentasi, data pendukung, dan umpan balik audiens. Artefak ini memperlihatkan kemampuan mengomunikasikan pembelajaran secara terstruktur.",
      "kaitanPraktis": "Saya akan memakai pola presentasi berbasis bukti saat berbagi praktik baik di komunitas guru."
    },
    {
      "semester": "sem2",
      "id": "inklusif",
      "kode": "INKL",
      "nama": "Pendidikan Inklusif Tingkat Dasar",
      "tema": "Menyuarakan praktik berbasis bukti",
      "fourC": {
        "connection": "Seminar menghubungkan pengalaman praktik dengan kemampuan menyusun narasi profesional yang jelas dan dapat dipertanggungjawabkan.",
        "challenge": "Tantangannya adalah merangkum pengalaman yang kompleks menjadi paparan yang runtut tanpa kehilangan bukti penting.",
        "concept": "Argumentasi berbasis data, komunikasi akademik, dan refleksi kritis menjadi konsep utama.",
        "change": "Saya akan melatih penyusunan presentasi yang berangkat dari masalah, bukti, tindakan, hasil, dan pembelajaran."
      },
      "analisisArtefak": "Slide seminar, naskah presentasi, data pendukung, dan umpan balik audiens. Artefak ini memperlihatkan kemampuan mengomunikasikan pembelajaran secara terstruktur.",
      "kaitanPraktis": "Saya akan memakai pola presentasi berbasis bukti saat berbagi praktik baik di komunitas guru."
    },
    {
      "semester": "sem2",
      "id": "pencegahan",
      "kode": "PPKPT",
      "nama": "Pencegahan dan Penanganan Kekerasan di Perguruan Tinggi",
      "tema": "Menyuarakan praktik berbasis bukti",
      "fourC": {
        "connection": "Seminar menghubungkan pengalaman praktik dengan kemampuan menyusun narasi profesional yang jelas dan dapat dipertanggungjawabkan.",
        "challenge": "Tantangannya adalah merangkum pengalaman yang kompleks menjadi paparan yang runtut tanpa kehilangan bukti penting.",
        "concept": "Argumentasi berbasis data, komunikasi akademik, dan refleksi kritis menjadi konsep utama.",
        "change": "Saya akan melatih penyusunan presentasi yang berangkat dari masalah, bukti, tindakan, hasil, dan pembelajaran."
      },
      "analisisArtefak": "Slide seminar, naskah presentasi, data pendukung, dan umpan balik audiens. Artefak ini memperlihatkan kemampuan mengomunikasikan pembelajaran secara terstruktur.",
      "kaitanPraktis": "Saya akan memakai pola presentasi berbasis bukti saat berbagi praktik baik di komunitas guru."
    },
    {
      "semester": "akhir",
      "id": "lk3",
      "kode": "LK 3",
      "nama": "Refleksi Akhir Selama Mengikuti PPG",
      "tema": "Kompas untuk karier guru",
      "fourC": {
        "connection": "Rangkaian PPG menegaskan bagi saya bahwa pendidikan Indonesia perlu memberi ruang aman, adil, kontekstual, dan bermakna agar setiap murid dapat berkembang.",
        "challenge": "Tantangan terbesar saya adalah menjaga komitmen untuk terus belajar ketika tuntutan administrasi dan dinamika kelas semakin kompleks.",
        "concept": "Guru profesional adalah pembelajar sepanjang hayat: berpihak pada murid, mengambil keputusan berbasis bukti, bekerja kolaboratif, dan menjunjung etika.",
        "change": "Saya akan membangun kebiasaan refleksi, memperbarui kompetensi, serta mencari umpan balik dari murid, rekan sejawat, dan mentor."
      },
      "analisisArtefak": "Portofolio PPG ini—berisi modul ajar, jurnal PPL, dokumentasi projek, sertifikat, dan refleksi LK 2—menjadi bukti perjalanan belajar serta dasar menilai perkembangan diri.",
      "kaitanPraktis": "Rencana tindak lanjut saya: (1) menyusun pembelajaran yang responsif terhadap kebutuhan murid; (2) aktif belajar dalam komunitas profesional; dan (3) merefleksikan serta memperbaiki praktik mengajar secara berkala."
    }
  ];
  const board = document.querySelector("#questBoard");
  const content = document.querySelector("#reflectionContent");
  const status = document.querySelector("#filterStatus");
  const tabs = document.querySelectorAll(".chapter-tab");
  const totalLabel = document.querySelector("[data-reflection-total]");
  if (!board || !content) return;

  const chapterNames = {
    sem1: "Semester I",
    sem2: "Semester II",
    akhir: "Penutup PPG"
  };

  const fourCFields = [
    { key: "connection", label: "Connection", title: "Keterkaitan" },
    { key: "challenge", label: "Challenge", title: "Tantangan" },
    { key: "concept", label: "Concept", title: "Konsep Utama" },
    { key: "change", label: "Change", title: "Perubahan" }
  ];

  const query = new URLSearchParams(location.search);
  const requestedChapter = query.get("bagian");
  let chapter = entries.some(entry => entry.semester === requestedChapter)
    ? requestedChapter
    : "sem1";

  const firstEntry = entries.find(entry => entry.semester === chapter);
  const requestedEntry = query.get("refleksi");
  let current = entries.some(entry => entry.id === requestedEntry && entry.semester === chapter)
    ? requestedEntry
    : firstEntry.id;

  const updateCounts = () => {
    tabs.forEach(tab => {
      const badge = tab.querySelector("span");
      if (!badge) return;
      const amount = entries.filter(entry => entry.semester === tab.dataset.chapter).length;
      badge.textContent = tab.dataset.chapter === "akhir" ? "LK 3" : amount;
    });

    if (totalLabel) {
      totalLabel.textContent = entries.length + " catatan perjalanan";
    }
  };

  const render = () => {
    const list = entries.filter(entry => entry.semester === chapter);
    if (!list.some(entry => entry.id === current)) current = list[0].id;

    board.innerHTML = list.map(entry =>
      '<button class="quest-card ' + (entry.id === current ? "active" : "") +
      '" data-entry="' + entry.id +
      '" type="button" aria-pressed="' + (entry.id === current) + '">' +
      '<span class="quest-rank">' + entry.kode + '</span>' +
      '<strong>' + entry.nama + '</strong>' +
      '<small>' + entry.tema + '</small>' +
      '<b>BUKA JURNAL →</b></button>'
    ).join("");

    const entry = entries.find(item => item.id === current);
    const cards = fourCFields.map(field =>
      '<section class="card four-c-card" data-letter="' + field.label[0] + '">' +
      '<span class="feature-number">' + field.label.toUpperCase() + '</span>' +
      '<h3>' + field.title + '</h3>' +
      '<p class="muted">' + entry.fourC[field.key] + '</p></section>'
    ).join("");

    const kind = chapter === "akhir"
      ? "LEMBAR KERJA 3 · PENUTUP"
      : "LEMBAR KERJA 2 · " + chapterNames[chapter].toUpperCase();

    content.innerHTML =
      '<article class="reflection-course journal-entry soft-query-enter">' +
      '<header class="course-heading"><div class="course-code">' + entry.kode + '</div>' +
      '<div><span class="eyebrow">' + kind + '</span><h2>' + entry.nama + '</h2>' +
      '<p class="muted">' + entry.tema + '</p></div></header>' +
      '<div class="journal-rule"></div><div class="four-c-grid">' + cards + '</div>' +
      '<div class="evidence-grid"><section class="evidence-card">' +
      '<span class="evidence-icon">▣</span><div><span class="eyebrow">ANALISIS ARTEFAK</span>' +
      '<h3>Bukti pendukung</h3><p>' + entry.analisisArtefak + '</p></div></section>' +
      '<section class="evidence-card"><span class="evidence-icon">✦</span><div>' +
      '<span class="eyebrow">KAITAN PRAKTIS</span><h3>Komitmen berikutnya</h3>' +
      '<p>' + entry.kaitanPraktis + '</p></div></section></div>' +
      '<aside class="journal-note"><strong>Catatan portofolio:</strong> Ganti atau lengkapi uraian ini dengan pengalaman asli dan tautkan artefak pendukung pada halaman Artefak sebelum mengumpulkan tautan ke LMS.</aside></article>';

    status.textContent =
      (chapter === "akhir"
        ? "1 refleksi akhir LK 3"
        : list.length + " refleksi " + chapterNames[chapter]) +
      " · " + entry.nama;

    tabs.forEach(tab => {
      const active = tab.dataset.chapter === chapter;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    const url = new URL(location.href);
    url.searchParams.set("bagian", chapter);
    url.searchParams.set("refleksi", current);
    history.replaceState({}, "", url);
    document.title = entry.nama + " | Jurnal Refleksi PPG";
  };

  updateCounts();
  render();

  document.addEventListener("click", event => {
    const tab = event.target.closest(".chapter-tab");
    const card = event.target.closest(".quest-card");
    if (!tab && !card) return;

    if (tab) {
      chapter = tab.dataset.chapter;
      current = entries.find(entry => entry.semester === chapter).id;
      render();
      requestAnimationFrame(() => {
        board.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    current = card.dataset.entry;
    render();
    requestAnimationFrame(() => {
      content.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

