
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "SaúdeJá",
      description: "Plataforma Integrada de Bem-estar",
      route: "/"
    },
    {
      title: "Projeto Bruno",
      description: "Dashboard e Funcionalidades",
      route: "/bruno"
    }
  ];

  const models = [
    {
      title: "Modelo 1",
      description: "Documentação Completa de Projeto",
      route: "/"
    }
  ];

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Projetos
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {projects.map((project) => (
                <DropdownMenuItem
                  key={project.route}
                  onClick={() => navigate(project.route)}
                  className="flex flex-col items-start"
                >
                  <span className="font-medium">{project.title}</span>
                  <span className="text-sm text-gray-500">{project.description}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Modelos
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {models.map((model) => (
                <DropdownMenuItem
                  key={model.route}
                  onClick={() => navigate(model.route)}
                  className="flex flex-col items-start"
                >
                  <span className="font-medium">{model.title}</span>
                  <span className="text-sm text-gray-500">{model.description}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

