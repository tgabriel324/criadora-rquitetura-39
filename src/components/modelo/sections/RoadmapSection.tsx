
import { GitBranch } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface RoadmapSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const RoadmapSection = ({ isOpen, onToggle }: RoadmapSectionProps) => {
  const roadmapChart = `
gantt
    title Roadmap de Desenvolvimento
    dateFormat YYYY-MM
    axisFormat %Y-%m
    
    section MVP (v1.0)
    Cadastro e Autenticação    :2024-01, 2m
    Marketplace Básico         :2024-02, 2m
    Chat Simples              :2024-03, 2m
    Pagamentos               :2024-03, 2m
    
    section Versão 2.0
    Sistema de Mentorias     :2024-05, 3m
    Salas Virtuais           :2024-06, 2m
    Certificados             :2024-07, 2m
    
    section Versão 3.0
    App Mobile               :2024-09, 4m
    Analytics Avançado       :2024-10, 3m
    Integrações             :2024-11, 3m
    
    section Versão 4.0
    IA e Automação          :2025-01, 4m
    Marketplace Pro         :2025-03, 3m
    Expansão Global         :2025-05, 4m
  `;

  return (
    <QuestionSection
      title="8. Roadmap de Versões"
      description="Evolução planejada do sistema"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <Mermaid chart={roadmapChart} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">MVP (v1.0)</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Cadastro e autenticação de usuários</p>
              <p className="p-2 bg-white rounded border">Marketplace com funcionalidades básicas</p>
              <p className="p-2 bg-white rounded border">Chat simples entre usuários</p>
              <p className="p-2 bg-white rounded border">Sistema de pagamentos</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Próximas Versões</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Sistema completo de mentorias</p>
              <p className="p-2 bg-white rounded border">App mobile e expansões</p>
              <p className="p-2 bg-white rounded border">IA e automação</p>
              <p className="p-2 bg-white rounded border">Expansão internacional</p>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
