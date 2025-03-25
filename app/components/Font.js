import { Inter, Roboto, Poppins, Lora } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
export const poppins = Poppins({
  subsets: ["latin"],
  style:['normal','italic'],
  weight: ["300", "600", "900"],
  variable: "--font-poppins",
});
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});
