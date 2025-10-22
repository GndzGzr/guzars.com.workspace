type IconSize = "s" | "m" | "l" | "xl" | "d";

const sizeToPixels: Record<IconSize, number> = {
  d: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 48,
};

const colorToHex: Record<string, string> = {
  default: "#000000",
  white: "#FFFFFF",
  black: "#000000",
  blue: "#0000FF",
  gray: "#808080",
  green: "#008000",
  red: "#FF0000",
  yellow: "#FFFF00",
  teal: "#008080",
  lightgray: "#D3D3D3",
};

interface AtomIconProps {
  name: string;
  size: IconSize;
  color: keyof typeof colorToHex;
  className?: string;
}

export type { IconSize, AtomIconProps };
export { sizeToPixels };