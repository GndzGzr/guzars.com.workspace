const Alignments = {
    center: 'min-h-screen flex flex-col items-center justify-center',
} as const;

const Paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-8',
    large: 'p-16',
    xlarge: 'p-24',
    xxlarge: 'p-32',
} as const;

const Margins = {
    none: '',
    small: 'm-4',
    medium: 'm-8',
    large: 'm-16',
    xlarge: 'm-24',
    xxlarge: 'm-32',
} as const;

type AtomLayoutProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    className?: string;
    align?: keyof typeof Alignments;
    padding?: keyof typeof Paddings;
    margin?: keyof typeof Margins;
};

export type { AtomLayoutProps };
export { Alignments, Paddings, Margins };

