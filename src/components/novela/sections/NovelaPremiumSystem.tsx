
import { Crown } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaPremiumSystemProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaPremiumSystem = ({ isOpen, onToggle }: NovelaPremiumSystemProps) => {
  const premiumContent = {
    plans: `Planos Premium:

1. Plano Básico
- R$ 19,90/mês
- Sem anúncios
- Capítulos premium (24h após)
- Customização básica
- Badge prata

2. Plano Premium
- R$ 29,90/mês
- Todos benefícios do básico
- Capítulos premium (imediato)
- Customização avançada
- Badge dourada
- Suporte prioritário

3. Plano Anual
- R$ 249,90/ano
- Todos benefícios premium
- 2 meses grátis
- Badge exclusiva
- Eventos VIP`,

    features: `Features Premium:

1. Leitura Avançada
- Modo offline completo
- Traduções automáticas
- Modo áudio
- Sincronização dispositivos
- Backup na nuvem

2. Social Premium
- Grupos exclusivos
- Reviews destacadas
- Badges especiais
- Perfil customizado
- Eventos VIP

3. Conteúdo Exclusivo
- Capítulos antecipados
- Novels premium
- Traduções exclusivas
- Artworks especiais
- Behind the scenes`,

    benefits: `Benefícios Premium:

1. Qualidade de Vida
- Zero anúncios
- Downloads ilimitados
- Suporte prioritário
- Backup automático
- Features beta

2. Customização
- Temas exclusivos
- Fontes premium
- Layout personalizado
- Badges douradas
- Perfil VIP

3. Prioridades
- Acesso antecipado
- Suporte dedicado
- Votações exclusivas
- Descontos especiais
- Early access`,

    metrics: `Métricas Premium:

1. Conversão
- Taxa de conversão
- Churn rate
- Lifetime value
- ROI por feature

2. Engagement
- Tempo de leitura
- Features utilizadas
- Conteúdo acessado
- Interações sociais

3. Financeiro
- Receita mensal
- Ticket médio
- Custo de aquisição
- Margem por usuário`
  };

  return (
    <QuestionSection
      title="Sistema Premium"
      description="Planos, features e benefícios premium"
      icon={Crown}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Planos</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={premiumContent.plans}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Features Premium</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={premiumContent.features}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Benefícios</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={premiumContent.benefits}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Métricas</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={premiumContent.metrics}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
