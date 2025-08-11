import { useState, type ReactNode } from "react"
import { 
    Dialog, 
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "./ui/dialog"

type PriceCardProps = {
    id: number,
    title: string,
    price: string,
    desc: ReactNode,
    url: string
}

export default function Payment() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const priceList : PriceCardProps[] = [
        {
            id: 1,
            price: "Rp.200.000",
            title: "Pemakalah Undiksha",
            desc: <ul className="list-disc list-inside purple-bullet py-6 text-gray-600 text-lg">
                <li>Conference Book</li>
                <li>Sertifikat Pemakalah</li>
                <li>Prosiding Elektronik</li>
            </ul>,
            url: "#"
        },
        {
            id: 1,
            price: "Rp.300.000",
            title: "Pemakalah Luar Undiksha",
            desc: <ul className="list-disc list-inside purple-bullet py-6 text-gray-600 text-lg">
                <li>Conference Book</li>
                <li>Sertifikat Pemakalah</li>
                <li>Prosiding Elektronik</li>
            </ul>,
            url: "#"
        },
        {
            id: 1,
            price: "Rp.100.000",
            title: "Peserta",
            desc: <ul className="list-disc list-inside purple-bullet py-6 text-gray-600 text-lg">
                <li>Conference Book</li>
                <li>Sertifikat Pemakalah</li>
            </ul>,
            url: "#"
        },
    ] 

    return (
        <div id="payment" className=" bg-gradient-to-r from-green-700 to-purple-700 py-20">
            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="bg-white border-0">
                    <DialogHeader>
                        <DialogDescription>
                            <h3 className="text-center text-2xl px-5 pt-14">
                                Pilih salah satu dari seminar berikut untuk melanjutkan
                            </h3>
                            <div className="flex justify-center space-x-7 text-xl text-white py-10">
                                <a target="_blank" href="https://forms.gle/yjkfS7g99SBqyT7B9">
                                    <div className="bg-purple-700 w-full px-4 py-2 text-center rounded-lg transition-all duration-300 hover:scale-105">
                                        Senari
                                    </div>
                                </a>
                                <a target="_blank" href="https://forms.gle/7PxzY1ZTa5Gx6vnq5">
                                    <div className="bg-green-700 w-full px-4 py-2 text-center rounded-lg transition-all duration-300 hover:scale-105">
                                        Senadimas
                                    </div>
                                </a>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <div className="container mx-auto">
                <h1 className="text-center text-white sm:text-3xl text-2xl font-bold uppercase">biaya pendaftaran</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-10 gap-y-5 pt-10 sm:px-0 px-5">
                    { priceList.map((item, idx) => (
                        <div key={idx} className="bg-white p-5 flex flex-col rounded-lg">
                            <div>
                                <h1 className="text-green-700 font-semibold text-lg">{item.title}</h1>
                                <h2 className="opacity-85 text-3xl font-bold">{item.price}</h2>
                            </div>
                            <div className="flex-1">
                                {item.desc}
                            </div>
                            <button onClick={() => setOpenModal(true)} className="w-full cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-700 to-purple-700 text-white text-lg py-2 rounded">
                                Konfirmasi Pembayaran
                            </button>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}