
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { LucideIcon } from "lucide-react";

interface QuestionSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const QuestionSection = ({
  title,
  description,
  icon: Icon,
  isOpen,
  onToggle,
  children
}: QuestionSectionProps) => {
  return (
    <Collapsible open={isOpen}>
      <Card className="border-primary/10 hover:border-primary/20 transition-colors">
        <CardHeader 
          className="cursor-pointer hover:bg-primary/5 transition-colors rounded-t-lg" 
          onClick={onToggle}
        >
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            <CardTitle className="text-primary">{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CollapsibleContent>
          <CardContent>
            {children}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
