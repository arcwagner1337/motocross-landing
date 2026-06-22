export const Footer = () => {
    return (
     
        <footer className="relative z-20 bg-[#0a0a0a] pt-20 pb-10 px-10 border-t border-white/5 select-none">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

              
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                            Loft <span className="text-[#D35400]">Project</span>
                        </div>
                    </div>

             
                    <div>
                        <h4 className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mb-6">Explore</h4>
                        <ul className="text-xs space-y-3 uppercase font-bold text-gray-400">
                            <li className="hover:text-[#D35400] cursor-pointer transition-colors">Workshop</li>
                            <li className="hover:text-[#D35400] cursor-pointer transition-colors">Race History</li>
                            <li className="hover:text-[#D35400] cursor-pointer transition-colors">Parts Shop</li>
                        </ul>
                    </div>

                
                    <div>
                        <h4 className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mb-6">Contact</h4>
                        <ul className="text-xs space-y-3 font-bold text-gray-400">
                            <li className="text-white">+7 (777) 77 77 77</li>
                            <li className="hover:text-white cursor-pointer italic">@loft_project_garage</li>
                        </ul>
                    </div>
                </div>

             
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-700 uppercase tracking-widest">
                    <p>© 2026 LOFT PROJECT CUSTOMS. NO COMPROMISE.</p>
                    <p className="mt-4 md:mt-0 font-mono text-[8px] opacity-50">Dev by: arcwagner // TS & React</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;