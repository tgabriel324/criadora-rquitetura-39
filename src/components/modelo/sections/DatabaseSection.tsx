
import { Database } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface DatabaseSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DatabaseSection = ({ isOpen, onToggle }: DatabaseSectionProps) => {
  return (
    <QuestionSection
      title="4. Estrutura de Dados"
      description="Modelagem do Banco de Dados"
      icon={Database}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
          <pre className="mermaid text-sm">
            {`
erDiagram
    USUARIO ||--o{ PERFIL : possui
    USUARIO ||--o{ SERVICO : oferece
    USUARIO ||--o{ MENTORIA : oferece
    USUARIO ||--o{ AVALIACAO : recebe
    SERVICO ||--|{ CATEGORIA : pertence
    SERVICO ||--o{ PEDIDO : gera
    MENTORIA ||--o{ AGENDAMENTO : tem
    CHAT }|--|| USUARIO : participa
    CHAT ||--|{ MENSAGEM : contem
    PEDIDO ||--|{ PAGAMENTO : possui
            `}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">4.1 Principais Entidades</h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              defaultValue={`Usuários e Perfis
Serviços e Mentorias
Chats e Mensagens
Pedidos e Pagamentos`}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-3">4.2 Relacionamentos</h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              defaultValue={`Usuário pode ter múltiplos perfis
Serviços pertencem a categorias
Mentorias têm agendamentos
Chats conectam usuários`}
            />
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
