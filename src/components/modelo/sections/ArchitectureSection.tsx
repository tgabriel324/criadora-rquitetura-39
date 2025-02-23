
import { Server } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface ArchitectureSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ArchitectureSection = ({ isOpen, onToggle }: ArchitectureSectionProps) => {
  const architectureChart = `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006D77', 'secondaryColor': '#83c5be', 'tertiaryColor': '#FF8533', 'primaryTextColor': '#221F26' }}}%%

graph TB
    subgraph Frontend["Frontend (React + TypeScript)"]
        style Frontend fill:#83c5be,color:#221F26
        UI[Interface do Usuário]
        State[Gerenciamento de Estado]
        Auth[Autenticação]
        Chat[Sistema de Chat]
    end

    subgraph Backend["Backend Services"]
        style Backend fill:#006D77,color:#fff
        API[APIs RESTful]
        Realtime[Eventos Real-time]
        Queue[Sistema de Filas]
        Storage[Armazenamento]
    end

    subgraph Security["Segurança"]
        style Security fill:#FF8533,color:#221F26
        JWT[JWT Auth]
        Encrypt[Criptografia]
        2FA[2FA]
    end

    subgraph Integration["Integrações"]
        style Integration fill:#83c5be,color:#221F26
        Payment[Gateway Pagamento]
        Email[Serviço de Email]
        CloudStorage[Cloud Storage]
    end

    Frontend --> Backend
    Backend --> Security
    Backend --> Integration
  `;

  return (
    <QuestionSection
      title="3. Arquitetura do Sistema"
      description="Estrutura e Componentes"
      icon={Server}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
          <Mermaid chart={architectureChart} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">3.1 Stack Tecnológico</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Frontend: React, TypeScript, TailwindCSS</p>
              <p className="p-2 bg-white rounded border">Backend: Node.js, Express, WebSocket</p>
              <p className="p-2 bg-white rounded border">Database: PostgreSQL, Redis</p>
              <p className="p-2 bg-white rounded border">Cloud: AWS (S3, SQS, Lambda)</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">3.2 Integrações</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Stripe para pagamentos</p>
              <p className="p-2 bg-white rounded border">SendGrid para emails</p>
              <p className="p-2 bg-white rounded border">AWS S3 para arquivos</p>
              <p className="p-2 bg-white rounded border">Socket.io para chat em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
