
import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "inherit",
  htmlLabels: true,
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: "basis",
  },
});

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (elementRef.current) {
        elementRef.current.innerHTML = '';
        const uniqueId = `mermaid-${Math.random().toString(36).substring(7)}`;
        
        try {
          const { svg } = await mermaid.render(uniqueId, chart);
          if (elementRef.current) {
            elementRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid rendering error:", error);
        }
      }
    };

    renderDiagram();
  }, [chart]);

  return <div className="mermaid-wrapper overflow-x-auto" ref={elementRef} />;
};

export default Mermaid;
