
import { Users } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { Card } from "@/components/ui/card";

interface UserProfilesSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const UserProfilesSection = ({ isOpen, onToggle }: UserProfilesSectionProps) => {
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
          {/* Perfil A */}
          <Card className="p-4">
            <h4 className="font-medium mb-2">Perfil A</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Características principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                placeholder="Descreva as características do Perfil A..."
              />
              <p className="text-sm text-gray-600">Necessidades principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                placeholder="Liste as principais necessidades..."
              />
            </div>
          </Card>

          {/* Perfil B */}
          <Card className="p-4">
            <h4 className="font-medium mb-2">Perfil B</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Características principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                placeholder="Descreva as características do Perfil B..."
              />
              <p className="text-sm text-gray-600">Necessidades principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                placeholder="Liste as principais necessidades..."
              />
            </div>
          </Card>

          {/* Admin */}
          <Card className="p-4">
            <h4 className="font-medium mb-2">Administrador</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Características principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                placeholder="Descreva as características do Admin..."
              />
              <p className="text-sm text-gray-600">Necessidades principais:</p>
              <textarea 
                className="w-full p-2 border rounded-md text-sm" 
                rows={3}
                placeholder="Liste as principais necessidades..."
              />
            </div>
          </Card>
        </div>
      </div>
    </QuestionSection>
  );
};
