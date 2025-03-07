
import { Layers } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { QuestionInput } from "../QuestionInput";
import { questions } from "../data/questions";

interface VisionSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const VisionSection = ({ isOpen, onToggle }: VisionSectionProps) => {
  const answers = {
    problem: `1. Fragmentação das plataformas de leitura de novels
2. Falta de experiência premium para leitores
3. Dificuldade em encontrar conteúdo de qualidade
4. Ausência de interação social significativa
5. Necessidade de recursos avançados de leitura`,

    stakeholders: `1. Leitores:
- Leitores casuais (plano gratuito)
- Leitores premium (assinantes)
- Leitores criadores de conteúdo

2. Criadores de Conteúdo:
- Autores de novels
- Tradutores
- Editores

3. Administradores:
- Equipe de moderação
- Equipe de suporte
- Gestores de conteúdo

4. Parceiros:
- Editoras
- Plataformas de pagamento
- Provedores de serviços`,

    objective: `1. Principal:
- Criar a melhor plataforma de leitura de novels com experiência premium

2. Específicos:
- Oferecer interface de leitura personalizada
- Criar comunidade engajada
- Monetizar conteúdo premium
- Facilitar descoberta de novels
- Garantir qualidade do conteúdo`,

    value: `1. Diferenciais da Plataforma:
- Interface de leitura customizável
- Sistema de badges e achievements
- Recursos premium exclusivos
- Interação social avançada
- Sistema de recomendações

2. Benefícios para Usuários:
- Experiência de leitura superior
- Conteúdo exclusivo e antecipado
- Recursos avançados de personalização
- Comunidade ativa
- Suporte premium

3. Inovações:
- Sistema de badges douradas
- Analytics avançado de leitura
- Recursos sociais integrados
- Sincronização multiplataforma`,

    metrics: `1. Engajamento:
- Tempo médio de leitura
- Capítulos lidos/dia
- Interações sociais
- Uso de features premium

2. Monetização:
- Taxa de conversão premium
- Receita por usuário
- Retenção de assinantes
- Lifetime value

3. Crescimento:
- Usuários ativos
- Novels publicadas
- Conteúdo gerado
- Retenção geral

4. Qualidade:
- Satisfação do usuário
- Reviews positivas
- Taxa de reports
- Tempo de resposta`,

    architecture: `1. Frontend:
- React.js/TypeScript
- PWA
- Design System próprio
- Interface responsiva

2. Backend:
- Node.js/Express
- WebSocket
- Cache distribuído
- APIs RESTful

3. Infraestrutura:
- Cloud-native
- CDN global
- Banco distribuído
- Elastic search

4. Integrações:
- Gateway de pagamento
- Serviço de email
- Push notifications
- Analytics`
  };

  return (
    <QuestionSection
      title="1. Visão Geral do Projeto"
      description="Definição clara dos objetivos e escopo"
      icon={Layers}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <QuestionInput 
          question={questions.vision[0]} 
          defaultValue={answers.problem}
          multiline
          rows={4}
        />
        <QuestionInput 
          question={questions.vision[1]} 
          defaultValue={answers.stakeholders}
          multiline
          rows={8}
        />
        <QuestionInput 
          question={questions.vision[2]} 
          defaultValue={answers.objective}
          multiline
          rows={6}
        />
        <QuestionInput 
          question={questions.vision[3]} 
          defaultValue={answers.value}
          multiline
          rows={8}
        />
        <QuestionInput 
          question={questions.vision[4]} 
          defaultValue={answers.metrics}
          multiline
          rows={8}
        />
        <QuestionInput 
          question={questions.vision[5]} 
          defaultValue={answers.architecture}
          multiline
          rows={8}
        />
      </div>
    </QuestionSection>
  );
};
