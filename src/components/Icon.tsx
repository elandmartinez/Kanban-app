import React from "react";

interface IconInterface {
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  classname: string
}

const Icon: React.FC<IconInterface> = ({ SvgComponent, classname }) => (
  <SvgComponent className={classname}/>
);

export default Icon;
