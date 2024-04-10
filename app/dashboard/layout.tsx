"use client"
import "../globals.css";
import { CounterProvider } from "./ContextProvider";

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
                <CounterProvider>
                    {children}
                </CounterProvider>
            </body>
        </html>
    );
}
