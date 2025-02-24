
import { Layout } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaPlatformStructureProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaPlatformStructure = ({ isOpen, onToggle }: NovelaPlatformStructureProps) => {
  const structureContent = {
    userAreas: `Áreas do Usuário Final:

1. Dashboard (/dashboard)
- Feed personalizado
- Recomendações
- Progresso de leitura
- Metas e achievements
- Notificações

2. Biblioteca (/library)
- Lista de leitura
- Histórico
- Favoritos
- Categorias
- Filtros avançados

3. Leitor (/reader)
- Interface customizável
- Modo de leitura
- Marcadores e notas
- Comentários inline

4. Social (/social)
- Feed de atividades
- Grupos de leitura
- Fóruns e reviews
- Amigos e seguidores

5. Perfil (/profile)
- Dados pessoais
- Estatísticas
- Conquistas
- Configurações
- Assinatura`,

    adminAreas: `Áreas Administrativas:

1. Dashboard Admin (/admin)
- Visão geral
- Métricas principais
- Relatórios rápidos
- Alertas

2. Gestão de Usuários (/admin/users)
- Lista de usuários
- Detalhes de perfis
- Ações administrativas
- Relatórios

3. Gestão de Novels (/admin/novels)
- Catálogo completo
- Aprovações
- Edição de conteúdo
- Estatísticas

4. Moderação (/admin/moderation)
- Reviews pendentes
- Comentários reportados
- Conteúdo flagged
- Log de ações

5. Relatórios (/admin/reports)
- Analytics detalhado
- Métricas de engajamento
- Relatórios financeiros
- Tendências

6. Planos (/admin/plans)
- Gestão de planos
- Promoções
- Métricas de conversão
- Relatórios financeiros`,

    flows: `Fluxos Principais:

1. Usuário → Admin
- Reportes de conteúdo
- Solicitações de suporte
- Reviews e comentários
- Pagamentos

2. Admin → Usuário
- Moderação de conteúdo
- Respostas de suporte
- Atualizações de status
- Promoções/Ofertas

3. Sistema de Notificações
- Real-time via WebSocket
- Emails transacionais
- Push notifications
- Centro de notificações`,

    integrations: `Integrações:

1. Autenticação
- JWT tokens
- Roles e permissões
- Sessions

2. APIs
- RESTful endpoints
- WebSocket real-time
- Rate limiting
- Caching

3. Monitoramento
- Logs unificados
- Métricas de performance
- Alertas automáticos
- Dashboard operacional

4. Integrações Cruzadas
- Sistema de achievements
- Analytics unificado
- Logs centralizados
- Pagamentos integrados`
  };

  return (
    <QuestionSection
      title="Estrutura da Plataforma"
      description="Organização das áreas e fluxos principais"
      icon={Layout}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Áreas do Usuário</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={12}
            defaultValue={structureContent.userAreas}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Áreas Administrativas</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={12}
            defaultValue={structureContent.adminAreas}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Fluxos</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={structureContent.flows}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Integrações</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={structureContent.integrations}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
