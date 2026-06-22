interface WorkshopProps {
  onNavigate: (page: string) => void;
}


export const Workshop = ({ onNavigate }: WorkshopProps) => {

  const serviceCategories = [
    {
      id: "01",
      category: "Engine & Transmission",
      image: new URL('../../visuals/engine2.jpg', import.meta.url).href,
      services: [
        { name: "Полная переборка двигателя (Full Rebuild)", price: "от 45 000 ₽" },
        { name: "Настройка ГРМ и зазоров клапанов", price: "8 500 ₽" },
        { name: "Замена дисков сцепления и дефектовка корзины", price: "5 000 ₽" },
        { name: "Чистка и синхронизация инжектора/карбюратора", price: "6 000 ₽" },
      ]
    },
    {
      id: "02",
      category: "Suspension Lab",
      image: new URL('../../visuals/susp.jpg', import.meta.url).href,
      services: [
        { name: "Обслуживание вилки (замена масла/сальников)", price: "12 000 ₽" },
        { name: "Ребилд заднего амортизатора", price: "15 000 ₽" },
        { name: "Тюнинг подвески под вес райдера", price: "от 7 000 ₽" },
        { name: "Замена подшипников прогрессии и маятника", price: "9 000 ₽" },
      ]
    },
    {
      id: "03",
      category: "Electrical & Diagnostic",
      image: new URL('../../visuals/electrics.jpg', import.meta.url).href,
      services: [
        { name: "Компьютерная диагностика и чтение ошибок", price: "3 500 ₽" },
        { name: "Прошивка ЭБУ и корректировка топливных карт", price: "от 12 000 ₽" },
        { name: "Ремонт и герметизация основной косы", price: "от 8 000 ₽" },
        { name: "Установка доп. оборудования (свет/вентиляторы)", price: "5 000 ₽" },
      ]
    },
    {
      id: "04",
      category: "Braking System",
      image: new URL('../../visuals/brake.jpg', import.meta.url).href,
      services: [
        { name: "Прокачка тормозов и замена жидкости (DOT 5.1)", price: "2 500 ₽" },
        { name: "Переборка суппортов с заменой поршней", price: "4 500 ₽" },
        { name: "Замена тормозных дисков и колодок", price: "3 000 ₽" },
        { name: "Восстановление главных тормозных цилиндров", price: "4 000 ₽" },
      ]
    },


  ];




  return (





    <section className="relative select-none bg-[#0f0f0f] font-mono border-t border-white/5 overflow-hidden">

     
      <div className="fixed inset-0 z-0">
        <img
          src={new URL('../../visuals/workbgr2.jpeg', import.meta.url).href}
          className="w-full h-full object-cover opacity-30"
          alt="bg"
        />
      </div>

    

      <div className="relative z-10 pt-32 pb-24 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-10 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#D35400] font-mono text-xs tracking-[0.5em] uppercase mb-4 block">System Maintenance Protocol</span>
              <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                Workshop <br /> <span className="text-gray-500">Service</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-10 space-y-18 md:space-y-32">
          {serviceCategories.map((cat, index) => (
            <div
              key={cat.id}
              className={`flex flex-col lg:flex-row gap-0 overflow-hidden rounded-xl border border-white/5 bg-neutral-900/40 shadow-2xl transition-transform ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
            
              <div className="lg:w-1/2 relative group overflow-hidden">
               
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={cat.image}
                  className="w-full h-full aspect-video lg:aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={cat.category}
                />
              </div>

         
              <div className="lg:w-1/2 flex flex-col justify-center bg-black/40 py-10 px-12 relative">
                <h2 className="text-4xl font-black uppercase mb-8 flex items-center gap-4 italic">
                  <span className="w-12 h-[3px] bg-[#D35400]"></span>
                  {cat.category}
                </h2>

                <div className="space-y-1">
                  {cat.services.map((svc, i) => (
                    <div
                      key={i}
                      className="group flex justify-between items-center p-5 border-b border-white/[0.03] hover:bg-white/[0.05] transition-colors"
                    >
                      <span className=" pr-6 md:pr-0 text-sm uppercase font-bold text-gray-400 group-hover:text-white transition-colors">
                        {svc.name}
                      </span>
               
                      <span className="font-mono text-[#D35400] font-black tracking-tighter group-hover:scale-105 transition-transform">
                        {svc.price}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="mt-12 w-full py-5 bg-transparent border-2 border-[#D35400] text-[#D35400] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#D35400] hover:text-white transition-all">
                  Получить консультацию
                </button>
              </div>
            </div>
          ))}
        </div>

   
        <div className="max-w-7xl mx-auto px-10 mt-32">
          <div className="p-12 border border-white/10 bg-black/60 backdrop-tight text-center">
            <h3 className="text-2xl font-black uppercase mb-4">Не нашли нужную позицию?</h3>
            <button className="bg-[#D35400] text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 transition-all">
              Связаться с мастером
            </button>
          </div>
        </div>
      </div>
    </section>



  );
};

export default Workshop;



<div className="max-w-7xl mx-auto">

  <div className="mb-20">
    <div className="flex items-center gap-3 text-[#D35400] text-[10px] mb-4">
      <span className="w-2 h-2 bg-[#D35400] animate-pulse"></span>
      LOFT_PROJECT // WORKSHOP_MODULE_ACTIVE
    </div>
    <h2 className="text-6xl font-black uppercase italic tracking-tighter text-white">
      Workshop <span className="text-[#D35400]">Lab</span>
    </h2>
  </div>

  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-1px bg-white/5 border border-white/5">

  
    <div className="bg-[#121212] p-12 hover:bg-[#151515] transition-colors">
      <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3">
        <span className="text-[#D35400]">01/</span> Powertrain
      </h3>
      <div className="space-y-4">
        {[
          { label: "Full Engine Rebuild", code: "ENG-REB" },
          { label: "Valve Adjustment", code: "ENG-VAL" },
          { label: "ECU Remapping", code: "DIG-MAP" },
          { label: "Clutch Replacement", code: "TRA-CLU" }
        ].map((item) => (
          <div key={item.code} className="flex justify-between items-center group">
            <span className="text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
            <span className="text-[10px] bg-white/5 px-2 py-1 text-gray-600">{item.code}</span>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-[#121212] p-12 hover:bg-[#151515] transition-colors">
      <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3">
        <span className="text-[#D35400]">02/</span> Chassis & Susp
      </h3>
      <div className="space-y-4">
        {[
          { label: "Shock Absorber Service", code: "SUS-SHO" },
          { label: "Fork Revalving", code: "SUS-VAL" },
          { label: "Linkage Maintenance", code: "CHA-LNK" },
          { label: "Bearing Press Service", code: "CHA-BRG" }
        ].map((item) => (
          <div key={item.code} className="flex justify-between items-center group">
            <span className="text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
            <span className="text-[10px] bg-white/5 px-2 py-1 text-gray-600">{item.code}</span>
          </div>
        ))}
      </div>
    </div>
  </div>


  <div className="mt-12 p-8 border border-[#D35400]/20 bg-[#D35400]/5 flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="text-xs text-gray-400 max-w-xl">
      * Все работы выполняются с использованием динамометрического инструмента.
      Данные о затяжке заносятся в базу проекта согласно OEM мануалам.
    </p>
    <button className="bg-[#D35400] text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 transition-all">
      Open Ticket
    </button>
  </div>
</div>