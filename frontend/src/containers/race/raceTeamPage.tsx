import { useState } from 'react';


const pilots = [
    { id: '01', name: 'ALEX "WILD" VOLKOV', role: 'PRO RIDER', bike: 'KTM 450 SX-F', stats: { wins: 12, podiums: 28, rank: '#4' } },
    { id: '02', name: 'MAX "TORQUE" REED', role: 'JUNIOR RIDER', bike: 'HUSQ FC 250', stats: { wins: 4, podiums: 11, rank: '#15' } },
];

const schedule = [
    { date: 'MAR 24', event: 'MXGP LOMBOK', location: 'INDONESIA', status: 'UPCOMING' },
    { date: 'APR 12', event: 'PRO MOTOCROSS', location: 'CALIFORNIA, USA', status: 'PREPARING' },
    { date: 'MAY 05', event: 'ADAC MX MASTERS', location: 'GERMANY', status: 'CONFIRMED' },
];

export const RaceTeam = () => {
    return (


        <div className="min-h-screen relative text-white font-sans relative overflow-x-hidden select-none"
            style={{
                backgroundImage: `url(${new URL('../../visuals/racebgr.jpg', import.meta.url).href})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>


            <div className="absolute inset-0 bg-black/70 z-0"></div>


            <div className="relative z-10">

        
                <header className="max-w-7xl mx-auto px-6 pt-32 mb-18">
                    <div className="flex flex-wrap items-center gap-0 italic">
                        <div className="bg-white text-black px-8 py-4 skew-x-[-15deg]">
                            <h1 className="text-6xl md:text-8xl font-[900] tracking-tighter skew-x-[15deg]">READY TO</h1>
                        </div>
                        <div className="bg-black border-4 border-white px-8 py-4 -ml-4 skew-x-[-15deg] relative z-10">
                            <h1 className="text-6xl md:text-8xl font-[900] tracking-tighter skew-x-[15deg] flex flex-col leading-[0.8]">
                                RACE <span className="text-orange-600 block">TEAM</span>
                            </h1>
                            <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-white skew-x-[15deg] text-5xl tracking-[-0.2em]">
                                {`>>`}
                            </div>
                        </div>
                    </div>
                </header>

                <section className="max-w-7xl mx-auto px-6 mb-18">
                    <div
                        className=""
                        style={{
                            backgroundImage: `url(${new URL('../../visuals/sky.png', import.meta.url).href})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="p-8 md:p-12 relative">
                    
                            <div className="absolute -top-6 left-12 bg-black text-white px-6 py-2 skew-x-[-15deg]">
                                <h2 className="text-xl font-black italic skew-x-[15deg]">THE LINEUP</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 mt-4">
                                {pilots.map((pilot) => (
                                    <div key={pilot.id} className="bg-black p-8 relative group shadow-[20px_20px_0px_rgba(0,0,0,0.3)]">
                                        <div className="absolute right-6 top-6 text-7xl font-black text-white/5 group-hover:text-orange-600/20 transition-colors italic">
                                            {pilot.id}
                                        </div>
                                        <div className="relative z-10">
                                            <span className="text-orange-600 text-[10px] font-black tracking-widest uppercase border-b border-orange-600 mb-4 inline-block">
                                                {pilot.role}
                                            </span>
                                            <h3 className="text-4xl font-black uppercase italic mb-1 tracking-tighter">{pilot.name}</h3>
                                            <p className="text-neutral-500 text-[10px] font-mono mb-8">PRIMARY: {pilot.bike}</p>

                                            <div className="flex gap-12">
                                                <div><p className="text-[24px] font-black italic">{pilot.stats.wins}</p></div>
                                                <div><p className="text-[24px] font-black italic">{pilot.stats.podiums}</p></div>
                                                <div><p className="text-[24px] font-black italic text-orange-600">{pilot.stats.rank}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 mb-18">
                    <div className="border-4 border-orange-600 relative">
                   
                        <div className="bg-black p-6 border-b-4 border-orange-600 flex justify-between items-center relative overflow-hidden">
                            <h2 className="text-4xl font-black italic relative z-10">

                                RACE <span className="text-orange-600 underline  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ">CALENDAR</span>

                            </h2>
                          

                            <div className="absolute right-0 top-0 h-full px-0 md:px-4">
                          

                                <div className="pt-2"></div>
                                <img
                                    src={new URL('../../visuals/fire2.png', import.meta.url).href}
                                    alt="Background"
                                    className="w-full h-full object-cover"
                                />

                            </div>
                        </div>

                        <div className="bg-black p-8 font-mono text-xs">
                            {schedule.map((race, i) => (
                                <div key={i} className="flex flex-col md:grid grid-cols-4 py-6 border-b border-white/10 last:border-0 items-center hover:bg-white/5 transition-colors px-4">
                                    <div className="font-black text-lg italic text-white">{race.date}</div>
                                    <div className="font-black uppercase italic text-sm">{race.event}</div>
                                    <div className="text-neutral-500 uppercase">{race.location}</div>
                                    <div className="text-right">
                                        <span className="border border-white/20 px-4 py-1 text-[9px] group-hover:border-orange-600">CONFIRMED</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

         


                <div className="relative max-w-7xl px-6 mx-auto mb-20"
                    style={{
                        
                        backgroundImage: `url(${new URL('../../visuals/paper2.png', import.meta.url).href})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                 

                    <div className="relative z-10">

                      
                        <div className="bg-[#1a1a1a] flex flex-col md:flex-row items-stretch border border-white/10 shadow-2xl overflow-hidden">

                        
                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <p className="text-orange-600 font-mono text-[10px] mb-4 font-bold tracking-[0.3em]">
                                    LIVE_FEED_01
                                </p>
                                <div className="space-y-1.5 font-mono text-[11px] text-neutral-400 uppercase">
                                    <div className="flex justify-between">
                                        <span>Track Temp:</span>
                                        <span className="text-white">34°C</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Humidity:</span>
                                        <span className="text-white">42%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wind:</span>
                                        <span className="text-white">12 KM/H NW</span>
                                    </div>
                                </div>
                            </div>

                          
                            <div className="bg-orange-600 px-10 py-8 flex flex-col justify-center min-w-[320px]">
                                <p className="text-black font-black text-lg md:text-xl uppercase italic leading-none mb-1">
                                    Next Warm-up in:
                                </p>
                                <p className="text-white font-black text-5xl md:text-6xl italic tracking-tighter leading-none">
                                    02:14:55
                                </p>
                            </div>

                    
                            <div className="flex-1 p-6 md:p-8 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors border-t md:border-t-0 md:border-l border-white/10">
                                <h3 className="text-white font-black uppercase italic text-xl md:text-2xl leading-[0.9]">
                                    Download <br /> Press-Kit
                                </h3>
                                <div className="w-12 h-12 bg-orange-600 flex items-center justify-center group-hover:bg-white transition-colors">
                                    <span className="text-black text-2xl font-black">↓</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <section className="max-w-7xl mx-auto px-6 mb-18">
                <div className="flex flex-col md:flex-row bg-black border-4 border-white/5 overflow-hidden min-h-[500px]">
                  
                    <div className="relative w-full md:w-1/3 min-h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-orange-600/40 mix-blend-multiply z-10"></div>
                        <img
                            src={new URL('../../visuals/flip.jpg', import.meta.url).href}
                            className="absolute inset-0 w-full h-full object-cover [filter:grayscale(50%)]"
                            alt="Action"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h2 className="text-4xl font-black italic leading-[0.8]">
                                LIVE<br /><span className="text-orange-600">BIKE DATA</span>
                            </h2>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 p-12 space-y-12 bg-[#0a0a0a] flex flex-col justify-center">
                        {[
                            { label: 'Engine RPM', val: '12,400', p: '85%', color: 'bg-orange-600' },
                            { label: 'Oil Temperature', val: '98°C', p: '62%', color: 'bg-orange-600' },
                            { label: 'Tire Pressure (Rear)', val: '1.1 BAR', p: '45%', color: 'bg-green-500' }
                        ].map((s, i) => (
                            <div key={i} className="relative z-10">
                                <div className="flex justify-between font-black text-[20px] uppercase mb-2 tracking-widest">
                                    <span className="text-neutral-500">{s.label}</span>
                                    <span className="text-white font-bold">{s.val}</span>
                                </div>
                                <div className="h-2 bg-white/10 relative overflow-hidden">
                                    <div
                                        className={`absolute inset-0 ${s.color} transition-all duration-1000`}
                                        style={{ width: s.p }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

     
            <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-40">


                <div className="relative z-10">
                    <h2 className="text-3xl font-black  italic mb-8 uppercase tracking-tighter">Track Moments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-auto md:h-[600px]">
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-neutral-900">
                            <img src={new URL('../../visuals/moment1.jpg', import.meta.url).href} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Track 1" />
                            <div className="absolute bottom-6 left-6 font-black italic">
                                <p className="text-2xl text-white uppercase">Dirt Jump</p>
                            </div>
                        </div>
                        <div className="md:col-span-1 bg-neutral-900"><img src={new URL('../../visuals/moment2.jpg', import.meta.url).href} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" /></div>
                        <div className="md:col-span-1 bg-neutral-900"><img src={new URL('../../visuals/moment3.jpg', import.meta.url).href} className="w-full h-full object-cover grayscale  hover:grayscale-0 transition-all duration-700" /></div>

                        <div className="md:col-span-2 bg-orange-600 p-8 flex items-end justify-between relative group overflow-hidden cursor-pointer">
                            <div className="absolute -top-4 -right-4 text-8xl font-black italic text-black/10 -rotate-12 select-none">SPEED</div>
                            <h3 className="text-4xl font-black italic text-black leading-none uppercase">Follow<br />our season</h3>
                            <div className="w-12 h-12 bg-black flex items-center justify-center text-white text-2xl group-hover:translate-x-2 transition-transform">→</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  

    );

};