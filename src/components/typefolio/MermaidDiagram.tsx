"use client";

import React, { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const renderDiagram = async () => {
      try {
        const mermaidModule = await import('mermaid');
        const mermaid = mermaidModule.default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: 'neutral',
          fontFamily: 'inherit',
          securityLevel: 'loose',
        });

        if (containerRef.current && isMounted) {
          const id = `mermaid-svg-${Math.round(Math.random() * 10000000)}`;
          const { svg: svgCode } = await mermaid.render(id, chart);
          setSvg(svgCode);
        }
      } catch (error) {
        console.error('Mermaid rendering failed', error);
      }
    };

    renderDiagram();
    
    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div 
      ref={containerRef}
      className="mermaid-container w-full overflow-x-auto flex justify-center py-6 bg-primary/5 rounded-xl border border-primary/10"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

