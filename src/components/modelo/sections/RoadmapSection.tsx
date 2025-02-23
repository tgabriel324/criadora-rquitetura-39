
import { GitBranch } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface RoadmapSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const RoadmapSection = ({ isOpen, onToggle }: RoadmapSectionProps) => {
  return (
    <QuestionSection
      title="8. Roadmap de Versões"
      description="Evolução planejada do sistema"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        {/* MVP - Versão 1.0 */}
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-xl mb-3">Versão 1.0 (MVP)</h3>
          <p className="text-gray-600 mb-4">Funcionalidades essenciais para validação do produto</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Perfil A</h4>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Liste as funcionalidades essenciais..."
              />
            </div>
            <div>
              <h4 className="font-medium mb-2">Perfil B</h4>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Liste as funcionalidades essenciais..."
              />
            </div>
          </div>
        </div>

        {/* Diagrama de Evolução */}
        <div className="mt-8">
          <h3 className="font-semibold text-xl mb-4">Evolução das Versões</h3>
          <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
            <pre className="mermaid text-sm">
              {`
gantt
    title Roadmap de Desenvolvimento
    dateFormat YYYY-MM
    axisFormat %Y-%m
    
    section MVP (v1.0)
    Funcionalidades Básicas      :2024-01, 4m
    Validação com Usuários       :2024-03, 2m
    
    section Versão 2.0
    Áudio e Assinaturas         :2024-05, 3m
    Melhorias UX               :2024-07, 2m
    
    section Versão 3.0
    App Mobile                 :2024-09, 4m
    Marketplace                :2024-11, 3m
              `}
            </pre>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
