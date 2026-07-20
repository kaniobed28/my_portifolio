import './App.css';
import { useRef } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import StackTicker from './components/StackTicker';
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
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = (section) => {
    const targets = {
      home: homeRef,
      projects: myWorksRef,
      achievements: achievementsRef,
      contact: contactMeRef,
    };
    const target = targets[section];
    if (target) scrollToSection(target);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a className="skip-link" href="#projects">
        Skip to work
      </a>
      <ScrollProgress />
      <Navbar onScrollToSection={handleNavClick} />
      <div className="grain" aria-hidden />

      <Box component="main">
        <Box ref={homeRef} id="home">
          <HomeBanner onMyWorksClick={() => scrollToSection(myWorksRef)} />
        </Box>
        <StackTicker />
        <Box ref={myWorksRef} id="projects" sx={{ scrollMarginTop: '76px' }}>
          <MyWorks />
        </Box>
        <Box ref={achievementsRef} id="achievements" sx={{ scrollMarginTop: '76px' }}>
          <AchievementsAndCertificates />
        </Box>
        <Box ref={contactMeRef} id="contact" sx={{ scrollMarginTop: '76px' }}>
          <ContactMe />
        </Box>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
