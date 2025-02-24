
import { BookOpen } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";
import { QuestionInput } from "../../modelo/QuestionInput";

interface NovelaPlatformVisionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaPlatformVision = ({ isOpen, onToggle }: NovelaPlatformVisionProps) => {
  const visionContent = {
    overview: `O NovelaBook é uma plataforma premium de leitura de novels (light novels, web novels) que oferece:

1. Experiência de Leitura Premium
- Interface personalizável
- Modo de leitura avançado
- Sistema de marcadores e notas
- Sincronização multiplataforma

2. Comunidade Engajada
- Grupos de leitura
- Sistema de reviews
- Fóruns por novel/categoria
- Interação social

3. Conteúdo Exclusivo
- Capítulos antecipados
- Novels premium
- Traduções exclusivas
- Conteúdo curado`,

    target: `1. Público Principal
- Leitores ávidos de novels
- Entusiastas de literatura asiática
- Comunidade otaku/weeb
- Leitores premium

2. Criadores de Conteúdo
- Autores independentes
- Tradutores profissionais
- Editoras parceiras
- Curadores de conteúdo`,

    differentials: `1. Premium Experience
- Interface luxuosa com elementos dourados
- Sistema de badges exclusivas
- Customização avançada
- Suporte prioritário

2. Social Features
- Grupos de leitura premium
- Reviews destacadas
- Sistema de ranking
- Eventos exclusivos

3. Content Quality
- Curadoria profissional
- Traduções verificadas
- Conteúdo antecipado
- Novels exclusivas`,

    challenges: `1. Técnicos
- Alta performance com grande volume de texto
- Sincronização offline/online
- Escalabilidade do sistema
- Proteção contra cópia

2. Negócio
- Conversão de usuários free para premium
- Retenção de assinantes
- Aquisição de conteúdo exclusivo
- Moderação de conteúdo gerado

3. Mercado
- Concorrência com sites gratuitos
- Pirataria de conteúdo
- Direitos autorais internacionais
- Precificação adequada`
  };

  return (
    <QuestionSection
      title="Visão da Plataforma"
      description="Conceito e objetivos do NovelaBook"
      icon={BookOpen}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Visão Geral</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={visionContent.overview}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Público-Alvo</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={6}
            defaultValue={visionContent.target}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Diferenciais</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={visionContent.differentials}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Desafios</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={visionContent.challenges}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
