
import { GitBranch } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaPlatformFeaturesProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaPlatformFeatures = ({ isOpen, onToggle }: NovelaPlatformFeaturesProps) => {
  const featuresContent = {
    reading: `Features de Leitura:

1. Interface do Leitor
- Layout responsivo
- Customização de fonte
- Temas (claro/escuro)
- Modo de leitura
- Ajuste de margens
- Progress tracking
- Modo offline

2. Sistema de Marcadores
- Marcadores personalizados
- Notas por marcador
- Sincronização
- Exportação

3. Sistema de Notas
- Notas inline
- Categorização
- Compartilhamento
- Backup automático`,

    social: `Features Sociais:

1. Perfil
- Customização avançada
- Estatísticas públicas
- Biblioteca pública/privada
- Conquistas e badges
- Histórico de atividades

2. Comunidade
- Grupos de leitura
- Fóruns por novel
- Sistema de reviews
- Comentários inline
- Rankings e leaderboards

3. Interação
- Sistema de seguir
- Feed de atividades
- Recomendações
- Notificações
- Eventos comunitários`,

    premium: `Features Premium:

1. Conteúdo Exclusivo
- Capítulos antecipados
- Novels premium
- Traduções exclusivas
- Conteúdo curado

2. Customização Avançada
- Temas exclusivos
- Badges douradas
- Perfil personalizado
- Interface premium

3. Benefícios
- Sem anúncios
- Downloads ilimitados
- Suporte prioritário
- Eventos VIP`,

    technical: `Features Técnicas:

1. Performance
- Lazy loading
- Caching inteligente
- Otimização de imagens
- PWA com offline

2. Segurança
- Autenticação robusta
- Proteção contra cópia
- Backups automáticos
- Logs de atividade

3. Integrações
- Push notifications
- Email marketing
- Analytics avançado
- Sistema de pagamentos`
  };

  return (
    <QuestionSection
      title="Features da Plataforma"
      description="Principais funcionalidades e recursos"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Features de Leitura</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={featuresContent.reading}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Features Sociais</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={featuresContent.social}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Features Premium</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={featuresContent.premium}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Features Técnicas</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={featuresContent.technical}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
