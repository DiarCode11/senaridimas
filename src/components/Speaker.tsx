import senariLogo from "../assets/2.png";
import senadimasLogo from "../assets/3.png";
import erlin from "../assets/speaker/erlin.jpg"
import purnamawati from "../assets/speaker/I-Gusti-Purnamawati.webp"
import lutfi from "../assets/speaker/lutfi.jpg"
import karyasa from "../assets/speaker/0009046901_photo_i_wayan_karyasa.jpg"

// Struktur data gabungan
const speakerGroups = [
  {
    category: "SENARI",
    logo: senariLogo,
    speakers: [
      { 
        id: 1, 
        name: "Erlin Puspaputri, S.Si., M.Sc.", 
        img: erlin,
        jabatan: <>Direktorat Riset, Teknologi, dan Pengabdian kepada masyarakat<br></br> KEMENTRIAN PENDIDIKAN, KEBUDAYAAN, RISET DAN TEKNOLOGI</>
      },
      { 
        id: 2, 
        name: "Prof. Dr. I Gusti Ayu Purnamawati, S.E., M.Si., Ak.", 
        img: purnamawati,
        jabatan: "Koordinator Program Studi Akuntansi Sektor Publik (D4) Fakultas Ekonomi Undiksha"
      },
    ],
  },
  {
    category: "SENADIMAS",
    logo: senadimasLogo,
    speakers: [
      { 
        id: 3, 
        name: "Luthfi Ilham Ramdhani, S. Sos", 
        img: lutfi,
        jabatan: <>Direktorat Riset, Teknologi, dan Pengabdian kepada masyarakat<br></br> KEMENTRIAN PENDIDIKAN, KEBUDAYAAN, RISET DAN TEKNOLOGI</>
      },
      { 
        id: 4, 
        name: "Prof. Dr.rer.nat. I Wayan Karyasa, S.Pd", 
        img: karyasa,
        jabatan: "Universitas Pendidikan Ganesha"
      },
    ],
  },
];

export default function Speaker() {
  return (
    <div id="speaker" className="bg-gradient-to-r from-green-700 to-purple-700 py-28 w-full ">
      {speakerGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="container mx-auto">
          {/* Header Logo + Judul */}
          <div
            className={`flex w-full justify-center items-center ${
              groupIndex > 0 ? "pt-40 space-x-4" : ""
            }`}
          >
            <h1 className="sm:text-3xl text-2xl text-white text-center">Narasumber</h1>
            <span>
              <img
                src={group.logo}
                className={group.category === "SENADIMAS" ? "w-44" : "w-40 -translate-y-1 pl-2"}
                alt={`Logo ${group.category}`}
              />
            </span>
          </div>

          {/* Daftar Narasumber */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-16 pt-10">
            {group.speakers.map((speaker, idx) => (
              <div key={idx}>
                <h1 className="text-center sm:text-xl px-5 text-white font-semibold pt-3">
                  Pembicara {speaker.id % 2 == 0 ? 2 : speaker.id % 2}
                </h1>
                <div className="w-full flex justify-center mt-5">
                  <div className="h-28 w-28 sm:h-40 sm:w-40  rounded-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
                    style={{
                      backgroundImage: `url(${speaker.img})`,
                      backgroundPosition: speaker.id == 3  ? '50% 0%': (speaker.id == 4 ? "50% 10%" : "50% 50%")
                    }}
                  ></div>
                </div>
                <h3 className="text-center sm:text-xl px-5 text-white font-semibold pt-3">
                  {speaker.name}
                </h3>
                <div className="flex justify-center">
                    <div className="sm:w-2/3 md:w-full px-4 text-center rounded-lg font-extrabold text-yellow-500/90 pt-1 text-base">
                      {speaker.jabatan}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
