import { useState } from 'react'

interface NavigationProps {
    onNavigate: (page: string) => void;
}


const MainPage = ({ onNavigate }: NavigationProps) => {



    const ktm1 = new URL('../../visuals/ktm1.jpg', import.meta.url).href;


    type ServiceKey = 'motocross' | 'enduro' | 'pitbike';

  
    const [activeTab, setActiveTab] = useState<ServiceKey>('motocross');


    const services: Record<ServiceKey, {
        title: string;
        desc: string;
        features: string[];
        img: string;
    }> = {
        motocross: {
            title: "Motocross / Supercross",
            desc: "Максимальная производительность для закрытых трасс. Настройка под взрывной старт и жесткие приземления.",
            features: ["Ревалвинг под прыжки", "Настройка Launch Control", "Шиповка и зацепистая резина", "Тюнинг выхлопа"],
            img: new URL('../../visuals/cross.jpg', import.meta.url).href 
        },
        enduro: {
            title: "Hard Enduro / Cross Country",
            desc: "Подготовка к камням, бревнам и затяжным подъемам. Ресурс и мягкость работы в приоритете.",
            features: ["Установка муссов", "Защита картера и рычагов", "Вентиляторы охлаждения", "Мягкая настройка подвески"],
            img: new URL('../../visuals/enduro.jpg', import.meta.url).href
        },
        pitbike: {
            title: "Pitbike Custom",
            desc: "Обслуживание и тюнинг малокубатурной техники. От фановых покатушек до серьезных соревнований.",
            features: ["Замена масла и фильтров", "Настройка карбюратора", "Усиление рам и маятников", "Подбор звезд на тягу"],
            img: new URL('../../visuals/pitbike.jpg', import.meta.url).href
        }
    };


    return (

        
        <div className="min-h-screen bg-[#121212] text-white font-mono select-none -webkit-touch-callout-none antialiased">


            <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center">

         
                <div className="absolute inset-0 z-0 group">
                    <img
                        src={new URL('../../visuals/bgr7.png', import.meta.url).href}
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 
                               object-[25%_bottom] md:object-bottom transition-transform duration-1000"
                       
                        alt="Motocross Action"
                    />

              

                </div>


         
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D35400]/10 blur-[120px] rounded-full pointer-events-none z-10"></div>

           
                <div className="relative z-20 w-full max-w-7xl mx-auto px-20 flex flex-col items-end text-right">

            
                    <h1 className="text-7xl md:text-[130px] font-black uppercase leading-[0.8] italic tracking-tighter text-white">
                        Built for <br />
                        <span className="text-[#D35400] drop-shadow-[0_10px_40px_rgba(211,84,0,0.5)]">the Dirt.</span>
                    </h1>

           
                    <div className="mt-16 group relative cursor-pointer ">
                        <div className="absolute -inset-1 bg-[#D35400] blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                        <button
                            onClick={() => onNavigate('workshop')}
                            className="relative px-16 py-5 bg-[#050505] border border-white/10 uppercase text-[10px] tracking-[0.5em] font-black group-hover:border-[#D35400] group-hover:text-white transition-all overflow-hidden">
                            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700"></div>
                            Enter Workshop
                        </button>
                    </div>
                </div>

              




                <div className="absolute bottom-6 md:bottom-10 w-full justify-end px-4 md:px-10 z-30">
                    <div className="flex flex-nowrap items-center justify-end gap-2 md:gap-8 opacity-100 grayscale brightness-500 border-white/5 pt-5  md:pt-8">

                       

                    </div>
                </div>
            </main>



      

            <div
                className="-mt-[5px] min-h-screen bg-black text-white font-sans selection:bg-orange-600 selection:text-white relative"
                style={{
                    backgroundImage: `url(${new URL('../../visuals/bgr14.jpg', import.meta.url).href})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    
                }}
            >
               
                <div className="absolute inset-0">
                
                    <div className="absolute inset-0 bg-gradient-to-b from-black from-0% via-transparent via-20% to-transparent" />

               
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] from-0% via-transparent via-30% to-transparent" />
                </div>


                <section className="z-10 relative pb-10 md:pb-20 px-10 overflow-hidden group/main">

                   

                    <div className="relative max-w-8xl mx-auto z-20 pb-20 md:pt-1">

                  
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
                            <div className="relative">
                            
                                <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#D35400]"></div>

                                <h2 className="text-5xl px-5 md:text-7xl font-black uppercase mt-3 italic tracking-tighter text-white">
                                    Recent <span className="text-[#D35400] drop-shadow-[0_10px_40px_rgba(211,84,0,0.5)]">Builds</span>
                                </h2>
                            </div>
                        </div>

                    
                        <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#D35400] bg-white/[0.02] overflow-hidden rounded-sm backdrop-blur-md  shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.7)]">

                        
                            <div className="lg:col-span-7 relative h-[400px] md:h-[600px] overflow-hidden">
                                <div className="absolute inset-0  z-10"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[200px] md:text-[250px] font-black italic select-none">
                                    KTM
                                </div>
                                <img
                                    src={ktm1}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    alt="Project Red Beast"
                                />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <span className="bg-[#D35400] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest shadow-lg">Project: Red Beast</span>
                                </div>
                            </div>

                  
                            <div className="bg-black lg:col-span-5 p-10 md:p-16 flex flex-col justify-center border-l border-white/5 relative z-20">
                            
                                <div className="absolute top-10 left-10 text-[100px] font-black italic text-white/[0.03] select-none">01</div>

                                <div className="flex items-center gap-3 mb-8 relative z-20">
                                    <div className="h-1 w-1 bg-[#D35400]"></div>
                                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#D35400] font-black">2026 / CROSS / 450 SX-F</span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black uppercase italic mb-8 tracking-tighter text-white relative z-20">KTM 450 SX-F <span className="text-[#D35400]">Edition</span></h3>

                                <div className="grid grid-cols-1 gap-3 mb-12 relative z-20">
                                    {[
                                        { label: 'Suspension', val: 'WP XACT PRO // Re-valve' },
                                        { label: 'Engine', val: 'Vertex Piston // Porting' },
                                        { label: 'ECU', val: 'GET // Mapping Div' },
                                        { label: 'Tires', val: 'Dunlop MX // Dirt Div' }
                                    ].map((spec, i) => (
                                        <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                                            <span className="text-[10px] uppercase text-gray-500 font-bold">{spec.label}</span>
                                            <span className="text-xs uppercase text-gray-300 font-mono tracking-tighter">{spec.val}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="relative self-start px-12 py-4 group/btn overflow-hidden z-20 border border-white/5">
                                    <div className="absolute inset-0 bg-[#D35400] translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] text-white border-b border-[#D35400] pb-2 group-hover/btn:border-transparent transition-colors">
                                        View Full Build
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>

                  
                </section>



               




                <section className="relative px-4 md:px-10 overflow-hidden">
                    <div className="relative max-w-8xl mx-auto pb-10 z-10">

                      
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-8 md:mb-12 border-l-4 border-[#D35400] pl-4 md:pl-6 text-white">
                            Типичные проблемы <br />
                            <span className="opacity-50 text-base md:text-xl text-gray-300">с которыми мы справляемся</span>
                        </h2>

                        <div className="relative px-0 md:px-28 pb-24 md:pb-38 pt-1 md:pt-38">

                         
                            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                                <img
                                    src={new URL('../../visuals/race7.png', import.meta.url).href}
                                    className="
            rotate-90 scale-[1.5] sm:scale-[1.2] md:rotate-0 md:scale-100
            w-full h-full 
            object-contain 
            opacity-100 md:opacity-100 
            transition-all duration-500
        "
                                    style={{
                                       
                                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
                                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
                                    }}
                                    alt="RIDE Graffiti"
                                />
                            </div>

                          
                            <div className="relative grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 z-10 max-w-[650px] md:max-w-none mx-auto">
                                {[
                                    { title: "Мертвый запуск", desc: "Не заводится на холодную." },
                                    { title: "Вялая подвеска", desc: "Аморты текут или не отрабатывают." },
                                    { title: "Износ узлов", desc: "Цепь, звезды, сцепление." },
                                    { title: "Геометрия", desc: "Погнутые радиаторы и рули." },
                                    { title: "Мозги", desc: "Провалы в зажигании." },
                                    { title: "Впуск", desc: "Забитый инжектор/карб." },
                                    { title: "Тормоза", desc: "Вялый отклик или перегрев." },
                                    { title: "Электрика", desc: "Коротит после мойки." },
                                    { title: "Рама", desc: "Трещины после прыжков." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative bg-[#0d0d0d]/90 backdrop-blur-sm p-3 sm:p-6 md:p-10 border border-white/5 hover:border-[#D35400]/50 transition-all group overflow-hidden flex flex-col justify-center min-h-[120px] sm:min-h-[160px]">
                                        
                                        <h3 className="relative z-10 font-bold uppercase text-[15px] sm:text-sm md:text-lg mb-1 md:mb-2 text-white leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="relative z-10 text-gray-500 text-[13px] sm:text-xs md:text-sm leading-tight md:leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative pb-24 px-10 md:px-10 ">



                    

                    <div className="max-w-8xl mx-auto border border-[#D35400] relative overflow-hidden">

                        
                        <div className="absolute top-0 right-0 p-1 bg-[#D35400] text-[8px] font-bold text-black uppercase px-2 select-none">
                            Certified_Quality_Std
                        </div>

                        <div className="p-12 md:p-16 pb-24 md:pb-28 grayscale"
                            style={{
                                
                                backgroundImage: `url(${new URL('../../visuals/emergency-bgr.jpg', import.meta.url).href})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                
                            }}> 
                            <div className="mb-16">
                                <span className="text-[#D35400] text-xs tracking-[0.5em] uppercase font-bold">Standards</span>
                                <h2 className="text-4xl font-black uppercase mt-2 tracking-tighter italic">Why Loft Project?</h2>
                            </div>

                          
                            <div className="bg-black grid grid-cols-1 md:grid-cols-4 gap-0 border border-l border-[#D35400]">
                                <div className="p-10 border-b border-[#D35400] hover:bg-[#D35400]/5 transition-all duration-500 group relative">
                                    

                                    <div className="relative z-10">
                                     
                                        <div className="w-12 h-12 border-2 border-[#D35400] rounded-sm flex items-center justify-center mb-8 font-mono text-[#D35400]">
                                            🔧
                                        </div>
                                        <h3 className="text-xl font-black uppercase mb-4 tracking-tight">Precision</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                            Сборка по заводским спецификациям. Каждый болт затянут с нужным моментом. Никаких «на глаз».
                                        </p>
                                    </div>
                                </div>

                      
                                <div className="p-10 border-b border-[#D35400] hover:bg-[#D35400]/5 transition-all duration-500 group relative">
                                  
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 border-2 border-[#D35400] rounded-sm flex items-center justify-center mb-8 font-mono text-[#D35400]">
                                            🏁
                                        </div>
                                        <h3 className="text-xl font-black uppercase mb-4 tracking-tight">Dirt Tested</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                            Мы тестируем решения на собственном треке. Если деталь не держит прыжок — она не попадет на ваш байк.
                                        </p>
                                    </div>
                                </div>

                             
                                <div className="p-10 border-b border-[#D35400] hover:bg-[#D35400]/5 transition-all duration-500 group relative">
                                   
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 border-2 border-[#D35400] rounded-sm flex items-center justify-center mb-8 font-mono text-[#D35400]">
                                            💻
                                        </div>
                                        <h3 className="text-xl font-black uppercase mb-4 tracking-tight">Pro Tools</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                            Работаем с топовым диагностическим оборудованием и спец-инструментом для KTM, Husqvarna и GasGas.
                                        </p>
                                    </div>
                                </div>

                              
                                <div className="p-10 border-b border-[#D35400] hover:bg-[#D35400]/5 transition-all duration-500 group relative">
                                  
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 border-2 border-[#D35400] rounded-sm flex items-center justify-center mb-8 font-mono text-[#D35400]">
                                            ⚙️
                                        </div>
                                        <h3 className="text-xl font-black uppercase mb-4 tracking-tight">Racing Logic</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                            Подготовка байков к соревнованиям: от прошивки мозгов до ревалвинга подвески под ваш темп.
                                        </p>
                                    </div>
                                </div>

                              
                            </div>
                        </div>

                     
                    </div>
                </section>
            </div>



        
            <div className="relative overflow-hidden bg-black -mt-[7px]">

              
                <div className="absolute inset-0 z-0">
                    <img
                        src={new URL('../../visuals/mount2.jpg', import.meta.url).href}
                        className="w-full h-full object-cover"
                      
                        alt="Background"
                    />
                    
                    <div className="absolute inset-0 bg-black/30"></div>
                 
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent"></div>

                    <div className="absolute inset-0">
                      
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] from-0% via-transparent via-50% to-transparent" />
                    </div>
                

                </div>

      
                <section className="relative z-10 pt-2 pb-24 px-10">
                    <div className="max-w-8xl mx-auto">
                        <h2 className="text-center text-3xl font-black uppercase mb-12 tracking-tighter text-white">
                            Специализация <span className="text-[#D35400]">по направлениям</span>
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {(Object.keys(services) as ServiceKey[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all border-2 ${activeTab === tab
                                        ? "border-[#D35400] text-white bg-[#D35400] shadow-[0_0_20px_rgba(211,84,0,0.3)]"
                                        : "border-white/20 text-gray-400 bg-black/40 backdrop-blur-md hover:border-white/40 hover:text-white"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

             
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#0d0d0d]/95 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-sm group">
                            <div className="h-[400px] overflow-hidden">
                                <img
                                    src={services[activeTab].img}
                                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                                 
                                    alt={activeTab}
                                />
                            </div>
                            <div className="p-12 flex flex-col justify-center">
                                <h3 className="text-3xl font-black uppercase mb-4 italic text-white">{services[activeTab].title}</h3>
                                <p className="text-gray-300 text-sm mb-8 leading-relaxed font-medium">{services[activeTab].desc}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services[activeTab].features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs uppercase tracking-wider font-bold text-gray-100">
                                            <div className="w-1.5 h-1.5 bg-[#D35400]"></div>
                                            {feat}
                                        </div>
                                    ))}
                                </div>

                        
                                <button className="relative mt-10 w-fit bg-[#D35400] text-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 drop-shadow-[0_10px_30px_rgba(211,84,0,0.4)]  hover:scale-105 hover:bg-orange-600">

                                    Записаться
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

          
                <section className="relative z-10 pb-20 px-10">
                 
                    <div className="max-w-8xl mx-auto bg-[#D35400] p-px shadow-[0_15px_60px_rgba(211,84,0,0.25)] border border-orange-700/30">
                        <div className="bg-[#0d0d0d]/95 p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h2 className="text-4xl font-black uppercase italic leading-none text-white">
                                    Твой байк заслуживает <br />
                                    <span className="text-[#D35400]">лучшего сервиса.</span>
                                </h2>
                                <p className="text-gray-400 mt-4 text-sm uppercase tracking-widest font-bold">
                                    Дефектовка / Ремонт / Настройка / Хранение
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <input
                                    type="text"
                                    placeholder="+7 777 777 77 77"
                                    className="bg-transparent border-b-2 border-white/10 p-2 text-white outline-none focus:border-[#D35400] transition-colors placeholder:text-gray-600"
                                />
                          
                                <button className="bg-[#D35400] text-white px-12 py-4 font-black uppercase text-xs tracking-[0.2em] transition-all drop-shadow-[0_10px_25px_rgba(211,84,0,0.4)] hover:scale-105 hover:bg-orange-600">
                                    Забронировать время
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>





        </div>
    );
}

export default MainPage;