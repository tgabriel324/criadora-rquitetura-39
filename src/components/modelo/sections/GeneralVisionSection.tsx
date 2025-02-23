
import { Eye } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface GeneralVisionSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const GeneralVisionSection = ({ isOpen, onToggle }: GeneralVisionSectionProps) => {
  const generalFlowChart = `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006D77', 'secondaryColor': '#83c5be', 'tertiaryColor': '#FF8533', 'primaryTextColor': '#221F26' }}}%%

graph TD
    %% Administração e Gestão
    subgraph Admin["Administração da Plataforma"]
        style Admin fill:#006D77,color:#fff
        GestaoPlataforma["Gestão da Plataforma"] --> |"Gerencia"| Metricas["Métricas e KPIs"]
        GestaoPlataforma --> |"Define"| Politicas["Políticas e Regras"]
        GestaoPlataforma --> |"Monitora"| Qualidade["Qualidade do Serviço"]
        Metricas --> |"Gera"| Relatorios["Relatórios"]
        Politicas --> |"Define"| Comissoes["Comissões"]
    end

    %% Profissionais e Serviços
    subgraph Pros["Profissionais e Mentores"]
        style Pros fill:#83c5be,color:#221F26
        CadastroPro["Cadastro Profissional"] --> |"Cria"| PerfilPro["Perfil Profissional"]
        PerfilPro --> |"Oferece"| Servicos["Serviços"]
        PerfilPro --> |"Oferece"| Mentorias["Mentorias"]
        Servicos --> |"Gera"| Receitas["Receitas"]
        Mentorias --> |"Gera"| ReceitasMentoria["Receitas Mentoria"]
    end

    %% Marketing e Aquisição
    subgraph Marketing["Marketing e Aquisição"]
        style Marketing fill:#FF8533,color:#221F26
        Marketing_Digital["Marketing Digital"] --> |"Gera"| Leads["Leads"]
        Leads --> |"Converte"| Usuarios["Usuários"]
        Marketing_Digital --> |"Gera"| Trafego["Tráfego"]
        Trafego --> |"Gera"| Conversoes["Conversões"]
    end

    %% Clientes e Experiência
    subgraph Clientes["Clientes e Experiência"]
        style Clientes fill:#83c5be,color:#221F26
        CadastroCliente["Cadastro Cliente"] --> |"Busca"| Solucoes["Soluções"]
        Solucoes --> |"Realiza"| Contratacao["Contratação"]
        Contratacao --> |"Gera"| Pagamento["Pagamento"]
        Pagamento --> |"Permite"| Avaliacao["Avaliação"]
    end

    %% Suporte e Qualidade
    subgraph Suporte["Suporte e Qualidade"]
        style Suporte fill:#006D77,color:#fff
        AtendimentoCliente["Atendimento"] --> |"Resolve"| Tickets["Tickets"]
        Tickets --> |"Gera"| Feedbacks["Feedbacks"]
        Feedbacks --> |"Melhora"| Qualidade
    end

    %% Conexões entre subgrafos
    Marketing --> Pros
    Marketing --> Clientes
    Pros --> Clientes
    Clientes --> Suporte
    Suporte --> Admin
`;

  const generalArchitectureChart = `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006D77', 'secondaryColor': '#83c5be', 'tertiaryColor': '#FF8533', 'primaryTextColor': '#221F26' }}}%%

graph TB
    %% Frontend Layer
    subgraph Frontend["Camada de Frontend"]
        style Frontend fill:#83c5be,color:#221F26
        WebApp["Web App (React)"]
        MobileApp["Mobile App (PWA)"]
        AdminPanel["Painel Admin"]
    end

    %% Application Layer
    subgraph Application["Camada de Aplicação"]
        style Application fill:#006D77,color:#fff
        API["API Gateway"]
        Auth["Autenticação"]
        ServiceLogic["Lógica de Serviços"]
        MentorshipLogic["Lógica de Mentorias"]
        PaymentLogic["Lógica de Pagamentos"]
        NotificationSystem["Sistema de Notificações"]
    end

    %% Services Layer
    subgraph Services["Camada de Serviços"]
        style Services fill:#FF8533,color:#221F26
        ChatService["Serviço de Chat"]
        VideoService["Serviço de Video"]
        EmailService["Serviço de Email"]
        PaymentProcessor["Processador de Pagamentos"]
        StorageService["Serviço de Armazenamento"]
        Analytics["Analytics"]
    end

    %% Data Layer
    subgraph Data["Camada de Dados"]
        style Data fill:#83c5be,color:#221F26
        MainDB["Banco Principal"]
        CacheDB["Cache"]
        MessageQueue["Fila de Mensagens"]
        FileStorage["Armazenamento de Arquivos"]
    end

    %% Security Layer
    subgraph Security["Camada de Segurança"]
        style Security fill:#006D77,color:#fff
        Firewall["Firewall"]
        WAF["Web Application Firewall"]
        DDoS["Proteção DDoS"]
        Encryption["Criptografia"]
    end

    %% Connections
    Frontend --> Security
    Security --> Application
    Application --> Services
    Services --> Data
    Application --> Data
`;

  return (
    <QuestionSection
      title="1. Visão Geral do Sistema"
      description="Fluxo geral e arquitetura completa"
      icon={Eye}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">1.1 Fluxo Geral do Negócio</h3>
          <div className="bg-white p-4 rounded-lg shadow-inner">
            <Mermaid chart={generalFlowChart} />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">1.2 Arquitetura Geral do Sistema</h3>
          <div className="bg-white p-4 rounded-lg shadow-inner">
            <Mermaid chart={generalArchitectureChart} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Principais Stakeholders</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Administração da Plataforma</p>
              <p className="p-2 bg-white rounded border">Profissionais e Mentores</p>
              <p className="p-2 bg-white rounded border">Clientes</p>
              <p className="p-2 bg-white rounded border">Equipe de Marketing</p>
              <p className="p-2 bg-white rounded border">Suporte e Atendimento</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Componentes Principais</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Frontend e Apps</p>
              <p className="p-2 bg-white rounded border">APIs e Serviços</p>
              <p className="p-2 bg-white rounded border">Banco de Dados</p>
              <p className="p-2 bg-white rounded border">Serviços de Terceiros</p>
              <p className="p-2 bg-white rounded border">Camada de Segurança</p>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
