
import { Server } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface ArchitectureSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ArchitectureSection = ({ isOpen, onToggle }: ArchitectureSectionProps) => {
  return (
    <QuestionSection
      title="3. Arquitetura do Sistema"
      description="Estrutura e Componentes"
      icon={Server}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
          <pre className="mermaid text-sm">
            {`
flowchart TB
    Sistema((Sistema))
    Frontend[Frontend]
    Backend[Backend]
    DB[(Database)]
    Cache[(Cache)]
    
    Sistema --> Frontend & Backend
    Backend --> DB
    Backend --> Cache
    
    subgraph Frontend
    UI[Interface]
    State[Estado]
    Routes[Rotas]
    end
    
    subgraph Backend
    API[API]
    Auth[Autenticação]
    Business[Regras de Negócio]
    end
            `}
          </pre>
        </div>
      </div>
    </QuestionSection>
  );
};
