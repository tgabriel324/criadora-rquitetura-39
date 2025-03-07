
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";

interface QuestionSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
}

export const QuestionSection = ({
  title,
  description,
  icon: Icon,
  isOpen,
  onToggle,
  children,
  className
}: QuestionSectionProps) => {
  return (
    <Collapsible open={isOpen} className={`mb-6 ${className || ''}`}>
      <Card className="border-primary/10 hover:border-primary/20 transition-colors shadow-sm">
        <CardHeader 
          className="cursor-pointer hover:bg-primary/5 transition-colors rounded-t-lg flex flex-row items-center justify-between" 
          onClick={onToggle}
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-primary">{title}</CardTitle>
            </div>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="text-primary">
            {isOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="pt-2">
            {children}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
