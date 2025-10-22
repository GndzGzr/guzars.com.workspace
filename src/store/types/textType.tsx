import { JSX } from "react/jsx-dev-runtime";
type TextFamily = "sans" | "serif" | "mono" | "serif-thin" | "serif-light"  | "serif-medium" | "serif-semibold" | "serif-bold" | "serif-extrabold" | "sans-thin" | "sans-light" | "sans-medium" | "sans-semibold" | "sans-bold" | "sans-extrabold" | "mono-thin" | "mono-light" | "mono-medium" | "mono-semibold" | "mono-bold" | "mono-extrabold";
type TextVariant = "pageHeading" | "pageSubHeading" | "paragraph" | "sectionHeading" | "timelineYear" | "timeLineInfo";

const variantToTag: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  pageHeading: "h1",
  pageSubHeading: "h2",
  paragraph: "p",
  sectionHeading: "h2",
  timelineYear: "p",
  timeLineInfo: "p",
};


interface AtomTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  family?: TextFamily;
  className?: string;
}

export type { TextFamily, TextVariant, AtomTextProps };
export { variantToTag };

