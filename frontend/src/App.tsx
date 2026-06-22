import { useState } from 'react';
import { Header } from './containers/small/header/header';
import Footer from './containers/small/footer/footer';
import MainPage from './containers/mainPage/mainpage';
import Workshop from './containers/workshopPage/workshopPage';
import { Garage } from './containers/garage/garage'; 
import { RaceTeam } from './containers/race/raceTeamPage';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col overflow-x-hidden">
     
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="flex-grow">
        {currentPage === 'main' && <MainPage onNavigate={setCurrentPage} />}
        {currentPage === 'workshop' && <Workshop onNavigate={setCurrentPage} />}
        {currentPage === 'garage' && <Garage />}
        {currentPage === 'raceteam' && <RaceTeam />}
      </main>

      <Footer />
    </div>
  );
}

export default App;