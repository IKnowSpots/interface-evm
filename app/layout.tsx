import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
// import WalletContext from "@/components/WalletContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "iknowspots",
    description: "More than ticketing",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
