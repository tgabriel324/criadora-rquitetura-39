
import { Layers } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { QuestionInput } from "../QuestionInput";
import { questions } from "../data/questions";

interface VisionSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const VisionSection = ({ isOpen, onToggle }: VisionSectionProps) => {
  const answers = {
    problem: "Dificuldade de profissionais em monetizar seus conhecimentos e habilidades; Fragmentação das soluções de networking profissional e marketplace; Falta de ambiente integrado para desenvolvimento profissional",
    stakeholders: "Profissionais oferecendo serviços, Empresas e pessoas buscando serviços, Mentores e especialistas, Investidores e parceiros, Equipe operacional da Hello Help",
    objective: "Criar um ecossistema completo para monetização de conhecimento e networking profissional",
    value: "Sistema de conexões automáticas baseado em perfil; Integração única de marketplace + networking + salas temáticas; Ambiente seguro para negociações profissionais",
    timeline: "Informação não disponível",
    budget: "Informação não disponível"
  };

  return (
    <QuestionSection
      title="1. Visão Geral do Projeto"
      description="Definição clara dos objetivos e escopo"
      icon={Layers}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-4">
        <QuestionInput 
          question={questions.vision[0]} 
          defaultValue={answers.problem}
        />
        <QuestionInput 
          question={questions.vision[1]} 
          defaultValue={answers.stakeholders}
        />
        <QuestionInput 
          question={questions.vision[2]} 
          defaultValue={answers.objective}
        />
        <QuestionInput 
          question={questions.vision[3]} 
          defaultValue={answers.value}
        />
        <QuestionInput 
          question={questions.vision[4]} 
          defaultValue={answers.timeline}
        />
        <QuestionInput 
          question={questions.vision[5]} 
          defaultValue={answers.budget}
        />
      </div>
    </QuestionSection>
  );
};
