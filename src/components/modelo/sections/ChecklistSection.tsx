
import { CheckSquare } from "lucide-react";
import { QuestionSection } from "../QuestionSection";

interface ChecklistSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChecklistSection = ({ isOpen, onToggle }: ChecklistSectionProps) => {
  return (
    <QuestionSection
      title="Checklist do Sistema"
      description="Lista completa de áreas, telas e funcionalidades"
      icon={CheckSquare}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        {/* Autenticação e Acesso */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">🔐 Autenticação e Acesso</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Landing Pages</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Página Inicial</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Página de Login</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Cadastro de Usuário</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Recuperação de Senha</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Verificação</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Verificação de Email</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Verificação de Documentos</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Confirmação de Telefone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Área do Cliente */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">👤 Área do Cliente</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Dashboard</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Visão Geral</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Histórico de Atividades</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Notificações</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Perfil</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Edição de Perfil</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Preferências</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Configurações de Privacidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Área do Profissional */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">👨‍💼 Área do Profissional</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Gestão de Serviços</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Cadastro de Serviços</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Gestão de Agenda</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Precificação</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Analytics</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Métricas de Desempenho</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Relatórios Financeiros</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Avaliações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Marketplace */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">🛍️ Marketplace</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Listagem e Busca</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Filtros Avançados</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Categorias</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Sistema de Reviews</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Transações</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Carrinho de Compras</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Checkout</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Histórico de Compras</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sistema de Mentorias */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">👨‍🏫 Sistema de Mentorias</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Salas Virtuais</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Videoconferência</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Compartilhamento de Tela</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Chat em Tempo Real</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Recursos</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Material de Apoio</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Certificados</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Avaliações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sistema de Pagamentos */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">💰 Sistema de Pagamentos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Métodos de Pagamento</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Cartão de Crédito</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>PIX</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Boleto</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Gestão Financeira</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Extratos</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Saques</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Relatórios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Área Administrativa */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">⚙️ Área Administrativa</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Gestão de Usuários</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Moderação</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Permissões</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Bloqueios</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Configurações</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Parâmetros do Sistema</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Taxas e Comissões</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>Integrações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
