
import { Database } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface DatabaseSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DatabaseSection = ({ isOpen, onToggle }: DatabaseSectionProps) => {
  const databaseChart = `
erDiagram
    USUARIO {
        string id
        string nome
        string email
        string tipo
    }
    PERFIL {
        string id
        string userId
        string bio
        string especialidade
    }
    SERVICO {
        string id
        string titulo
        number preco
        string descricao
    }
    MENTORIA {
        string id
        string mentorId
        string titulo
        number preco
    }
    AGENDAMENTO {
        string id
        string mentoriaId
        datetime data
    }
    CHAT {
        string id
        string usuarioId1
        string usuarioId2
    }
    PEDIDO {
        string id
        string servicoId
        string clienteId
        string status
    }
    PAGAMENTO {
        string id
        string pedidoId
        number valor
        string status
    }
    
    USUARIO ||--o{ PERFIL : possui
    USUARIO ||--o{ SERVICO : oferece
    USUARIO ||--o{ MENTORIA : oferece
    USUARIO ||--o{ PEDIDO : realiza
    SERVICO ||--o{ PEDIDO : gera
    MENTORIA ||--o{ AGENDAMENTO : tem
    PEDIDO ||--|{ PAGAMENTO : possui
    CHAT }|--|| USUARIO : participa
  `;

  return (
    <QuestionSection
      title="4. Estrutura de Dados"
      description="Modelagem do Banco de Dados"
      icon={Database}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <Mermaid chart={databaseChart} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">4.1 Principais Entidades</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Usuários e Perfis</p>
              <p className="p-2 bg-white rounded border">Serviços e Mentorias</p>
              <p className="p-2 bg-white rounded border">Chats e Mensagens</p>
              <p className="p-2 bg-white rounded border">Pedidos e Pagamentos</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">4.2 Relacionamentos</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="p-2 bg-white rounded border">Usuário pode ter múltiplos perfis</p>
              <p className="p-2 bg-white rounded border">Serviços pertencem a categorias</p>
              <p className="p-2 bg-white rounded border">Mentorias têm agendamentos</p>
              <p className="p-2 bg-white rounded border">Chats conectam usuários</p>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
