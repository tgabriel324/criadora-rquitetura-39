
import { useState } from "react";
import { VisionSection } from "@/components/modelo/sections/VisionSection";
import { RequirementsSection } from "@/components/modelo/sections/RequirementsSection";
import { ArchitectureSection } from "@/components/modelo/sections/ArchitectureSection";
import { DatabaseSection } from "@/components/modelo/sections/DatabaseSection";
import { UserProfilesSection } from "@/components/modelo/sections/UserProfilesSection";
import { FlowsSection } from "@/components/modelo/sections/FlowsSection";
import { MonetizationSection } from "@/components/modelo/sections/MonetizationSection";
import { RoadmapSection } from "@/components/modelo/sections/RoadmapSection";
import { RisksSection } from "@/components/modelo/sections/RisksSection";

const Modelo1 = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    overview: true,
    requirements: false,
    architecture: false,
    database: false,
    userProfiles: false,
    flows: false,
    monetization: false,
    roadmap: false,
    risks: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Modelo de Projeto</h1>
        <p className="text-xl text-gray-600">Estrutura Completa para Planejamento e Execução</p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6">
        <VisionSection 
          isOpen={openSections.overview} 
          onToggle={() => toggleSection("overview")} 
        />
        
        <RequirementsSection 
          isOpen={openSections.requirements} 
          onToggle={() => toggleSection("requirements")} 
        />

        <ArchitectureSection 
          isOpen={openSections.architecture} 
          onToggle={() => toggleSection("architecture")} 
        />

        <DatabaseSection 
          isOpen={openSections.database} 
          onToggle={() => toggleSection("database")} 
        />

        <UserProfilesSection 
          isOpen={openSections.userProfiles} 
          onToggle={() => toggleSection("userProfiles")} 
        />

        <FlowsSection 
          isOpen={openSections.flows} 
          onToggle={() => toggleSection("flows")} 
        />

        <MonetizationSection
          isOpen={openSections.monetization}
          onToggle={() => toggleSection("monetization")}
        />

        <RoadmapSection
          isOpen={openSections.roadmap}
          onToggle={() => toggleSection("roadmap")}
        />

        <RisksSection
          isOpen={openSections.risks}
          onToggle={() => toggleSection("risks")}
        />
      </div>
    </div>
  );
};

export default Modelo1;
