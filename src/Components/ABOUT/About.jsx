import AboutBanner from './AboutBanner'
import VisionMission from './VisionMission';
import CoreValues from './CoreValues';
import Infrastructure from './Infrastructure';
import CompanyIntroduction from './CompanyIntroduction';
import PassionateTeam from './PassionateTeam';
import "./About.css"

function About() {
  return (
    <>
      <AboutBanner/>
      <VisionMission/>
      <CoreValues/>
      <Infrastructure/>
      <CompanyIntroduction/>
      <PassionateTeam/>
    </>
  );
}

export default About;