import { Plus } from "lucide-react";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  showBottomBorder?: boolean;
}

export function SectionWrapper({ children, className = "", id, showBottomBorder = false }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative bg-black group ${className}`}>
      {/* Horizontal Top Border spanning full width */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      
      {/* Container with vertical borders */}
      <div className="max-w-7xl mx-auto relative border-x border-white/5">
        {/* Plus Markers at the top intersections */}
        <Plus className="absolute -top-2 -left-2 w-4 h-4 text-white/20 z-30" />
        <Plus className="absolute -top-2 -right-2 w-4 h-4 text-white/20 z-30" />
        
        {showBottomBorder && (
          <>
            <div className="absolute bottom-0 left-[-100vw] w-[300vw] h-px bg-white/10" />
            <Plus className="absolute -bottom-2 -left-2 w-4 h-4 text-white/20 z-30" />
            <Plus className="absolute -bottom-2 -right-2 w-4 h-4 text-white/20 z-30" />
          </>
        )}
        
        {/* The actual content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
}
