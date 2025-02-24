
import { Users } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaSocialFeaturesProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaSocialFeatures = ({ isOpen, onToggle }: NovelaSocialFeaturesProps) => {
  const socialContent = {
    profile: `Perfil do Usuário:

1. Personalização
- Avatar customizado
- Banner de perfil
- Bio e descrição
- Links sociais
- Badges e conquistas

2. Biblioteca Pública
- Novels favoritas
- Lendo atualmente
- Lista de desejos
- Reviews escritas
- Recomendações

3. Estatísticas
- Capítulos lidos
- Tempo de leitura
- Novels completadas
- Nível de atividade
- Rankings`,

    community: `Recursos da Comunidade:

1. Grupos de Leitura
- Criação de grupos
- Discussões por capítulo
- Eventos de leitura
- Ranks de membros
- Desafios de grupo

2. Sistema de Reviews
- Avaliações detalhadas
- Rating por aspectos
- Likes e comentários
- Destaque premium
- Anti-spam

3. Interações
- Seguir usuários
- Feed de atividades
- Compartilhamento
- Menções
- Notificações`,

    gamification: `Gamificação:

1. Sistema de Níveis
- XP por atividade
- Rankings semanais
- Conquistas especiais
- Benefícios por nível
- Desafios diários

2. Badges e Conquistas
- Badges douradas (premium)
- Conquistas por atividade
- Coleções especiais
- Eventos sazonais
- Recordes pessoais

3. Recompensas
- Itens exclusivos
- Customizações
- Acessos antecipados
- Benefícios especiais
- Sorteios VIP`,

    moderation: `Moderação Social:

1. Sistema de Reports
- Conteúdo impróprio
- Spam e abusos
- Plágio
- Comportamento tóxico
- Reviews falsas

2. Filtros Automáticos
- Palavras proibidas
- Links suspeitos
- Flood protection
- Anti-spam
- Verificação de bots

3. Ações Moderativas
- Avisos
- Suspensões
- Banimentos
- Remoção de conteúdo
- Logs de ações`
  };

  return (
    <QuestionSection
      title="Features Sociais"
      description="Recursos de comunidade e interação"
      icon={Users}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Perfil do Usuário</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={socialContent.profile}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Recursos da Comunidade</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={socialContent.community}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Gamificação</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={socialContent.gamification}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Moderação</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={socialContent.moderation}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
