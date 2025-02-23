
import { List } from "lucide-react";
import { QuestionSection } from "../QuestionSection";

interface RequirementsSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const RequirementsSection = ({ isOpen, onToggle }: RequirementsSectionProps) => {
  const functionalRequirements = [
    "Marketplace de serviços",
    "Sistema de chat",
    "Salas temáticas",
    "Conexões automáticas",
    "Sistema de pagamentos",
    "Perfis profissionais",
    "Sistema de matching de perfis",
    "Sistema de avaliações",
    "Sistema de mentorias"
  ];

  const nonFunctionalRequirements = [
    "Autenticação segura",
    "Proteção de dados",
    "Segurança em transações",
    "Carregamento rápido",
    "Responsividade",
    "Baixa latência em chats",
    "Sistema escalável para 10k+ usuários"
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
