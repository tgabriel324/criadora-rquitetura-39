
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

const HelloHelp = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Hello Help
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme seu conhecimento em oportunidades reais
          </p>
        </div>

        <div className="space-y-6">
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
    </div>
  );
};

export default HelloHelp;
