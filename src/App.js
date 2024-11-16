import './App.css';
import { useRef } from 'react';
import ContactMe from './ContactMe/views/ContactMe';
import HomeBanner from './HomeBanner/views/HomeBanner';
import MyWorks from './Projects/views/Projects';
import AchievementsAndCertificates from './AchievementAndCert/views/AchievementAndCert';

function App() {
  const myWorksRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HomeBanner
        onMyWorksClick={() => scrollToSection(myWorksRef)}
        onContactMeClick={() => scrollToSection(contactMeRef)}
      />
      <div ref={myWorksRef}>
        <MyWorks />
      </div>
      <AchievementsAndCertificates></AchievementsAndCertificates>
      <div ref={contactMeRef}>
        <ContactMe />
      </div>
    </>
  );
}

export default App;
