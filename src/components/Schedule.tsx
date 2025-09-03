type scheduleProps = {
    id: number,
    date: string,
    desc: string
}

export default function Schedule() {
    const schedule: scheduleProps[] = [
        {
            id: 1,
            date: "Senin, 1 September 2025",
            desc: "Batas penerimaan abstrak (Senari)"
        },
        {
            id: 2,
            date: "Kamis, 4 September 2025",
            desc: "Pengumuman abstrak yang diterima (Senari)"
        },
        {
            id: 3,
            date: "Jumat, 19 September 2025",
            desc: "Batas penerimaan (abstrak/full paper) untuk SENARI dan batas penerimaan full paper untuk SENADIMAS"
        },
        {
            id: 4,
            date: "Senin, 22 September 2025",
            desc: "Pengumuman paper SENARI dan SENADIMAS yang diterima"
        },
        {
            id: 5,
            date: "Jumat, 26 September 2025",
            desc: "Batas pembayaran SENARI dan SENADIMAS"
        },
        {
            id: 6,
            date: "Jumat, 17 Oktober 2025",
            desc: "Pengumpulan video presentasi SENARI dan SENADIMAS"
        },
        {
            id: 7,
            date: "Kamis, 23 Oktober 2025",
            desc: "Pelaksanaan Senari"
        },
        {
            id: 8,
            date: "Jumat, 24 Oktober 2025",
            desc: "Pelaksanaan Senadimas"
        }
    ];

    const no_rek : string = "008801002740307";
    const atas_nama: string = "RPL 132 BLU UNDIKSHA UNTUK OPS NON BRIVA"
    const bank: string = "BRI";

    return (
        <div id="schedule" className="py-20 container mx-auto">
            <h1 className="w-full text-center c sm:text-3xl text-2xl font-bold uppercase">Jadwal & Pendaftaran</h1>
            <div className="grid grid-cols-1 sm:grid-cols-6 sm:gap-x-4 gap-y-5 pt-10 px-4">
                <div className="col-span-2 border border-gray-300 rounded-md">
                    <div className="p-5 border-b uppercase font-bold text-xl text-center sm:text-start">
                        Jadwal
                    </div>
                    <div>
                        <div className="px-6 py-2">
                            { schedule.map((item, idx) => (
                                <div key={idx} className="py-3 relative flex flex-col pl-7">
                                    <span className={`absolute left-0 w-1 bg-gray-400 z-10 ${idx == 0 ? 'h-1/2 bottom-0': (idx == schedule.length - 1 ? 'h-1/2 top-0' : 'h-full bottom-0')}`}></span>
                                    <span className="h-3 w-3 rounded-full bg-purple-700 absolute -left-1 z-20 top-1/2 -translate-y-3"></span>
                                    { item.id === 7 || item.id === 8 ? (
                                        <div className={`${item.id === 7 ? 'bg-purple-700' : 'bg-green-700'} p-3 rounded-lg`}>
                                            <h1 className="text-white font-bold text-xl">{item.date}</h1>
                                            <p className="text-white opacity-80">{item.desc}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <h1 className={`text-green-500 font-semibold text-lg ${(item.id === 1 || item.id === 2) && "line-through text-neutral-400"}`}>{item.date}</h1>
                                            <p className={`opacity-55 ${(item.id === 1 || item.id === 2) && "line-through text-neutral-400"}`}>{item.desc}</p>
                                        </div>
                                    )  }
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
                <div className="col-span-4 border border-gray-300 rounded-md">
                    <div className="p-5 border-b uppercase font-bold text-xl text-center">
                        Pendaftaran
                    </div>
                    <div className="py-5 px-7">
                        <h1 className="uppercase text-purple-700 font-bold text-2xl pb-3">Seminar Nasional Riset dan Inovasi (SENARI)</h1>
                        <ol className="list-decimal list-inside opacity-55 space-y-2">
                            <li>
                                Peserta dapat mendaftarkan Abstrak atau Full paper
                                <a target="_blank" href="https://eproceeding.undiksha.ac.id/index.php/SENARI/index" className="underline pl-1 font-semibold text-purple-700 ">
                                    di sini
                                </a>
                            </li>
                            <li>
                                Full paper yang diterima akan dipublikasikan dalam prosiding nasional ber-ISBN. Semua artikel dalam prosiding akan diberikan DOI dan terindeks Crossref serta Google Scholar.
                            </li>
                            <li>
                                Full paper terpilih akan <strong>DIREKOMENDASIKAN</strong> untuk dapat di-submit ke Jurnal Undiksha yang telah terakreditasi (SINTA 2).
                            </li>
                            <li>
                                Full paper ditulis dalam Bahasa Indonesia atau Bahasa Inggris sesuai <a target="_blank" href="https://conference.undiksha.ac.id/senari/assets/tamplate/Template%20Senari.docx" className="underline pl-1 font-semibold text-purple-700">template Senari</a>
                            </li>
                            <li>
                                Peserta yang dinyatakan diterima wajib menyiapkan file presentasi serta melakukan presentasi pada jadwal yang telah ditetapkan.
                            </li>
                            <li>
                                Pemakalah melakukan pembayaran ke no rek <strong>{no_rek} ({bank})</strong> a.n. <strong>{atas_nama}</strong> dan wajib konfirmasi <a target="_blank" href="https://forms.gle/yjkfS7g99SBqyT7B9" className="underline pl-1 font-semibold text-purple-700">disini</a>.
                            </li>
                        </ol>
                    </div>
                    <div className="py-5 px-7">
                        <h1 className="uppercase text-green-700 font-bold text-2xl pb-3">Seminar Nasional Pengabdian Kepada Masyarakat (Senadimas)</h1>
                        <ol className="list-decimal list-inside opacity-55 space-y-3">
                            <li>
                                Pemakalah wajib mengumpulkan artikel/makalah lengkap (full paper) yang nantinya akan melalui proses blind review
                                <a target="_blank" href="https://eproceeding.undiksha.ac.id/index.php/SENADIMAS" className="underline pl-1 font-semibold text-green-700 ml-1">di sini</a>
                            </li>
                            <li>
                                Full paper ditulis dalam Bahasa Indonesia atau Bahasa Inggris sesuai 
                                <a target="_blank" href="https://docs.google.com/document/d/1G5kaCHycK88zqj_m2JQpQQzXzrpDUKGE/edit?tab=t.0" className="underline pl-1 font-semibold text-green-700 ml-1">template Senadimas</a>
                            </li>
                            <li>
                                Pemakalah yang full papernya dinyatakan diterima wajib mengunggah video presentasinya pada Akun Google Drive pribadi dan di-set <em>Open Access</em>.
                                Tautan video presentasi tersebut dicantumkan pada form konfirmasi pembayaran.
                                <div className="mt-1 space-x-3">
                                <a target="_blank" href="https://conference.undiksha.ac.id/senadimas/assets/file/template_video.pdf" className="underline pl-1 font-semibold text-green-700">Tautan Ketentuan Video</a>
                                </div>
                            </li>
                            <li>
                                Pemakalah melakukan pembayaran ke no rek <strong>{no_rek} ({bank})</strong> a.n. <strong>{atas_nama}</strong> dan wajib konfirmasi <a target="_blank" href="https://forms.gle/7PxzY1ZTa5Gx6vnq5" className="underline pl-1 font-semibold text-green-700">disini</a>.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}