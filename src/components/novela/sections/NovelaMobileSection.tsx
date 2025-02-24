
import { Smartphone } from "lucide-react";
import { QuestionSection } from "../../modelo/QuestionSection";

interface NovelaMobileSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NovelaMobileSection = ({ isOpen, onToggle }: NovelaMobileSectionProps) => {
  const mobileContent = {
    pwa: `Progressive Web App:

1. Features
- Instalável
- Offline first
- Push notifications
- Background sync
- App-like experience

2. Performance
- Fast loading
- Caching strategies
- Lazy loading
- Image optimization
- Compression

3. Engagement
- Add to home screen
- Splash screen
- Icons
- Manifest
- Service workers`,

    apps: `Apps Nativos:

1. iOS App
- Swift/SwiftUI
- Design iOS
- App Store
- In-app purchases
- iOS widgets

2. Android App
- Kotlin
- Material Design
- Play Store
- Billing system
- Android widgets

3. Compartilhado
- Autenticação única
- Sincronização
- Offline mode
- Push notifications
- Deep linking`,

    features: `Features Mobile:

1. Leitura
- Modo retrato/paisagem
- Gestos de navegação
- Modo noturno
- Fonte ajustável
- Scroll infinito

2. Social
- Compartilhamento
- Quick actions
- Notificações
- Chat integrado
- Widgets

3. Premium
- Downloads offline
- Sync automático
- Features exclusivas
- Pagamento in-app
- Benefícios mobile`,

    metrics: `Métricas Mobile:

1. Performance
- Tempo de carregamento
- Uso de recursos
- Crash reports
- ANR (Android)
- Battery usage

2. Engagement
- Sessões diárias
- Tempo no app
- Features usadas
- Retenção
- Churn rate

3. Negócio
- Downloads
- Conversão premium
- Revenue mobile
- LTV por plataforma
- CAC mobile`
  };

  return (
    <QuestionSection
      title="Apps Mobile"
      description="Estratégia e implementação mobile"
      icon={Smartphone}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Progressive Web App</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={mobileContent.pwa}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Apps Nativos</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={mobileContent.apps}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Features Mobile</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={mobileContent.features}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">Métricas Mobile</h3>
          <textarea 
            className="w-full p-3 border rounded-md"
            rows={10}
            defaultValue={mobileContent.metrics}
          />
        </div>
      </div>
    </QuestionSection>
  );
};
