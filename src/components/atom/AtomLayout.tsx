
import { AtomLayoutProps, Alignments, Margins, Paddings } from "@/store/types/layoutType";

const AtomLayout = ({
    children,
    align = 'center',
    padding = 'medium',
    margin = 'none',
    className,
}: AtomLayoutProps) => {
    return (
        <div
            className={`${Alignments[align]} ${Paddings[padding]} ${Margins[margin]} ${className}`}
        >
            {children}
        </div>
    );
};

export { AtomLayout };
