
import { List } from "lucide-react";
import { QuestionSection } from "../QuestionSection";

interface RequirementsSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const RequirementsSection = ({ isOpen, onToggle }: RequirementsSectionProps) => {
  const functionalRequirements = [
    "Sistema de leitura personalizado",
    "Gestão de novels e capítulos",
    "Sistema de assinaturas premium",
    "Interação social e comunidade",
    "Sistema de badges e achievements",
    "Interface administrativa completa",
    "Sistema de notificações",
    "Analytics e relatórios",
    "Moderação de conteúdo"
  ];

  const nonFunctionalRequirements = [
    "Performance otimizada",
    "Design responsivo",
    "Segurança de dados",
    "Alta disponibilidade",
    "Escalabilidade horizontal",
    "Cache eficiente",
    "SEO otimizado",
    "Acessibilidade WCAG",
    "Backup automático"
  ];

  return (
    <QuestionSection
      title="2. Requisitos do Sistema"
      description="Funcionais e Não-Funcionais"
      icon={List}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-3">2.1 Requisitos Funcionais</h3>
          <div className="space-y-2">
            {functionalRequirements.map((req, index) => (
              <input 
                key={index}
                type="text" 
                className="w-full p-2 border rounded-md"
                defaultValue={req}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">2.2 Requisitos Não-Funcionais</h3>
          <div className="space-y-2">
            {nonFunctionalRequirements.map((req, index) => (
              <input 
                key={index}
                type="text" 
                className="w-full p-2 border rounded-md"
                defaultValue={req}
              />
            ))}
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
