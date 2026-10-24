(() => {
  "use strict";

  /*
   * CARA MENGISI:
   * Tempel tautan publik pada properti url. Biarkan "" jika belum tersedia.
   * Contoh: url: "https://drive.google.com/file/d/ID_FILE/preview"
   * Untuk YouTube, gunakan format: https://www.youtube.com/embed/ID_VIDEO
   */
  const cycles = {
    1: {
      title: "Siklus 1",
      subtitle: "Identifikasi masalah dan penerapan tindakan awal",
      context: "Pembelajaran Informatika di kelas XI-3 dengan fokus pemerataan partisipasi dalam kerja kelompok.",
      objectives: "Murid terlibat sesuai tanggung jawab peran, mampu menjelaskan proses kerja, dan menyelesaikan tantangan bersama.",
      reflection: "Tuliskan hal yang sudah berjalan baik, kendala utama, respons murid, dan bukti perubahan yang ditemukan pada Siklus 1.",
      followUp: "Tuliskan revisi perangkat, strategi pendampingan, atau perubahan pembagian peran yang akan diterapkan pada Siklus 2.",
      focus: "Penerapan task grouping melalui peran Analyst, Solution Designer, Implementer, dan Tester untuk meningkatkan pemerataan partisipasi.",
      items: [
        { icon: "AR", title: "Artefak Pembelajaran", note: "Bukti hasil kerja murid, tracer sheet, rubrik partisipasi, atau dokumentasi kegiatan.", url: "https://drive.google.com/file/d/1f4JzVqvPFQIS3dFfB-pFx3h0s8vU3DL6/view?usp=drive_link", kind: "document" },
        { icon: "MA", title: "Modul Ajar", note: "Modul ajar yang digunakan pada pelaksanaan Siklus 1.", url: "", kind: "document" },
        { icon: "LK", title: "LKPD", note: "Lembar kerja dan kartu pembagian peran kelompok.", url: "", kind: "document" },
        { icon: "VD", title: "Video Pembelajaran", note: "Rekaman atau cuplikan pelaksanaan tindakan di kelas.", url: "", kind: "video" },
        { icon: "RF", title: "Refleksi Siklus 1", note: "Uraian capaian, kendala, respons murid, dan hasil pengamatan selama tindakan awal.", url: "", kind: "document" },
        { icon: "TL", title: "Rencana Tindak Lanjut", note: "Perbaikan yang akan diterapkan pada Siklus 2 berdasarkan hasil refleksi.", url: "", kind: "document" }
      ]
    },
    2: {
      title: "Siklus 2",
      subtitle: "Perbaikan strategi dan pemberian scaffolding",
      context: "Pelaksanaan tindakan perbaikan berdasarkan temuan pada Siklus 1 dengan dukungan awal yang lebih terstruktur.",
      objectives: "Murid dapat memulai tugas lebih mandiri, menjalankan rotasi peran, dan menunjukkan bukti kontribusi.",
      reflection: "Tuliskan perkembangan setelah scaffolding diberikan serta hambatan yang masih terlihat selama proses kolaborasi.",
      followUp: "Tuliskan penguatan checkpoint, tracer sheet, timer, atau tanggung jawab individual untuk Siklus 3.",
      focus: "Penyempurnaan pembagian tugas, pemberian kerangka kerja, rotasi peran, dan pengelolaan waktu agar kontribusi setiap anggota lebih terlihat.",
      items: [
        { icon: "AR", title: "Artefak Pembelajaran", note: "Bukti hasil kerja, rekap kontribusi, rubrik, dan dokumentasi Siklus 2.", url: "", kind: "document" },
        { icon: "MA", title: "Modul Ajar", note: "Modul ajar hasil revisi berdasarkan refleksi Siklus 1.", url: "", kind: "document" },
        { icon: "LK", title: "LKPD", note: "LKPD revisi dengan petunjuk dan tanggung jawab peran yang lebih jelas.", url: "https://drive.google.com/file/d/1W06lc-rwWV09ewB9vhthXmyQJbx3rAFh/view?usp=drive_link", kind: "document" },
        { icon: "VD", title: "Video Pembelajaran", note: "Rekaman pelaksanaan perbaikan tindakan pada Siklus 2.", url: "", kind: "video" },
        { icon: "RF", title: "Refleksi Siklus 2", note: "Analisis perubahan partisipasi, efektivitas scaffolding, dan kendala yang masih muncul.", url: "", kind: "document" },
        { icon: "TL", title: "Rencana Tindak Lanjut", note: "Rencana penguatan bukti kerja dan tanggung jawab individual pada Siklus 3.", url: "", kind: "document" }
      ]
    },
    3: {
      title: "Siklus 3",
      subtitle: "Penguatan kolaborasi dan bukti kontribusi",
      context: "Penguatan tindakan melalui bukti kerja individual dan pemeriksaan progres kelompok secara bertahap.",
      objectives: "Kontribusi setiap anggota dapat diamati dan kualitas penyelesaian masalah meningkat melalui kolaborasi.",
      reflection: "Tuliskan dampak tracer sheet dan checkpoint terhadap partisipasi serta kualitas hasil kerja kelompok.",
      followUp: "Tuliskan strategi konsolidasi dan evaluasi akhir yang akan digunakan pada Siklus 4.",
      focus: "Penggunaan tracer sheet, target kerja bertahap, dan pemeriksaan kontribusi untuk memastikan setiap anggota menjalankan perannya.",
      items: [
        { icon: "AR", title: "Artefak Pembelajaran", note: "Hasil tantangan, tracer sheet individu, rubrik partisipasi, dan dokumentasi.", url: "", kind: "document" },
        { icon: "MA", title: "Modul Ajar", note: "Modul ajar Siklus 3 dengan penguatan aktivitas kolaboratif.", url: "", kind: "document" },
        { icon: "LK", title: "LKPD", note: "LKPD dengan tahapan kerja dan bukti kontribusi setiap anggota.", url: "https://drive.google.com/file/d/1MB5k8JVXJJRSEPTdCEZGRI8fSf6Z39r7/view?usp=drive_link", kind: "document" },
        { icon: "VD", title: "Video Pembelajaran", note: "Rekaman pelaksanaan, interaksi kelompok, atau presentasi hasil.", url: "https://drive.google.com/file/d/14xWq_69HDUw2_Dul-SYC_dLqY4e2gUGy/view?usp=drive_link", kind: "video" },
        { icon: "RF", title: "Refleksi Siklus 3", note: "Analisis dampak tindakan terhadap pemerataan partisipasi dan kualitas kerja kelompok.", url: "", kind: "document" },
        { icon: "TL", title: "Rencana Tindak Lanjut", note: "Langkah konsolidasi, evaluasi akhir, dan strategi yang akan dipertahankan pada Siklus 4.", url: "", kind: "document" }
      ]
    },
    4: {
      title: "Siklus 4",
      subtitle: "Evaluasi dampak dan konsolidasi praktik",
      context: "Evaluasi akhir perkembangan partisipasi dan efektivitas strategi pembelajaran setelah rangkaian tindakan.",
      objectives: "Menentukan perubahan antarsiklus dan menetapkan praktik yang layak dipertahankan dalam pembelajaran berikutnya.",
      reflection: "Tuliskan rangkuman capaian, perbandingan dengan kondisi awal, keterbatasan penelitian, dan pembelajaran profesional.",
      followUp: "Tuliskan komitmen penerapan berkelanjutan serta penyesuaian yang diperlukan pada kelas atau materi berikutnya.",
      focus: "Evaluasi perkembangan antar-siklus serta penetapan strategi pembelajaran kolaboratif yang efektif untuk digunakan secara berkelanjutan.",
      items: [
        { icon: "AR", title: "Artefak Pembelajaran", note: "Rekap hasil akhir, perbandingan antar-siklus, dan dokumentasi praktik.", url: "", kind: "document" },
        { icon: "MA", title: "Modul Ajar", note: "Modul ajar final setelah seluruh perbaikan tindakan diterapkan.", url: "", kind: "document" },
        { icon: "LK", title: "LKPD", note: "LKPD final yang telah disempurnakan berdasarkan hasil evaluasi.", url: "https://drive.google.com/file/d/1P5Sq3voASIYnot7aSjb5DL28sU-eYhcY/view?usp=drive_link", kind: "document" },
        { icon: "VD", title: "Video Pembelajaran", note: "Rekaman pelaksanaan Siklus 4 atau video rangkuman tindakan.", url: "", kind: "video" },
        { icon: "RF", title: "Refleksi Siklus 4", note: "Rangkuman perubahan, capaian, hambatan tersisa, dan pembelajaran yang diperoleh.", url: "", kind: "document" },
        { icon: "TL", title: "Rencana Tindak Lanjut", note: "Komitmen mempertahankan praktik efektif dan mengembangkannya pada pembelajaran berikutnya.", url: "", kind: "document" }
      ]
    }
  };

  const selector = document.querySelector("#cycleSelector");
  const content = document.querySelector("#cycleContent");
  if (!selector || !content) return;

  const getPreviewUrl = value => {
    if (!/^https?:\/\//i.test(value || "")) return "";

    const url = value.trim();
    const drivePatterns = [
      /drive\.google\.com\/file\/d\/([^/?#]+)/i,
      /drive\.google\.com\/open\?id=([^&#]+)/i,
      /drive\.google\.com\/uc\?.*id=([^&#]+)/i
    ];

    for (const pattern of drivePatterns) {
      const match = url.match(pattern);
      if (match) return "https://drive.google.com/file/d/" + match[1] + "/preview";
    }

    return url;
  };

  const itemMarkup = item => {
    const url = getPreviewUrl(item.url);
    const preview = url
      ? '<div class="resource-preview"><iframe class="lazy-resource-frame" data-src="' + url + '" title="Pratinjau ' + item.title + '" loading="lazy" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>'
      : '<div class="resource-placeholder" aria-hidden="true"><span>' + item.icon + '</span><p>Pratinjau akan muncul di sini</p></div>';
    const status = url ? "" : '<div class="resource-action"><span class="resource-empty">TAUTAN BELUM DILAMPIRKAN</span></div>';
    return '<article class="resource-card"><div class="resource-heading"><span class="resource-icon">' + item.icon + '</span><div><span class="eyebrow">' + (item.kind === "video" ? "MEDIA VIDEO" : "DOKUMEN PDF") + '</span><h3>' + item.title + '</h3></div></div>' + preview + '<p class="muted">' + item.note + '</p>' + status + '</article>';
  };

  const cycleMarkup = cycleNumber => {
    const data = cycles[cycleNumber];
    return '<article class="cycle-vault" id="siklus-' + cycleNumber + '" data-cycle-section="' + cycleNumber + '" data-reveal><header class="vault-heading"><div class="course-code">S' + cycleNumber + '</div><div><span class="eyebrow">ARSIP PTK · ' + data.title.toUpperCase() + '</span><h2>' + data.title + '</h2><p>' + data.subtitle + '</p></div></header><div class="cycle-focus"><strong>Fokus tindakan</strong><p>' + data.focus + '</p></div><div class="cycle-story-grid"><section><span class="eyebrow">KONTEKS PEMBELAJARAN</span><p>' + data.context + '</p></section><section><span class="eyebrow">TUJUAN UTAMA</span><p>' + data.objectives + '</p></section><section><span class="eyebrow">REFLEKSI KEGIATAN</span><p>' + data.reflection + '</p></section><section><span class="eyebrow">RENCANA TINDAK LANJ</span><p>' + data.followUp + '</p></section></div><div class="resource-section-heading"><span class="eyebrow">DOKUMEN & MEDIA</span><h3>Wadah lampiran ' + data.title + '</h3><p>Tempel tautan publik untuk menampilkan pratinjau berkas dan video.</p></div><div class="resource-grid">' + data.items.map(itemMarkup).join("") + '</div></article>';
  };

  const setActiveCycle = cycleNumber => {
    document.querySelectorAll(".cycle-query-card").forEach(button => {
      const active = button.dataset.cycle === String(cycleNumber);
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const url = new URL(location.href);
    url.searchParams.set("siklus", cycleNumber);
    history.replaceState({}, "", url);
  };

  const renderAllCycles = () => {
    content.innerHTML = Object.keys(cycles).map(cycleMarkup).join("");
  };

  const loadFrame = frame => {
    if (!frame.dataset.src) return;
    frame.src = frame.dataset.src;
    frame.removeAttribute("data-src");
  };

  const activateLazyFrames = () => {
    const frames = document.querySelectorAll(".lazy-resource-frame[data-src]");
    if (!("IntersectionObserver" in window)) {
      frames.forEach(loadFrame);
      return;
    }
    const frameObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadFrame(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "350px 0px" });
    frames.forEach(frame => frameObserver.observe(frame));
  };

  const activateCycleReveal = () => {
    const cycleSections = document.querySelectorAll("#cycleContent [data-reveal]");

    if (!("IntersectionObserver" in window)) {
      cycleSections.forEach(section => section.classList.add("revealed"));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    cycleSections.forEach(section => revealObserver.observe(section));
  };

  renderAllCycles();
  activateCycleReveal();
  activateLazyFrames();

  const requested = new URLSearchParams(location.search).get("siklus");
  const initialCycle = cycles[requested] ? requested : "1";
  setActiveCycle(initialCycle);

  selector.addEventListener("click", event => {
    const button = event.target.closest(".cycle-query-card");
    if (!button) return;
    const cycleNumber = button.dataset.cycle;
    const target = document.querySelector("#siklus-" + cycleNumber);
    if (!target) return;
    setActiveCycle(cycleNumber);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if ("IntersectionObserver" in window) {
    const sections = document.querySelectorAll("[data-cycle-section]");
    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveCycle(visible.target.dataset.cycleSection);
    }, { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.35, 0.6] });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();
