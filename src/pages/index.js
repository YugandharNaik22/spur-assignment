import MasterLife from "../Components/Mastering";
import Navbar from "../Components/NavBar";
import EQbeatsIQ from "../Components/EQbetasIQ";

import Footer from "../Components/Footer";
import Openvacancies from "../Components/Openvacancies";

import BeBestYou from "../Components/BeBestYouwithEQ";
import EverWonder from "../Components/EverWonder";
import Test from "../Components/StartTest";
import WorkWithUs from "../Components/WorkWithUsAhead";
import MeetAheadCard from "../Components/MeetAheadApp";
import DoesThisSoundFamiliar from "../Components/DoesThisSoundFamiliar";

import SelfImprovement from "../Components/SelfImprovementUgh";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard />
      <SelfImprovement />
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}