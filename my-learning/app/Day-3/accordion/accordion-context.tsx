import React, { useContext } from "react";

export const AccordionContext = React.createContext<{
    activeContent: string | null ,
    handleTrigger: (id: string | null ) => void
} | null>(null);
export const AccordionItemContext = React.createContext<{ id: string | null } | null>(null);

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);
    if( context === undefined) {
        throw new Error("useAccordion must be used within a <Accordion />");
    }

    return context;
}

export const useAccordionItemContext = () => {
    const context = useContext(AccordionItemContext);
    if( context === undefined) {
        throw new Error("useAccordionItemContext must be used within <AccordionItem />")
    }
    return context;
}

export const AccordionProvider = ({
    children,
    value
} : {
    children: React.ReactNode,
    value: {
        activeContent: string | null ;
        handleTrigger: (id: string | null ) => void;
    } | null
}) => {
    const context = useContext(AccordionContext);

    return (
        <>
            <AccordionContext.Provider value={context}>
                { children }
            </AccordionContext.Provider>
        </>
    )
}

export const AccordionItemProvider = ({ 
    value,
    children 
}: {
    value: {
        id: string | null;
    }
    children: React.ReactNode
}) => {

    return (
        <>
            <AccordionItemContext.Provider value={value}>
                    { children }
            </AccordionItemContext.Provider>
        </>
    )
}