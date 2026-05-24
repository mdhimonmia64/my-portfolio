import AboutSection from "@/components/about/AboutSection";
import BannerPage from "@/components/Banner/BannerPage";
import ScrollTopButton from "@/components/Button/ScrollTopButton";
import ContactSection from "@/components/Contact/ContactSection";
import FooterSection from "@/components/Footer/FooterSection";
import NavBar from "@/components/Navbar/NavBar";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import SkillsSection from "@/components/Skills/SkillsSection";

export default function Home() {
  return (
    <>   
    <div>
  <NavBar />   
<BannerPage />
<AboutSection />
<SkillsSection />
<ProjectsSection />
<ContactSection />
<FooterSection />
<ScrollTopButton />
</div>
</>
  );
}
