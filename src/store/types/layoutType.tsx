const Alignments = {
    center: 'items-center justify-center',
    left: 'flex justify-center items-start',
    right: 'flex justify-end items-end',
    start: 'flex justify-start items-start',
    end: 'flex justify-end items-end',
} as const;

const Paddings = {
    none: 'p-0',
    small: 'p-4',
    medium: 'p-8',
    large: 'p-16',
    xlarge: 'p-24',
    xxlarge: 'p-32',
} as const;

const gapSizes = {
    none: 'gap-0',
    small: 'gap-4',
    medium: 'gap-8',
    large: 'gap-16',
    xlarge: 'gap-24',
    xxlarge: 'gap-32',
} as const;
const Height = {
    none: '',
    small: 'h-24',
    screen: 'min-h-screen',
    full: 'h-full',
} as const;
const Width = {
    none: '',
    small: 'w-24',
    full: 'w-full',
} as const;
const Flow = {
    vertical: 'flex flex-col',
    horizontal: 'flex flex-row',
    grid: 'grid',

} as const;
const ColNumbers = {
    none: '',
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
    '4': 'grid-cols-4',
    '5': 'grid-cols-5',
    '6': 'grid-cols-6',
    '7': 'grid-cols-7',
    '8': 'grid-cols-8',
} as const;
const RowNumbers = {
    none: '',
    '1': 'grid-rows-1',
    '2': 'grid-rows-2',
    '3': 'grid-rows-3',
    '4': 'grid-rows-4',
    '5': 'grid-rows-5',
    '6': 'grid-rows-6',
    '7': 'grid-rows-7',
    '8': 'grid-rows-8',
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
    gapSize?: keyof typeof gapSizes;
    className?: string;
    colNumbers?: keyof typeof ColNumbers;
    rowNumbers?: keyof typeof RowNumbers;
    height?: keyof typeof Height;
    width?: keyof typeof Width;
    flow?: keyof typeof Flow;
    align?: keyof typeof Alignments;
    padding?: keyof typeof Paddings;
    margin?: keyof typeof Margins;
};

export type { AtomLayoutProps };
export { Alignments, Paddings, Margins, Height, Width, Flow, ColNumbers, RowNumbers, gapSizes };

