import "./myLabel.css";
import { AllCaps } from "../stories/components/MyLabel.stories";

export interface MyLabelProps {
  /**
   * Este es el mensaje mostrado en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitaliza toda la etiqueta
   */
  allCaps?: boolean;
  /**
   * Colores basicos de la etiqueta
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

function MyLabel({
  allCaps,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
}: MyLabelProps) {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}

export { MyLabel };
