
import { Users } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface OrganizationalSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const OrganizationalSection = ({ isOpen, onToggle }: OrganizationalSectionProps) => {
  const organizationalChart = `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006D77', 'secondaryColor': '#83c5be', 'tertiaryColor': '#FF8533', 'primaryTextColor': '#221F26' }}}%%

graph TD
    subgraph Acessos["Níveis de Acesso"]
        style Acessos fill:#83c5be,color:#221F26
        SA[Super Admin] --> Admin[Administradores]
        Admin --> Mentor[Mentores]
        Admin --> Pro[Profissionais]
        Admin --> Client[Clientes]
    end

    subgraph Areas["Áreas Principais"]
        style Areas fill:#006D77,color:#fff
        Dashboard --> Marketplace
        Dashboard --> Mentorias
        Dashboard --> Financeiro
        Dashboard --> Config[Configurações]
    end

    subgraph Funcionalidades["Funcionalidades Principais"]
        style Funcionalidades fill:#FF8533,color:#221F26
        Marketplace --> |"Inclui"| Servicos[Serviços]
        Marketplace --> |"Inclui"| Chat[Chat]
        Marketplace --> |"Inclui"| Pagamentos[Pagamentos]
        Mentorias --> |"Inclui"| Agenda[Agendamento]
        Mentorias --> |"Inclui"| Salas[Salas Virtuais]
    end

    SA --> Areas
  `;

  return (
    <QuestionSection
      title="2. Estrutura Organizacional"
      description="Hierarquia e Organização do Sistema"
      icon={Users}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <Mermaid chart={organizationalChart} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Níveis de Acesso</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Super Admin - Controle total</p>
              <p className="p-2 bg-white rounded border">Administradores - Gestão operacional</p>
              <p className="p-2 bg-white rounded border">Mentores - Área de mentorias</p>
              <p className="p-2 bg-white rounded border">Profissionais - Serviços</p>
              <p className="p-2 bg-white rounded border">Clientes - Usuários finais</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Áreas do Sistema</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Dashboard</p>
              <p className="p-2 bg-white rounded border">Marketplace</p>
              <p className="p-2 bg-white rounded border">Sistema de Mentorias</p>
              <p className="p-2 bg-white rounded border">Gestão Financeira</p>
              <p className="p-2 bg-white rounded border">Configurações</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Funcionalidades</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Cadastro e Gestão</p>
              <p className="p-2 bg-white rounded border">Chat Integrado</p>
              <p className="p-2 bg-white rounded border">Sistema de Pagamentos</p>
              <p className="p-2 bg-white rounded border">Agendamentos</p>
              <p className="p-2 bg-white rounded border">Avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
