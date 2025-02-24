
import { Lock } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaSecuritySectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaSecuritySection = ({ isOpen, onToggle }: NovelaSecuritySectionProps) => {
  const securityContent = {
    authentication: `Autenticação e Autorização:

1. Sistema de Login
- JWT tokens
- Refresh tokens
- Social auth
- 2FA opcional
- Session management

2. Permissões
- RBAC (Role-based)
- Níveis de acesso
- Verificações granulares
- Audit logs
- Timeouts`,

    dataProtection: `Proteção de Dados:

1. Segurança de Conteúdo
- Criptografia em repouso
- Anti-scraping
- Watermarking
- DRM básico
- Rate limiting

2. Dados Pessoais
- LGPD compliance
- Dados sensíveis
- Backups seguros
- Anonimização
- Exclusão segura`,

    infrastructure: `Infraestrutura:

1. Servidores
- HTTPS everywhere
- WAF
- DDoS protection
- Monitoramento 24/7
- Backups redundantes

2. Código
- Security headers
- Input validation
- XSS protection
- CSRF tokens
- SQL injection prevention`,

    monitoring: `Monitoramento:

1. Logs e Auditoria
- Access logs
- Security events
- User actions
- System alerts
- Compliance reports

2. Respostas
- Incident response
- Alert system
- Auto-blocking
- Recovery plans
- Status page`
  };

  return (
    <QuestionSection
      title="Segurança"
      description="Medidas e protocolos de segurança"
      icon={Lock}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Autenticação e Autorização</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={securityContent.authentication}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Proteção de Dados</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={securityContent.dataProtection}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Infraestrutura</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={securityContent.infrastructure}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Monitoramento</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={securityContent.monitoring}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
