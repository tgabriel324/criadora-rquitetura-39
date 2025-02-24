
import { Database } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaDatabaseModelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaDatabaseModel = ({ isOpen, onToggle }: NovelaDatabaseModelProps) => {
  const databaseContent = {
    tables: `Principais Tabelas:

1. Users
- id: UUID (PK)
- username: string
- email: string
- password_hash: string
- is_premium: boolean
- profile_image: string
- created_at: timestamp
- settings: jsonb

2. Novels
- id: UUID (PK)
- title: string
- author: string
- cover_image: string
- description: text
- status: enum
- is_premium: boolean
- views: integer
- rating: decimal

3. Chapters
- id: UUID (PK)
- novel_id: UUID (FK)
- number: integer
- title: string
- content: text
- is_premium: boolean
- created_at: timestamp

4. UserProgress
- user_id: UUID (FK)
- novel_id: UUID (FK)
- chapter_id: UUID (FK)
- progress: integer
- last_read: timestamp
- notes: jsonb

5. Comments
- id: UUID (PK)
- user_id: UUID (FK)
- chapter_id: UUID (FK)
- content: text
- created_at: timestamp
- parent_id: UUID

6. Reviews
- id: UUID (PK)
- user_id: UUID (FK)
- novel_id: UUID (FK)
- rating: integer
- content: text
- created_at: timestamp

7. Subscriptions
- id: UUID (PK)
- user_id: UUID (FK)
- plan_id: UUID (FK)
- status: enum
- start_date: timestamp
- end_date: timestamp`,

    relationships: `Relacionamentos:

1. Users → Novels (Favorites)
- user_id: UUID (FK)
- novel_id: UUID (FK)
- created_at: timestamp

2. Users → Users (Following)
- follower_id: UUID (FK)
- following_id: UUID (FK)
- created_at: timestamp

3. Users → Groups
- user_id: UUID (FK)
- group_id: UUID (FK)
- role: enum
- joined_at: timestamp

4. Novels → Tags
- novel_id: UUID (FK)
- tag_id: UUID (FK)

5. Users → Achievements
- user_id: UUID (FK)
- achievement_id: UUID (FK)
- unlocked_at: timestamp`,

    indexes: `Índices e Otimizações:

1. Índices Primários
- Users: email, username
- Novels: title, author
- Chapters: novel_id, number
- Comments: chapter_id, created_at

2. Índices de Busca
- Novels: título + descrição (GIN)
- Tags: nome + descrição
- Users: username + email
- Chapters: conteúdo (GIN)

3. Índices de Performance
- UserProgress: user_id + novel_id
- Comments: parent_id + created_at
- Reviews: novel_id + rating
- Subscriptions: user_id + status`,

    views: `Views e Materialized Views:

1. NovelStats
- Total de leituras
- Média de ratings
- Comentários totais
- Favoritos

2. UserStats
- Capítulos lidos
- Tempo total de leitura
- Novels completadas
- Conquistas

3. TrendingNovels
- Novels mais lidas
- Melhor avaliadas
- Mais comentadas
- Mais favoritadas

4. PremiumMetrics
- Conversão de usuários
- Retenção
- Receita por novel
- Engagement premium`
  };

  return (
    <QuestionSection
      title="Modelo de Dados"
      description="Estrutura do banco de dados e relacionamentos"
      icon={Database}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Tabelas Principais</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={12}
            defaultValue={databaseContent.tables}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Relacionamentos</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={databaseContent.relationships}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Índices e Otimizações</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={databaseContent.indexes}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Views</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={databaseContent.views}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
