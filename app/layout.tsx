"use client"
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./provider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <title>iKnowSpots</title>
            </head>
            <body >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
