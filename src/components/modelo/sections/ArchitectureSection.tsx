
import { Server } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface ArchitectureSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ArchitectureSection = ({ isOpen, onToggle }: ArchitectureSectionProps) => {
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
          <pre className="mermaid text-sm">
            {`
graph TB
    subgraph Frontend["Frontend (React + TypeScript)"]
        UI[Interface do Usuário]
        State[Gerenciamento de Estado]
        Auth[Autenticação]
        Chat[Sistema de Chat]
    end

    subgraph Backend["Backend Services"]
        API[APIs RESTful]
        Realtime[Eventos Real-time]
        Queue[Sistema de Filas]
        Storage[Armazenamento]
    end

    subgraph Security["Segurança"]
        JWT[JWT Auth]
        Encrypt[Criptografia]
        2FA[2FA]
    end

    subgraph Integration["Integrações"]
        Payment[Gateway Pagamento]
        Email[Serviço de Email]
        Storage[Cloud Storage]
    end

    Frontend --> Backend
    Backend --> Security
    Backend --> Integration
            `}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">3.1 Stack Tecnológico</h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              defaultValue={`Frontend: React, TypeScript, TailwindCSS
Backend: Node.js, Express, WebSocket
Database: PostgreSQL, Redis
Cloud: AWS (S3, SQS, Lambda)`}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-3">3.2 Integrações</h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              defaultValue={`Stripe para pagamentos
SendGrid para emails
AWS S3 para arquivos
Socket.io para chat em tempo real`}
            />
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
