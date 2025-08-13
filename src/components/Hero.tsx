import heroImage from "../assets/bg-gwk.jpg"

export default function Hero() {
    return (
        <div id="home" className="sm:h-[500px] mt-14 h-[600px] bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{ 
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: '50% 70%'
            }}
        >
            <div className="flex flex-col">
                <span className="sm:text-2xl text-center text-white text-shadow-amber-100 font-semibold">Selamat Datang di</span>
                <h1 className="text-[27px] sm:text-4xl font-bold uppercase text-center text-white "
                    style={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                    }}
                >
                    SENARIDIMAS 2025<br></br> (SENARI DAN SENADIMAS )
                </h1>
                <h2 className="text-white text-center sm:text-2xl uppercase pb-1 font-semibold text-shadow-2xs">Seminar Hasil Penelitian dan Seminar Hasil Pengabdian Masyarakat</h2>
                <p className="text-center text-white shadow-2xl pt-1 text-base sm:text-lg">
                    Riset dan Pengabdian untuk Indonesia: Mewujudkan Kampus Berdampak dalam Pembangunan Berkelanjutan
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-7">
                    <a href="https://eproceeding.undiksha.ac.id/index.php/senari" target="_blank">
                        <button className="uppercase text-white text-lg bg-purple-700 hover:scale-105 transition-all ease-in-out duration-500 rounded-full py-2 px-6 font-semibold">
                            Submit Artikel Senari
                        </button>
                    </a>
                    <a href="https://eproceeding.undiksha.ac.id/index.php/SENADIMAS" target="_blank">
                        <button className="uppercase text-white text-lg bg-green-700 hover:scale-105 transition-all ease-in-out duration-500 rounded-full py-2 px-6 font-semibold">
                            Submit Artikel Senadimas
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}