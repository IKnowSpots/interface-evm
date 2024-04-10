import { createContext, useState } from "react";

export const SectionContext = createContext<Object>('')

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeElement, setActiveElement] = useState('')
    return <SectionContext.Provider value={{ activeElement, setActiveElement }}>
        {children}
    </SectionContext.Provider>
}