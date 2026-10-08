import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const vazirmatn = Vazirmatn({
  // "latin" is needed so English text uses the same font as Persian text
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: {
    default: "ElectroCar | دنیای خودروهای برقی",
    template: "%s | ElectroCar",
  },

  description:
    "ElectroCar؛ مجله تخصصی خودروهای برقی، اخبار، مقالات، فناوری، شارژ و معرفی خودروهای الکتریکی.",

  keywords: [
    "خودرو برقی",
    "ماشین برقی",
    "خودروهای الکتریکی",
    "شارژ خودرو برقی",
    "باتری خودرو برقی",
    "ElectroCar",
  ],

  authors: [
    {
      name: "ElectroCar",
    },
  ],

  openGraph: {
    title: "ElectroCar | دنیای خودروهای برقی",
    description:
      "اخبار، مقالات، فناوری و معرفی خودروهای برقی.",
    type: "website",
    locale: "fa_IR",
  },
};

// Runs before the first paint so the page direction (rtl/ltr) is already
// correct for returning visitors and the layout doesn't jump.
const setDirectionScript = `
try {
  var l = localStorage.getItem("app_lang");
  if (l === "fa" || l === "en") {
    document.documentElement.lang = l;
    document.documentElement.dir = l === "fa" ? "rtl" : "ltr";
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.variable}>
        {/* next/script (not a raw <script>) so React 19 doesn't warn */}
        <Script
          id="set-direction"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: setDirectionScript }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
