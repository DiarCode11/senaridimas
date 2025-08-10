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
                <h1 className="text-5xl sm:text-5xl font-bold uppercase text-center text-white shadow-2xl"
                    style={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                    }}
                >
                    <span className="text-2xl text-shadow-amber-100 font-semibold">Selamat Datang di</span>
                    <br></br>
                    SENARIDIMAS 2025 (SENARI DAN SENADIMAS )
                </h1>
                <p className="text-center text-white shadow-2xl">
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