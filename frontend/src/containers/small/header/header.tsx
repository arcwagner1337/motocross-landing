interface HeaderProps {
    onNavigate: (page: string) => void;
    currentPage: string;
}

export const Header = ({ onNavigate, currentPage }: HeaderProps) => {
    return (
        <nav className="flex flex-col select-none sm:flex-row justify-between items-center p-4 sm:p-8 border-b border-white/10 w-full bg-[#0a0a0a] sticky top-0 z-[100] gap-4 sm:gap-0">
           
            <div
                onClick={() => onNavigate('main')}
                className="text-lg sm:text-xl font-black tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform"
            >
                Loft <span className="text-orange-600">Project</span>
            </div>
            
      
            <ul className="flex gap-4 sm:gap-12 text-[10px] sm:text-sm uppercase tracking-widest font-bold">
                <li
                    onClick={() => onNavigate(currentPage === 'workshop' ? 'main' : 'workshop')}
                    className={`transition-all duration-300 cursor-pointer whitespace-nowrap
                        ${currentPage === 'workshop'
                            ? 'text-orange-600 opacity-100' 
                            : 'text-white opacity-40 hover:opacity-100'
                        }`}
                >
                    Workshop
                </li>

                <li
                    onClick={() => onNavigate(currentPage === 'garage' ? 'main' : 'garage')}
                    className={`transition-all duration-300 cursor-pointer whitespace-nowrap
                        ${currentPage === 'garage'
                            ? 'text-orange-600 opacity-100'
                            : 'text-white opacity-40 hover:opacity-100'
                        }`}
                >
                    Garage
                </li>

                <li
                    onClick={() => onNavigate(currentPage === 'raceteam' ? 'main' : 'raceteam')}
                    className={`transition-all duration-300 cursor-pointer whitespace-nowrap
                        ${currentPage === 'raceteam'
                            ? 'text-orange-600 opacity-100'
                            : 'text-white opacity-40 hover:opacity-100'
                        }`}
                >
                    Race Team
                </li>
            </ul>
        </nav>
    );
};