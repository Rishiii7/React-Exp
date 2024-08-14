import React, { useState } from 'react'
import { 
    AccordionContext, 
    AccordionItemContext,  
    useAccordionContext, 
    useAccordionItemContext 
} from './accordion-context';

type AccordionProps = {
    children : React.ReactNode
}
export const Accordion = ({
    children
}: AccordionProps) => {
    const [activeContent, setActiveContent] = useState<string | null >(null);

    const handleTrigger = (id: string | null ) => {
        let activeId: string | null  = id;
        if( activeId === activeContent ) activeId = null
        setActiveContent(activeId);
    }

    const value = {
        activeContent,
        handleTrigger
    }


    return (
        <AccordionContext.Provider value={value}>
            <div>{ children }</div>
        </AccordionContext.Provider>
    )
}

/**
 * Accordion Item functionality
 */
type AccordionItemProps = {
    children: React.ReactNode
    id: string | null
}

export const AccordionItem = ({
    children,
    id,
    ...props
}: AccordionItemProps) => {
    const value = {
        id
    }
    return (
        <>
        <AccordionItemContext.Provider value={value}>
            { children }
        </AccordionItemContext.Provider>
        </>
    )
}

type AccordionTriggerProps = {
    children: React.ReactNode
}
export const AccordionTrigger= ({
    children
} : AccordionTriggerProps) => {
    const context = useAccordionContext();
    const item = useAccordionItemContext();

    // context can be undefined
    if( !context || !item) return null

    return (
        <>
            <div>
                <button
                    onClick={() => context?.handleTrigger(item?.id)}
                    >
                    { children }
                </button>
            </div>
        </>
    );
}

type AccordionContentProps = {
    children: React.ReactNode
}
export const AccordionContent = ({
    children
} : AccordionContentProps) => {
    const context = useAccordionContext();
    const item = useAccordionItemContext();
    console.log( item?.id )
    return (
        <>
            {
                context?.activeContent === item?.id ? (
                    <div>
                        { children }
                    </div>
                ) : null
            }
        </>
    )
}