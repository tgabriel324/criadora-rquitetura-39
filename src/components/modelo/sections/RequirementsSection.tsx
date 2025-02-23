
import { List } from "lucide-react";
import { QuestionSection } from "../QuestionSection";

interface RequirementsSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const RequirementsSection = ({ isOpen, onToggle }: RequirementsSectionProps) => {
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
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                className="w-full p-2 border rounded-md"
                placeholder="Adicione um requisito funcional..."
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">2.2 Requisitos Não-Funcionais</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                className="w-full p-2 border rounded-md"
                placeholder="Adicione um requisito não-funcional..."
              />
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
