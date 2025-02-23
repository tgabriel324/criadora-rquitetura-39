
import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisionSection } from "@/components/modelo/sections/VisionSection";
import { GeneralVisionSection } from "@/components/modelo/sections/GeneralVisionSection";
import { OrganizationalSection } from "@/components/modelo/sections/OrganizationalSection";
import { SystemAreasSection } from "@/components/modelo/sections/SystemAreasSection";
import { RequirementsSection } from "@/components/modelo/sections/RequirementsSection";
import { ArchitectureSection } from "@/components/modelo/sections/ArchitectureSection";
import { DatabaseSection } from "@/components/modelo/sections/DatabaseSection";
import { UserProfilesSection } from "@/components/modelo/sections/UserProfilesSection";
import { FlowsSection } from "@/components/modelo/sections/FlowsSection";
import { MonetizationSection } from "@/components/modelo/sections/MonetizationSection";
import { RoadmapSection } from "@/components/modelo/sections/RoadmapSection";
import { RisksSection } from "@/components/modelo/sections/RisksSection";
import { ChecklistSection } from "@/components/modelo/sections/ChecklistSection";

const HelloHelp = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    generalVision: true,
    vision: false,
    organization: false,
    areas: false,
    requirements: false,
    architecture: false,
    database: false,
    userProfiles: false,
    flows: false,
    monetization: false,
    roadmap: false,
    risks: false,
    checklist: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative">
        {/* Botão de Download PDF */}
        <div className="absolute top-4 right-4">
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            size="sm"
            className="print:hidden"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="mb-4">
            <img
              src="/lovable-uploads/26a15c94-e0ca-4f07-97ee-49918e50ac8d.png"
              alt="Hello Help Logo"
              className="h-16 mx-auto"
            />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme seu conhecimento em oportunidades reais
          </p>
        </div>

        <div className="space-y-6">
          <GeneralVisionSection 
            isOpen={openSections.generalVision} 
            onToggle={() => toggleSection("generalVision")} 
          />

          <VisionSection 
            isOpen={openSections.vision} 
            onToggle={() => toggleSection("vision")} 
          />
          
          <OrganizationalSection 
            isOpen={openSections.organization} 
            onToggle={() => toggleSection("organization")} 
          />

          <SystemAreasSection 
            isOpen={openSections.areas} 
            onToggle={() => toggleSection("areas")} 
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

          <ChecklistSection
            isOpen={openSections.checklist}
            onToggle={() => toggleSection("checklist")}
          />
        </div>
      </div>
    </div>
  );
};

export default HelloHelp;
