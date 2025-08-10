import { LinkIcon } from "lucide-react"
import type { ReactNode } from "react"

type detailsProps = {
    title: ReactNode,
    desc: string
}

type rightSidebarProps = {
    title: string,
    desc: ReactNode
}

export default function About() {
    const details : detailsProps[] = [
        {
            title: <>Apa itu <strong className="uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-purple-700">Senaridimas</strong>?</>,
            desc: "SENARIDIMAS (Seminar Nasional Riset Inovatif dan Pengabdian kepada Masyarakat) adalah forum ilmiah nasional yang diselenggarakan oleh LPPM Universitas Pendidikan Ganesha (Undiksha). Kegiatan ini merupakan gabungan dari dua seminar besar yakni SENARI dan SENADIMAS."
        },
        {
            title: <><strong className="uppercase font-bold text-purple-700">Senari</strong></>,
            desc: "SENARI (Seminar Nasional Riset Inovatif) pertama kali digelar pada tahun 2013 oleh LEMLIT Undiksha. Tujuannya yaitu membangun kultur akademik melalui penyebaran hasil-hasil penelitian inovatif para dosen dan peneliti dari seluruh Indonesia. Kini, SENARI telah berkembang menjadi forum ilmiah nasional yang tidak hanya mewadahi akademisi dari Undiksha dan wilayah Nusa Tenggara, tetapi juga seluruh Indonesia."
        },
        {
            title: <><strong className="uppercase font-bold text-green-700">Senadimas</strong></>,
            desc: "SENADIMAS (Seminar Nasional Pengabdian kepada Masyarakat) bertujuan untuk mewadahi para dosen/pengabdi di Indonesia untuk dapat saling bertukar informasi dan metode pengabdian kepada masyarakat yang tepat untuk kemajuan Bangsa Indonesia. Sehingga dapat dimanfaatkan dengan baik oleh para pembaca, pelaku industri serta pemerintah."
        },
    ];

    const rightSidebar: rightSidebarProps[] = [
        {
            title: "TEMA",
            desc: "Riset dan Pengabdian untuk Indonesia: Mewujudkan Kampus Berdampak dalam Pembangunan Berkelanjutan"
        },
        {
            title: "Waktu pelaksanaan",
            desc: "23-24 Oktober 2025"
        },
        {
            title: "Metode",
            desc: "Full Online"
        },
        {
            title: "Template Paper",
            desc: <div className="flex flex-col">
                <a href="https://conference.undiksha.ac.id/senari/assets/tamplate/Template%20Senari.docx">
                    <span className="flex items-center space-x-3 cursor-pointer hover:text-purple-700 hover:text-bold underline transition-all ease-in-out duration-300">
                        <LinkIcon size={15} />
                        <p>Link Template SENARI</p>
                    </span>
                </a>
                <a href="https://docs.google.com/document/d/1G5kaCHycK88zqj_m2JQpQQzXzrpDUKGE/edit?tab=t.0" target="_blank">
                    <span className="flex items-center space-x-3 cursor-pointer hover:text-green-700 hover:text-bold underline transition-all ease-in-out duration-300">
                        <LinkIcon size={15} />
                        <p>Link Template SENADIMAS</p>
                    </span>
                </a>
            </div>
        },
    ]

    return (
        <div id="about" className="mx-auto container">
            <div className="w-full grid sm:grid-cols-5 grid-cols-1 gap-12 py-20 px-5">
               <div className="sm:col-span-3">
                    { details.map((data, id) => (
                        <div key={id} className="w-full text-sm sm:text-base py-5">
                            <h1 className="text-gray-600 font-bold sm:text-3xl text-2xl text-center sm:text-start">{data.title}</h1>
                            <p className="text-gray-500 pt-2 text-center sm:text-start">{data.desc}</p>
                        </div>
                    )) }
               </div>
               <div className="w-full h-max sm:col-span-2  sm:sticky sm:top-20 select-none">
                    <div className="border border-gray-300 rounded-md">
                            { rightSidebar.map((data, id) => (
                                <div key={id} className="p-4 border-b border-gray-300">
                                    <h1 className="text-green-600 font-bold uppercase text-lg">{data.title}</h1>
                                    <p className="text-gray-600">{data.desc}</p>
                                </div>
                            )) }
                    </div>
                    {/* <a href="#payment">
                        <button className="py-2 mt-4 w-full border-2 rounded-md bg-purple-700 text-lg font-semibold text-white">Daftar Sekarang</button>
                    </a> */}
               </div>
            </div>
        </div>
    )
}