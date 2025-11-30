import "./globals.css";

import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="border-b bg-white">
          <nav className=" text-black font-bold text-lg max-w-xl mx-auto p-4 flex gap-6 ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
