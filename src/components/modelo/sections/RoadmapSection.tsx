
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
    title Prioridades de Desenvolvimento Hello Help
    dateFormat YYYY-MM
    axisFormat %Y-%m
    
    section Fase 1 - Base
    Arquitetura Base          :active, 2024-01, 45d
    Sistema de Autenticação   :active, 2024-02, 30d
    API Core                  :2024-02, 45d
    Interface Base            :2024-03, 30d
    
    section Fase 2 - Funcionalidades Core
    Sistema de Mensagens      :2024-04, 45d
    Integração de Pagamentos  :2024-04, 45d
    Área do Profissional      :2024-05, 30d
    Área do Cliente          :2024-05, 30d
    
    section Fase 3 - Expansão
    Sistema de Reviews       :2024-06, 30d
    Agendamento Online      :2024-06, 45d
    Chat em Tempo Real      :2024-07, 45d
    
    section Fase 4 - Otimização
    Analytics e Métricas    :2024-08, 45d
    Sistema de Gamificação  :2024-09, 30d
    App Mobile              :2024-09, 60d
`;

  return (
    <QuestionSection
      title="Roadmap e Prioridades"
      description="Planejamento e fases de desenvolvimento"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-inner">
          <Mermaid chart={roadmapChart} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-3">Fase 1 - Base</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Arquitetura Base
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Sistema de Autenticação
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                API Core
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Interface Base
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700 mb-3">Fase 2 - Core</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Sistema de Mensagens
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Integração de Pagamentos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Área do Profissional
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Área do Cliente
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-3">Fase 3 - Expansão</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Sistema de Reviews
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Agendamento Online
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Chat em Tempo Real
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-700 mb-3">Fase 4 - Otimização</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Analytics e Métricas
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Sistema de Gamificação
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                App Mobile
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold text-gray-700 mb-2">Notas de Priorização</h3>
          <p className="text-sm text-gray-600">
            O desenvolvimento será iterativo, com entregas contínuas a cada 2-4 semanas. 
            As fases podem se sobrepor conforme necessário, mas a ordem de prioridade será mantida 
            para garantir uma base sólida antes de adicionar funcionalidades mais complexas.
          </p>
        </div>
      </div>
    </QuestionSection>
  );
};
