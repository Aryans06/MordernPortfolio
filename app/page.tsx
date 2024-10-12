import Experience from "@/Components/Experience";
import Hero from "@/Components/Hero";
import Approach from "@/Components/ui/Approach";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Footer from "@/Components/ui/Footer";
import Grid from "@/Components/ui/Grid";
import RecentProjects from "@/Components/ui/RecentProjects";
import { navItems } from "@/data";



export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-normal items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full overflow-clip">
      <FloatingNav 
         navItems={navItems}
          
        
      />
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Experience/>
      <Approach/>
      <Footer/>
    </div>
   </main>
  );
}
