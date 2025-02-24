
import { GitBranch } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaImplementationProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaImplementation = ({ isOpen, onToggle }: NovelaImplementationProps) => {
  const implementationContent = {
    phase1: `Fase 1 - Fundação:

1. Landing Page
- Layout responsivo
- Header/Footer
- Hero section
- Planos e features
- SEO otimizado

2. Autenticação
- Registro/Login
- Social auth
- Recuperação de senha
- Verificação de email
- Proteção de rotas

3. Base Técnica
- Setup do projeto
- Design system
- Componentes base
- CI/CD inicial
- Monitoramento`,

    phase2: `Fase 2 - Core do Leitor:

1. Dashboard
- Feed personalizado
- Recomendações
- Progresso
- Notificações
- Metas

2. Biblioteca
- Listagem de novels
- Filtros e busca
- Categorização
- Favoritos
- Histórico

3. Interface do Leitor
- Layout responsivo
- Customização
- Marcadores
- Notas
- Modo offline`,

    phase3: `Fase 3 - Premium:

1. Sistema de Assinaturas
- Planos e preços
- Gateway de pagamento
- Gestão de assinaturas
- Benefícios premium
- Analytics

2. Conteúdo Premium
- Capítulos antecipados
- Features exclusivas
- Badges douradas
- Customização VIP
- Suporte premium

3. Otimizações
- Cache avançado
- CDN global
- Performance
- Backups
- Monitoramento`,

    phase4: `Fase 4 - Social:

1. Perfis
- Customização
- Estatísticas
- Conquistas
- Biblioteca pública
- Rankings

2. Comunidade
- Grupos
- Reviews
- Fóruns
- Amigos
- Feed social

3. Moderação
- Sistema de reports
- Filtros automáticos
- Ações moderativas
- Logs
- Anti-spam`
  };

  return (
    <QuestionSection
      title="Implementação"
      description="Fases de desenvolvimento e implantação"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Fase 1 - Fundação</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={implementationContent.phase1}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Fase 2 - Core do Leitor</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={implementationContent.phase2}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Fase 3 - Premium</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={implementationContent.phase3}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Fase 4 - Social</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={implementationContent.phase4}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
