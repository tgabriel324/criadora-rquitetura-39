import { GitBranch } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface FlowsSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const FlowsSection = ({ isOpen, onToggle }: FlowsSectionProps) => {
  const flowsChart = `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006D77', 'secondaryColor': '#83c5be', 'tertiaryColor': '#FF8533', 'primaryTextColor': '#221F26' }}}%%

graph TD
    %% Fluxos de Entrada
    subgraph Entrada["Fluxos de Entrada"]
        style Entrada fill:#83c5be,color:#221F26
        Marketing["Marketing Digital"] --> Landing
        Indicacao["Indicação"] --> Landing
        Landing --> Cadastro
        Cadastro --> |"Profissional"| OnboardingPro["Onboarding Pro"]
        Cadastro --> |"Cliente"| OnboardingCliente["Onboarding Cliente"]
    end

    %% Jornada do Profissional
    subgraph Profissional["Jornada do Profissional"]
        style Profissional fill:#006D77,color:#fff
        OnboardingPro --> CriarPerfil["Criar Perfil"]
        CriarPerfil --> CriarServicos["Criar Serviços"]
        CriarServicos --> |"Gera"| Receita["Receita"]
        Receita --> |"Gera"| Metricas["Métricas"]
    end

    %% Jornada do Cliente
    subgraph Cliente["Jornada do Cliente"]
        style Cliente fill:#FF8533,color:#221F26
        OnboardingCliente --> Descoberta["Descoberta"]
        Descoberta --> Contratacao["Contratação"]
        Contratacao --> Pagamento["Pagamento"]
        Pagamento --> Avaliacao["Avaliação"]
    end

    %% Fluxo de Mentoria
    subgraph Mentoria["Fluxo de Mentoria"]
        style Mentoria fill:#83c5be,color:#221F26
        CriarPerfil --> |"Mentor"| DefinirEspecialidade["Definir Especialidade"]
        DefinirEspecialidade --> CriarAgenda["Criar Agenda"]
        CriarAgenda --> DisponibilizarHorarios["Disponibilizar Horários"]
        DisponibilizarHorarios --> AgendamentoMentoria["Agendamento"]
        AgendamentoMentoria --> SalaVirtual["Sala Virtual"]
        SalaVirtual --> Certificado["Certificado"]
    end

    %% Fluxo de Chat e Pagamento
    subgraph Interacao["Fluxo de Interação"]
        style Interacao fill:#006D77,color:#fff
        Descoberta --> IniciarConversa["Iniciar Conversa"]
        IniciarConversa --> NegociarServico["Negociar Serviço"]
        NegociarServico --> FecharContrato["Fechar Contrato"]
        FecharContrato --> ProcessarPagamento["Processar Pagamento"]
        ProcessarPagamento --> LiberarServico["Liberar Serviço"]
    end
  `;

  return (
    <QuestionSection
      title="6. Fluxos e Narrativas"
      description="Fluxos principais do sistema"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="bg-white p-4 rounded-lg shadow-inner">
        <Mermaid chart={flowsChart} />
      </div>
    </QuestionSection>
  );
};
