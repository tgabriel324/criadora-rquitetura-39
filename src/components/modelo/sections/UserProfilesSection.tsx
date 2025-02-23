
import { Users } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { Card } from "@/components/ui/card";

interface UserProfilesSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const UserProfilesSection = ({ isOpen, onToggle }: UserProfilesSectionProps) => {
  const profiles = {
    professional: {
      characteristics: "Profissionais independentes buscando monetizar conhecimentos e habilidades",
      needs: "Criar ofertas no marketplace, Participar de salas, Oferecer serviços, Negociar com clientes",
    },
    client: {
      characteristics: "Pessoas e empresas buscando serviços profissionais",
      needs: "Contratar serviços, Avaliar profissionais, Participar de salas, Buscar desenvolvimento profissional",
    },
    mentor: {
      characteristics: "Especialistas e mentores com experiência comprovada",
      needs: "Oferecer mentorias, Criar conteúdo, Acessar analytics, Criar salas temáticas",
    }
  };

  return (
    <QuestionSection
      title="5. Perfis de Usuário"
      description="Detalhamento dos diferentes tipos de usuário"
      icon={Users}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-4">
            <h4 className="font-medium mb-2">Profissional</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Características principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                defaultValue={profiles.professional.characteristics}
              />
              <p className="text-sm text-gray-600">Necessidades principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                defaultValue={profiles.professional.needs}
              />
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-medium mb-2">Cliente</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Características principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                defaultValue={profiles.client.characteristics}
              />
              <p className="text-sm text-gray-600">Necessidades principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                defaultValue={profiles.client.needs}
              />
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-medium mb-2">Mentor</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Características principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                defaultValue={profiles.mentor.characteristics}
              />
              <p className="text-sm text-gray-600">Necessidades principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                defaultValue={profiles.mentor.needs}
              />
            </div>
          </Card>
        </div>
      </div>
    </QuestionSection>
  );
};
