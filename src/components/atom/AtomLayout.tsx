
import { AtomLayoutProps, Alignments, Margins, Paddings, Width, Height, Flow, RowNumbers, ColNumbers, gapSizes } from "@/store/types/layoutType";

const AtomLayout = ({
    children,
    align = 'center',
    padding = 'medium',
    margin = 'none',
    gapSize = 'none',
    colNumbers = 'none',
    rowNumbers = 'none',
    flow = 'vertical',
    height = 'none',
    width = 'none',
    className,
}: AtomLayoutProps) => {
    return (
        <div
            className={`
            ${Alignments[align]} 
            ${Paddings[padding]} 
            ${Margins[margin]} 
            ${gapSizes[gapSize]} 
            ${ColNumbers[colNumbers]} 
            ${RowNumbers[rowNumbers]} 
            ${Flow[flow]} 
            ${Height[height]} 
            ${Width[width]} 
            ${className}`}
        >
            {children}
        </div>
    );
};

export { AtomLayout };
