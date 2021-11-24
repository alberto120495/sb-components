/// <reference types="react" />
import "./myLabel.css";
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
declare function MyLabel({ allCaps, color, label, size, fontColor, }: MyLabelProps): JSX.Element;
export { MyLabel };
