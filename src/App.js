import './App.css';
import { useRef } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactMe from './ContactMe/views/ContactMe';
import HomeBanner from './HomeBanner/views/HomeBanner';
import MyWorks from './Projects/views/Projects';
import AchievementsAndCertificates from './AchievementAndCert/views/AchievementAndCert';

function App() {
  const homeRef = useRef(null);
  const myWorksRef = useRef(null);
  const contactMeRef = useRef(null);
  const achievementsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (section) => {
    switch (section) {
      case 'home':
        scrollToSection(homeRef);
        break;
      case 'projects':
        scrollToSection(myWorksRef);
        break;
      case 'achievements':
        scrollToSection(achievementsRef);
        break;
      case 'contact':
        scrollToSection(contactMeRef);
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onScrollToSection={handleNavClick} />
      <div ref={homeRef}>
        <HomeBanner
          onMyWorksClick={() => scrollToSection(myWorksRef)}
          onContactMeClick={() => scrollToSection(contactMeRef)}
          onAchievementsClick={() => scrollToSection(achievementsRef)}
        />
      </div>
      <div ref={myWorksRef}>
        <MyWorks />
      </div>
      <div ref={achievementsRef}>
        <AchievementsAndCertificates />
      </div>
      <div ref={contactMeRef}>
        <ContactMe />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
