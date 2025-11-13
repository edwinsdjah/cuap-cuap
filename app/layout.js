import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Cuap Cuap — Edwin's Personal Blog",
  description:
    "Cuap Cuap is a personal blog featuring stories, reviews, and thoughts about films, tech, and culture.",
  keywords: [
    "blog",
    "personal blog",
    "film reviews",
    "tech",
    "culture",
    "cuap cuap",
  ],
  openGraph: {
    title: "Cuap Cuap — Personal Blog",
    description:
      "Stories, opinions, and reviews written with a touch of curiosity and humor.",
    url: "https://cuapcuap.vercel.app", // ganti sesuai domain kamu
    siteName: "Cuap Cuap",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cuap Cuap Blog Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuap Cuap — Personal Blog",
    description: "Personal blog featuring stories, reviews, and opinions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
