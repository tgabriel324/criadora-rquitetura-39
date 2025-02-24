
import { useState } from "react";
import { BookOpen, Layout, Users, GitBranch, Database, Server, DollarSign, Crown, BookMarked, BookText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { NovelaPlatformVision } from "@/components/novela/sections/NovelaPlatformVision";
import { NovelaPlatformStructure } from "@/components/novela/sections/NovelaPlatformStructure";
import { NovelaPlatformFeatures } from "@/components/novela/sections/NovelaPlatformFeatures";
import { NovelaTechnicalStack } from "@/components/novela/sections/NovelaTechnicalStack";
import { NovelaDatabaseModel } from "@/components/novela/sections/NovelaDatabaseModel";
import { NovelaPremiumSystem } from "@/components/novela/sections/NovelaPremiumSystem";
import { NovelaSocialFeatures } from "@/components/novela/sections/NovelaSocialFeatures";
import { NovelaImplementation } from "@/components/novela/sections/NovelaImplementation";
import { NovelaSecuritySection } from "@/components/novela/sections/NovelaSecuritySection";
import { NovelaMobileSection } from "@/components/novela/sections/NovelaMobileSection";

const NovelaBook = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    platformVision: true,
    platformStructure: false,
    features: false,
    technical: false,
    database: false,
    premium: false,
    social: false,
    implementation: false,
    security: false,
    mobile: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleDownloadPDF = () => {
    const allSectionsOpen = Object.keys(openSections).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setOpenSections(allSectionsOpen);

    setTimeout(() => {
      const element = document.documentElement;
      
      const opt = {
        margin: 1,
        filename: 'novelabook-documentacao.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).save();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5]/10 to-[#D6BCFA]/10">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-4 right-4 no-print">
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            size="sm"
            className="print:hidden hover:bg-[#9b87f5] hover:text-white transition-colors no-print flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-[#F97316]" />
            <h1 className="text-4xl font-bold text-[#9b87f5]">NovelaBook</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plataforma premium para leitura e gestão de novels com experiência exclusiva
          </p>
        </div>

        <div className="space-y-6">
          <NovelaPlatformVision 
            isOpen={openSections.platformVision} 
            onToggle={() => toggleSection("platformVision")} 
          />

          <NovelaPlatformStructure 
            isOpen={openSections.platformStructure} 
            onToggle={() => toggleSection("platformStructure")} 
          />

          <NovelaPlatformFeatures 
            isOpen={openSections.features} 
            onToggle={() => toggleSection("features")} 
          />

          <NovelaTechnicalStack 
            isOpen={openSections.technical} 
            onToggle={() => toggleSection("technical")} 
          />

          <NovelaDatabaseModel 
            isOpen={openSections.database} 
            onToggle={() => toggleSection("database")} 
          />

          <NovelaPremiumSystem 
            isOpen={openSections.premium} 
            onToggle={() => toggleSection("premium")} 
          />

          <NovelaSocialFeatures 
            isOpen={openSections.social} 
            onToggle={() => toggleSection("social")} 
          />

          <NovelaImplementation 
            isOpen={openSections.implementation} 
            onToggle={() => toggleSection("implementation")} 
          />

          <NovelaSecuritySection 
            isOpen={openSections.security} 
            onToggle={() => toggleSection("security")} 
          />

          <NovelaMobileSection 
            isOpen={openSections.mobile} 
            onToggle={() => toggleSection("mobile")} 
          />
        </div>
      </div>
    </div>
  );
};

export default NovelaBook;
