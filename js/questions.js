// js/questions.js

const sections = [
  // 1
  {
    type: "realistic",
    question:
      "Saya tertarik mencoba kegiatan yang melibatkan praktik langsung dibanding hanya teori.",
  },

  // 2
  {
    type: "investigative",
    question:
      "Saya tertarik memahami alasan atau penyebab dari suatu kejadian.",
  },

  // 3
  {
    type: "artistic",
    question:
      "Saya tertarik mengikuti kegiatan yang berhubungan dengan seni atau kreativitas.",
  },

  // 4
  {
    type: "social",
    question:
      "Saya merasa senang ketika dapat membantu teman yang sedang mengalami kesulitan.",
  },

  // 5
  {
    type: "enterprising",
    question:
      "Saat kerja kelompok, saya tertarik menjadi orang yang mengatur jalannya diskusi atau kegiatan.",
  },

  // 6
  {
    type: "conventional",
    question:
      "Saya merasa nyaman mengerjakan tugas yang berkaitan dengan pencatatan atau pengelolaan data.",
  },

  // 7
  {
    type: "realistic",
    question:
      "Saya senang mempelajari cara menggunakan alat atau perangkat tertentu.",
  },

  // 8
  {
    type: "investigative",
    question:
      "Saya senang mempelajari hal baru yang berkaitan dengan pengetahuan atau ilmu tertentu.",
  },

  // 9
  {
    type: "artistic",
    question:
      "Saya senang mencoba membuat sesuatu yang unik menggunakan ide saya sendiri.",
  },

  // 10
  {
    type: "social",
    question:
      "Saat ada kegiatan yang bertujuan membantu orang lain, saya tertarik untuk ikut terlibat.",
  },

  // 11
  {
    type: "enterprising",
    question:
      "Saya senang ketika diberi kesempatan menentukan keputusan dalam suatu kegiatan bersama.",
  },

  // 12
  {
    type: "conventional",
    question:
      "Saya tertarik pada kegiatan yang mengharuskan dokumen atau informasi disusun dengan rapi.",
  },

  // 13
  {
    type: "realistic",
    question:
      "Saya merasa tertarik pada kegiatan yang menggunakan alat, mesin, atau peralatan kerja.",
  },

  // 14
  {
    type: "investigative",
    question:
      "Saya tertarik mencari informasi dari berbagai sumber untuk memahami suatu masalah.",
  },

  // 15
  {
    type: "artistic",
    question:
      "Saya suka mengekspresikan perasaan atau ide melalui karya kreatif.",
  },

  // 16
  {
    type: "social",
    question: "Saya merasa nyaman berbicara dan berkenalan dengan orang baru.",
  },

  // 17
  {
    type: "enterprising",
    question:
      "Saya merasa senang ketika berhasil meyakinkan orang lain terhadap ide yang saya sampaikan.",
  },

  // 18
  {
    type: "conventional",
    question:
      "Saya lebih nyaman mengerjakan tugas dengan langkah kerja yang jelas dan teratur.",
  },

  // 19
  {
    type: "realistic",
    question:
      "Saya senang mengamati cara kerja alat atau benda yang digunakan dalam suatu pekerjaan.",
  },

  // 20
  {
    type: "investigative",
    question:
      "Saat menemukan topik yang menarik, saya ingin mencari tahu lebih dalam tentang topik tersebut.",
  },

  // 21
  {
    type: "artistic",
    question:
      "Saya merasa lebih nyaman menyampaikan ide dengan cara yang kreatif dan berbeda.",
  },

  // 22
  {
    type: "social",
    question:
      "Saya menikmati kegiatan yang mengharuskan saya bekerja dan berkomunikasi dengan banyak orang.",
  },

  // 23
  {
    type: "enterprising",
    question:
      "Saat berdiskusi, saya berusaha menyampaikan pendapat dengan percaya diri agar orang lain memahami maksud saya.",
  },

  // 24
  {
    type: "conventional",
    question:
      "Saya menyukai kegiatan yang memiliki jadwal dan aturan kerja yang pasti.",
  },

  // 25
  {
    type: "realistic",
    question:
      "Saya lebih tertarik terlibat langsung di lapangan dibanding hanya melihat dari jauh.",
  },

  // 26
  {
    type: "investigative",
    question:
      "Saya tertarik mempelajari konsep atau teori yang menjelaskan bagaimana sesuatu dapat terjadi.",
  },

  // 27
  {
    type: "artistic",
    question:
      "Saya sering membayangkan ide atau konsep baru dalam suatu kegiatan.",
  },

  // 28
  {
    type: "social",
    question:
      "Saya tertarik membantu teman memahami pelajaran yang belum mereka mengerti.",
  },

  // 29
  {
    type: "enterprising",
    question:
      "Saya tertarik mengikuti kegiatan yang berhubungan dengan bisnis atau jual beli.",
  },

  // 30
  {
    type: "conventional",
    question:
      "Saya terbiasa memeriksa kembali tugas agar tidak ada kesalahan kecil yang terlewat.",
  },

  // 31
  {
    type: "realistic",
    question:
      "Saya menyukai kegiatan yang dilakukan langsung di lokasi kerja atau praktik.",
  },

  // 32
  {
    type: "investigative",
    question:
      "Saya menikmati pelajaran yang mengajak berpikir logis dan memahami hubungan antar konsep.",
  },

  // 33
  {
    type: "artistic",
    question:
      "Saya senang memikirkan cara yang berbeda dan tidak biasa untuk membuat sesuatu.",
  },

  // 34
  {
    type: "social",
    question:
      "Ketika teman memiliki masalah, saya berusaha mendengarkan dan memberi dukungan kepada mereka.",
  },

  // 35
  {
    type: "enterprising",
    question:
      "Saya senang mencari ide kegiatan atau usaha yang dapat menghasilkan keuntungan.",
  },

  // 36
  {
    type: "conventional",
    question:
      "Saya memperhatikan detail saat mengerjakan tugas atau mengisi data tertentu.",
  },

  // 37
  {
    type: "realistic",
    question:
      "Saat ada alat atau benda yang bermasalah, saya tertarik mencari tahu penyebabnya.",
  },

  // 38
  {
    type: "investigative",
    question:
      "Saya senang membaca informasi atau artikel yang menambah wawasan baru bagi saya.",
  },

  // 39
  {
    type: "artistic",
    question:
      "Saya tertarik membuat karya yang memiliki ciri khas atau gaya sendiri.",
  },

  // 40
  {
    type: "social",
    question:
      "Saya ikut merasa sedih ketika melihat orang lain mengalami kesulitan.",
  },

  // 41
  {
    type: "enterprising",
    question:
      "Saya merasa cukup percaya diri saat berbicara di depan kelas atau banyak orang.",
  },

  // 42
  {
    type: "conventional",
    question:
      "Saya berusaha mengikuti aturan yang berlaku saat mengerjakan suatu tugas atau kegiatan.",
  },

  // 43
  {
    type: "realistic",
    question:
      "Saya senang mencoba menemukan cara memperbaiki masalah pada alat atau perangkat tertentu.",
  },

  // 44
  {
    type: "investigative",
    question:
      "Saya tertarik mencari pengetahuan baru tentang topik yang membuat saya penasaran.",
  },

  // 45
  {
    type: "artistic",
    question:
      "Saya merasa puas ketika berhasil menghasilkan sesuatu dari ide pribadi saya.",
  },

  // 46
  {
    type: "social",
    question:
      "Saya berusaha memahami perasaan teman ketika dia bercerita kepada saya.",
  },

  // 47
  {
    type: "enterprising",
    question:
      "Saya nyaman memperkenalkan diri dan berinteraksi dengan orang baru dalam suatu kegiatan.",
  },

  // 48
  {
    type: "conventional",
    question:
      "Saya merasa lebih nyaman bekerja sesuai aturan yang sudah ditentukan.",
  },

  // 49
  {
    type: "realistic",
    question:
      "Saya nyaman melakukan kegiatan yang membutuhkan keterampilan tangan dan koordinasi tubuh.",
  },

  // 50
  {
    type: "investigative",
    question:
      "Saya merasa tertarik pada kegiatan yang melibatkan perhitungan, data, atau eksperimen.",
  },

  // 51
  {
    type: "artistic",
    question:
      "Saya memperhatikan warna, bentuk, atau tampilan agar terlihat menarik.",
  },

  // 52
  {
    type: "social",
    question: "Saya semangat mengerjakan tugas yang sifatnya berkelompok.",
  },

  // 53
  {
    type: "enterprising",
    question:
      "Saya merasa termotivasi untuk mencapai hasil yang lebih baik dibanding sebelumnya.",
  },

  // 54
  {
    type: "conventional",
    question:
      "Saya merasa cukup nyaman mengerjakan tugas yang melibatkan angka atau data.",
  },

  // 55
  {
    type: "realistic",
    question:
      "Saya menikmati aktivitas yang melibatkan praktik langsung menggunakan tangan atau alat kerja.",
  },

  // 56
  {
    type: "investigative",
    question:
      "Saya menikmati pelajaran yang berkaitan dengan matematika atau sains.",
  },

  // 57
  {
    type: "artistic",
    question:
      "Saya senang menata sesuatu supaya terlihat lebih indah dan nyaman dilihat.",
  },

  // 58
  {
    type: "social",
    question:
      "Saat kerja kelompok, saya senang bekerja sama agar semua anggota dapat menyelesaikan tugas dengan baik.",
  },

  // 59
  {
    type: "enterprising",
    question:
      "Saya senang mengikuti kegiatan yang menantang kemampuan saya untuk mencapai prestasi tertentu.",
  },

  // 60
  {
    type: "conventional",
    question:
      "Saya merasa senang mengatur atau memeriksa dokumen dengan teliti.",
  },
  // 61
  {
    type: "realistic",
    question:
      "Saya lebih menyukai kegiatan yang hasilnya dapat langsung dilihat secara nyata.",
  },

  // 62
  {
    type: "investigative",
    question:
      "Saya senang mengikuti kegiatan yang mengajak berpikir dan memecahkan masalah.",
  },

  // 63
  {
    type: "artistic",
    question:
      "Saya lebih nyaman mengerjakan tugas dengan cara yang bebas dan tidak terlalu kaku.",
  },

  // 64
  {
    type: "social",
    question:
      "Saya tertarik mengikuti kegiatan sosial atau pengabdian di lingkungan rumah ataupun sekolah.",
  },

  // 65
  {
    type: "enterprising",
    question:
      "Saya tertarik menyusun rencana agar suatu kegiatan dapat berjalan dengan baik.",
  },

  // 66
  {
    type: "conventional",
    question:
      "Saya menyukai lingkungan kerja atau belajar yang tertata dan terorganisasi dengan baik.",
  },

  // 67
  {
    type: "realistic",
    question:
      "Saya merasa lebih nyaman mengerjakan aktivitas yang jelas dan dapat dipraktikkan secara langsung.",
  },

  // 68
  {
    type: "investigative",
    question:
      "Saya tertarik pada aktivitas yang membutuhkan analisis dan pemahaman mendalam terhadap suatu topik.",
  },

  // 69
  {
    type: "artistic",
    question:
      "Saya menyukai kegiatan yang memberi kesempatan untuk berkreasi sesuai gaya sendiri.",
  },

  // 70
  {
    type: "social",
    question:
      "Saya senang terlibat dalam kegiatan sekolah yang bertujuan membantu masyarakat atau orang lain.",
  },

  // 71
  {
    type: "enterprising",
    question:
      "Saat ada kegiatan bersama, saya senang membantu mengatur tugas dan koordinasi anggota kelompok.",
  },

  // 72
  {
    type: "conventional",
    question:
      "Saya merasa lebih nyaman ketika kegiatan berjalan sesuai rencana yang sudah disusun sebelumnya.",
  },
];
