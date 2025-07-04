import React from "react";

interface SvgRendererProps {
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const Icon: React.FC<SvgRendererProps> = ({ SvgComponent, className }) => (
  <SvgComponent className={className} />
);

export default Icon