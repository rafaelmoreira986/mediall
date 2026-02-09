import type { Metadata, Viewport } from "next";
import ClientLayout from "./ClientLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Medisch - Medical HTML5 Template",
  description: "Medisch Responsive Medical Template",
  icons: { icon: "/assets/images/mediall/logoMediall.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="ltr" lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link href="/assets/css/vendor.min.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}