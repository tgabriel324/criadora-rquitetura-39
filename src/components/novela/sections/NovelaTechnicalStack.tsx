
import { Server } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaTechnicalStackProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaTechnicalStack = ({ isOpen, onToggle }: NovelaTechnicalStackProps) => {
  const stackContent = {
    frontend: `Frontend Stack:

1. Framework Base
- React.js
- TypeScript
- Vite
- PWA ready

2. UI/UX
- TailwindCSS
- Componentes customizados
- Design system próprio
- Animações suaves

3. State Management
- React Query
- Context API
- Local Storage
- IndexedDB para offline`,

    backend: `Backend Stack:

1. API Principal
- Node.js
- Express
- TypeScript
- RESTful design

2. Real-time
- WebSocket
- Socket.io
- Pub/Sub system
- Event-driven

3. Cache & Performance
- Redis
- CDN
- Load balancing
- Rate limiting`,

    database: `Database Stack:

1. Principal Database
- PostgreSQL
- Schemas otimizados
- Índices eficientes
- Backup automático

2. Cache & Search
- Redis
- Elasticsearch
- Full-text search
- Cache distribuído

3. Storage
- S3 compatible
- CDN integration
- Image optimization
- Backup strategy`,

    devops: `DevOps Stack:

1. Infrastructure
- Docker
- Kubernetes
- Cloud-native
- Auto-scaling

2. Monitoring
- New Relic
- Grafana
- Prometheus
- Log aggregation

3. CI/CD
- GitHub Actions
- Automated testing
- Deployment automation
- Environment isolation`
  };

  return (
    <QuestionSection
      title="Stack Técnico"
      description="Tecnologias e ferramentas utilizadas"
      icon={Server}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Frontend Stack</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={stackContent.frontend}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Backend Stack</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={stackContent.backend}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Database Stack</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={stackContent.database}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">DevOps Stack</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={8}
            defaultValue={stackContent.devops}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
