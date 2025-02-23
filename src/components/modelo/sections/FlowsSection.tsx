
import { GitBranch } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface FlowsSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const FlowsSection = ({ isOpen, onToggle }: FlowsSectionProps) => {
  return (
    <QuestionSection
      title="6. Fluxos e Narrativas"
      description="Fluxos principais do sistema"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
        <pre className="mermaid text-sm">
          {`
graph TD
    %% Fluxos de Entrada
    subgraph Entrada["Fluxos de Entrada"]
        Marketing["Marketing Digital"] --> Landing
        Indicacao["Indicação"] --> Landing
        Landing --> Cadastro
        Cadastro --> |"Profissional"| OnboardingPro["Onboarding Pro"]
        Cadastro --> |"Cliente"| OnboardingCliente["Onboarding Cliente"]
    end

    %% Jornada do Profissional
    subgraph Profissional["Jornada do Profissional"]
        OnboardingPro --> CriarPerfil["Criar Perfil"]
        CriarPerfil --> CriarServicos["Criar Serviços"]
        CriarServicos --> |"Gera"| Receita["Receita"]
        Receita --> |"Gera"| Metricas["Métricas"]
    end

    %% Jornada do Cliente
    subgraph Cliente["Jornada do Cliente"]
        OnboardingCliente --> Descoberta["Descoberta"]
        Descoberta --> Contratacao["Contratação"]
        Contratacao --> Pagamento["Pagamento"]
        Pagamento --> Avaliacao["Avaliação"]
    end

    %% Fluxo de Mentoria
    subgraph Mentoria["Fluxo de Mentoria"]
        CriarPerfil --> |"Mentor"| DefinirEspecialidade["Definir Especialidade"]
        DefinirEspecialidade --> CriarAgenda["Criar Agenda"]
        CriarAgenda --> DisponibilizarHorarios["Disponibilizar Horários"]
    end
          `}
        </pre>
      </div>
    </QuestionSection>
  );
};
