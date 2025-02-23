
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
    problem: `1. Dificuldade de profissionais em monetizar conhecimentos e habilidades
2. Fragmentação das soluções de networking profissional e marketplace
3. Falta de ambiente integrado para desenvolvimento profissional
4. Complexidade na gestão de múltiplas plataformas
5. Ausência de garantias em transações profissionais`,

    stakeholders: `1. Profissionais oferecendo serviços:
- Consultores independentes
- Mentores e especialistas
- Prestadores de serviços

2. Empresas e pessoas buscando serviços:
- Empresas de todos os portes
- Profissionais em desenvolvimento
- Pessoas buscando mentoria

3. Parceiros estratégicos:
- Plataformas de pagamento
- Provedores de tecnologia
- Empresas de certificação

4. Equipe operacional:
- Time de desenvolvimento
- Suporte ao cliente
- Gestão de comunidade`,

    objective: `1. Principal:
- Criar um ecossistema completo para monetização de conhecimento e networking profissional

2. Específicos:
- Facilitar conexões profissionais qualificadas
- Garantir segurança nas transações
- Promover desenvolvimento profissional
- Criar ambiente de networking produtivo
- Estabelecer marketplace confiável`,

    value: `1. Diferenciais Tecnológicos:
- Sistema de conexões automáticas baseado em perfil
- Integração única de marketplace + networking + salas temáticas
- Ambiente seguro para negociações profissionais
- Plataforma all-in-one para profissionais

2. Benefícios para Usuários:
- Economia de tempo na busca por conexões
- Garantia nas transações profissionais
- Ambiente integrado de desenvolvimento
- Monetização simplificada de conhecimento

3. Inovações:
- Matching inteligente por IA
- Sistema de reputação verificada
- Certificações integradas
- Analytics avançado de performance`,

    metrics: `1. Crescimento:
- Taxa de aquisição de usuários
- Retenção mensal
- Expansão de categorias
- Crescimento de GMV

2. Engajamento:
- Tempo médio na plataforma
- Interações por usuário
- Taxa de conversão
- NPS

3. Monetização:
- Receita por usuário
- Ticket médio
- Taxa de transações
- Lifetime value

4. Qualidade:
- Satisfação do usuário
- Taxa de sucesso
- Avaliações positivas
- Resolução de disputas`,

    architecture: `1. Frontend:
- Web App React
- Mobile PWA
- Design System próprio

2. Backend:
- API RESTful
- WebSocket
- Microserviços

3. Infraestrutura:
- Cloud Native
- Containers
- CDN Global

4. Integrações:
- Gateway de Pagamentos
- Analytics
- Storage
- Videoconferência`
  };

  return (
    <QuestionSection
      title="1. Visão Geral do Projeto"
      description="Definição clara dos objetivos e escopo"
      icon={Layers}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-4">
        <QuestionInput 
          question={questions.vision[0]} 
          defaultValue={answers.problem}
        />
        <QuestionInput 
          question={questions.vision[1]} 
          defaultValue={answers.stakeholders}
        />
        <QuestionInput 
          question={questions.vision[2]} 
          defaultValue={answers.objective}
        />
        <QuestionInput 
          question={questions.vision[3]} 
          defaultValue={answers.value}
        />
        <QuestionInput 
          question={questions.vision[4]} 
          defaultValue={answers.metrics}
        />
        <QuestionInput 
          question={questions.vision[5]} 
          defaultValue={answers.architecture}
        />
      </div>
    </QuestionSection>
  );
};
