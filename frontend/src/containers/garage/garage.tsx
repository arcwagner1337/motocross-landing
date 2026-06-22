import { useState } from 'react';


interface Bike {
    id: string;
    name: string;
    status: 'Ready' | 'In Progress' | 'Testing';
    progress: number;
    specs: { engine: string; suspension: string; ecu: string };
}

export const Garage = () => {
    const [selectedBike, setSelectedBike] = useState<string>('KTM_450');

    const bikes: Bike[] = [
        {
            id: 'KTM_450',
            name: 'KTM 450 SX-F Factory Edition',
            status: 'In Progress',
            progress: 85,
            specs: { engine: 'Stage 2 Camshaft', suspension: 'WP XACT Cone Valve', ecu: 'GET Custom Map' }
        },
        {
            id: 'HQV_250',
            name: 'Husqvarna FC 250',
            status: 'Ready',
            progress: 100,
            specs: { engine: 'Stock OEM+', suspension: 'WP AER 48', ecu: 'Standard' }
        },
        {
            id: 'gsgs250',
            name: 'GASGAS EC 250',
            status: 'Ready',
            progress: 100,
            specs: { engine: 'Stock OEM+', suspension: 'WP AER 48', ecu: 'Standard' }
        }
    ];


    const bikes2 = [
        {
            id: "CUSTOM-001",
            name: "KTM 450 EXC-F (SIX DAYS EDITION)",
            image: new URL('../../visuals/ktm-inwork.jpg', import.meta.url).href,
            specs: ["Мотор: Ребилд (Wossner Piston)", "Подвеска: Тюнинг Lab Revalve", "Защита: Artafon (Full Set)"],
            status: "COMPLETED",
            history: [{ date: "12.01", event: "Поступление: Замена ЦПГ" }, { date: "15.01", event: "Настройка мозгов Lab" }, { date: "18.01", event: "Финальная дефектовка" }]
        },
        {
            id: "CUSTOM-002",
            name: "HUSQVARNA TE 300i (2024)",
            image: new URL('../../visuals/complete-husqv.jpg', import.meta.url).href,
            specs: ["Мотор: Замена коленвала", "Выхлоп: FMF Factory Fatty", "Электроника: Вентилятор Spal Map Switch"],
            status: "IN WORK // 70%",
            history: [{ date: "08.01", event: "Заказ запчастей OEM" }, { date: "11.01", event: "Замена поршня Ребилд" }]
        },
        {
            id: "CUSTOM-003",
            name: "GASGAS EC 250 (THE BEAST)",
            image: new URL('../../visuals/gasgas-repare.jpg', import.meta.url).href,
            specs: ["Тормоза: Переборка суппортов", "Шины: Установка муссов Michelin"],
            status: "AWAITING PARTS",
            history: [{ date: "05.01", event: "Дефектовка трансмиссии" }]
        }
    ];

    return (

        <div
            className="min-h-screen bg-black text-white font-sans selection:bg-orange-600 selection:text-white relative select-none"
            style={{
              
                backgroundImage: `url(${new URL('../../visuals/road.jpg', import.meta.url).href})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', 
            }}
        >
         
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            <div className="relative z-10 pb-20">

            
                <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
                    <div className="mb-10">
                        <h2 className="text-6xl font-[900] uppercase italic tracking-tighter leading-none text-white">
                            THE <span className="text-orange-600">FLEET</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                       
                        <div className="md:col-span-2 md:row-span-2 bg-[#111] border border-white/5 relative group overflow-hidden shadow-xl min-h-[300px] md:min-h-full">
                            <img
                                src={new URL('../../visuals/engine.png', import.meta.url).href}
                                className="absolute inset-0 w-full h-full object-contain p-12 grayscale group-hover:grayscale-0 transition-all duration-700 z-10"
                                alt="Engine"
                            />
                            <div className="absolute bottom-10 left-10 z-20">
                                <span className="bg-orange-600 text-black text-[10px] font-black px-2 py-0.5 mb-3 inline-block">
                                    CURRENT PROJECT
                                </span>
                                <h3 className="text-4xl font-black uppercase italic tracking-tight text-white">
                                    KTM 450 SX-F 2024
                                </h3>
                            </div>
                        </div>

                 
                        <div className="bg-orange-600 p-10 flex flex-col justify-between items-start shadow-xl">
                            <span className="text-orange-950 text-[10px] font-mono font-bold uppercase tracking-widest">Total_Bikes</span>
                            <div className="text-[140px] font-black italic leading-[0.8] tracking-tighter text-black">04</div>
                        </div>

                
                        <div className="p-4 bg-[#111] border border-white/5 flex flex-col items-center justify-center group cursor-pointer shadow-xl">
                            <div className="w-16 h-16 border-2 border-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-orange-600 border-b-[8px] border-b-transparent ml-1 group-hover:border-l-white"></div>
                            </div>
                          
                        </div>



                        <div className="md:col-span-2 bg-[#111] border border-white/10 relative overflow-hidden group shadow-xl min-h-[300px] md:min-h-full">
                        
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                            <img
                                src={new URL('../../visuals/husqvarna1.jpg', import.meta.url).href}
                                alt="Husqvarna FC 250"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-105"
                                onError={(e) => console.error("Husq image error:", e)}
                            />

                            <div className="absolute bottom-8 left-8 z-20">
                                <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white leading-none">
                                    Husqvarna <span className="text-orange-600">FC 250</span>
                                </h4>
                                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mt-1">                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            
                <div className="max-w-7xl mx-auto px-6 py-1">
                    <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
                        <div>
                            <h2 className="text-7xl font-black uppercase italic tracking-tighter text-white">UNIT <span className="text-orange-600">01</span></h2>
                        </div>
                        <div className="hidden md:block text-right font-mono text-[9px] text-neutral-600 uppercase">                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10">
                
                        <div className="lg:col-span-4 space-y-4">
                            {bikes.map((bike) => (
                                <button
                                    key={bike.id}
                                    onClick={() => setSelectedBike(bike.id)}
                                    className={`w-full text-left p-6 border-l-4 transition-all shadow-lg ${selectedBike === bike.id
                                        ? 'border-orange-600 bg-orange-600/5 bg-[#111]'
                                        : 'border-transparent bg-[#0a0a0a] hover:bg-[#111] text-neutral-500 hover:text-white'
                                        }`}
                                >
                                    <div className="flex justify-between text-[9px] font-mono mb-2 uppercase">
                                        <span>{bike.id}</span>
                                        <span className={bike.status === 'Ready' ? 'text-green-500' : 'text-orange-600'}>{bike.status}</span>
                                    </div>
                                    <h3 className="font-black uppercase italic text-xl tracking-tight text-white">{bike.name}</h3>
                                </button>
                            ))}
                        </div>

               
                        <div className="lg:col-span-8 bg-[#111] border border-white/5 p-12 relative overflow-hidden shadow-2xl">
                            <div className="flex justify-between items-start mb-12">
                                <h4 className="text-3xl font-black uppercase italic tracking-tighter text-white">Specifications</h4>
                                <span className="font-mono text-[10px] text-orange-600 uppercase">DATA_EXTRACT_v4.2</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-10">
                                    <div>
                                        <label className="text-[10px] text-neutral-600 font-mono font-bold uppercase block mb-3">Engine_Config</label>
                                        <p className="text-base font-mono text-white border-l-2 border-orange-600 pl-5 uppercase leading-snug">
                                            {bikes.find(b => b.id === selectedBike)?.specs.engine}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] text-neutral-600 font-mono font-bold uppercase block mb-3">Suspension_Setup</label>
                                        <p className="text-base font-mono text-white border-l-2 border-orange-600 pl-5 uppercase leading-snug">
                                            {bikes.find(b => b.id === selectedBike)?.specs.suspension}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-black p-6 font-mono text-[10px] text-neutral-500 border border-white/5 space-y-2">
                                    <p className="text-orange-600 font-bold mb-4 uppercase tracking-widest">TERMINAL_LOG:</p>
                                    <p>[14:02] OIL PRESSURE: OK</p>
                                    <p>[14:10] ECU CHECKSUM: 0x99FA2</p>
                                    <p>[14:15] TPS SYNCED</p>
                                    <p className="mt-6 text-white animate-pulse">_WAITING_FOR_INPUT...</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

       
                <div className="px-6 shadow-inner">

                    <div className="bg-orange-600 max-w-7xl mx-auto py-18 md:py-32 mt-20 relative shadow-inner">
                        <div className="max-w-7xl mx-auto px-12">
                            <h2 className="text-[54px] sm:text-[80px] md:text-[120px] font-black uppercase italic tracking-tighter mb-12 sm:mb-24 text-black leading-[0.9] sm:leading-[0.8] break-words">
                                LOFT <span className="text-white">BUILDS</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                                {bikes2.map(bike => (
                                    <div key={bike.id} className="relative group">
                                  
                                        <div className="absolute -inset-2 bg-black -z-10 group-hover:-inset-3 transition-all"></div>

                                        <div className="bg-[#111] p-8 border border-white/10 relative h-full flex flex-col shadow-2xl">
                                    
                                            <div className={`absolute -right-3 top-6 px-5 py-1 text-[11px] font-black uppercase rotate-[15deg] z-30 shadow-xl ${bike.status.includes('IN WORK') ? 'bg-orange-600 text-black' : 'bg-green-600 text-white'
                                                }`}>
                                                {bike.status}
                                            </div>

                                            <div className="mb-6">
                                                <span className="font-mono text-[10px] text-neutral-600">{bike.id}</span>
                                                <h3 className="text-2xl font-black uppercase italic tracking-tight leading-tight mt-1 text-white">{bike.name}</h3>
                                            </div>

                                            <div className="aspect-video bg-neutral-900 overflow-hidden border border-white/5 mb-8">
                                                <img src={bike.image} className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                                            </div>

                                            <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-8 mb-10">
                                                <div className="space-y-4">
                                                    <h4 className="text-orange-600 font-black uppercase text-[10px] tracking-widest">Кастомизация</h4>
                                                    <div className="text-[10px] font-mono text-neutral-400 uppercase leading-relaxed space-y-1">
                                                        {bike.specs.map(s => <p key={s}>• {s.split(':')[1] || s}</p>)}
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="text-orange-600 font-black uppercase text-[10px] tracking-widest">История</h4>
                                                    <div className="text-[10px] font-mono leading-relaxed space-y-1">
                                                        {bike.history.map(h => (
                                                            <p key={h.date} className="flex gap-2">
                                                                <span className="text-white font-bold">{h.date}</span>
                                                                <span className="text-neutral-500 uppercase truncate">{h.event}</span>
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="mt-auto w-full py-4 bg-transparent border-2 border-orange-600 text-orange-600 text-[11px] font-black uppercase tracking-widest hover:bg-orange-600 hover:text-black transition-all">
                                                Посмотреть подробности кастома
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

        
                <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20 mb-10">
                    <div className="bg-[#0D0D0D] border border-white/10 p-8 sm:p-12 relative flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 shadow-2xl overflow-hidden">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-orange-600 flex items-center justify-center rotate-45 shrink-0 mb-4 sm:mb-0">
                                <span className="text-3xl sm:text-4xl font-black -rotate-45 text-orange-600">?</span>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-black uppercase italic tracking-tight text-white leading-tight">Твой байк — следующий кастом?</h3>
                                <p className="text-neutral-500 text-[9px] sm:text-[11px] uppercase tracking-widest mt-3 max-w-md leading-relaxed">
                                    Мы беремся за проекты любой сложности. Забронируй место в Loft Garage.
                                </p>
                            </div>
                        </div>
                        <button className="w-full lg:w-auto bg-white text-black px-10 sm:px-16 py-4 sm:py-5 font-black uppercase italic tracking-tighter text-lg sm:text-xl hover:bg-orange-600 hover:text-white transition-all shadow-lg">
                            ОБСУДИТЬ ПРОЕКТ
                        </button>
                    </div>
                </div>

            </div> 
        </div>



    );
   

};

export default Garage;