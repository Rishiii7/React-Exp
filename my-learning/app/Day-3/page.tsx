"use client";

import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion/accordion';

type AccordionProps = {
    id: string;
    title: string;
    description: string;
}

const list: AccordionProps[] = [
    {
        id: "1",
        title: "Title 1",
        description: "Description 1"

    },
    {
        id: "2",
        title: "Title 2",
        description: "Description 2"

    },
    {
        id: "3",
        title: "Title 3",
        description: "Descirption 3"

    },
];

const AccordionFunction = () => {
    const [accordion, setAccordion] = useState<string | null>(null);

    const handleAccordion = (index: string) => {
        console.log("inside onclick")
        let activeId: string| null = index
        if ( index === accordion ) activeId = null
        setAccordion(activeId)
    }

    console.log(accordion);

    return (
        <>
        <div className='h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full mt-10'></div>
        <div>
            {
                list.map( (item, index) => (
                    <>
                        <div key={index} 
                            onClick={() => handleAccordion(item.id)}
                            className='cursor-pointer p-3'
                            >
                            { item.title }
                            <div className={`${accordion ? 'flex' : 'hidden'} `} >
                                { accordion === item.id ? item.description : "" }
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
        </>
    )
}

const Day3 = () => {

    return (
        // <AccordionFunction />
        <>
            <Accordion>
                {
                    list.map( (item) => (
                        <AccordionItem id={item.id}>
                            <AccordionTrigger> { item.title }</AccordionTrigger>
                            <AccordionContent>{item.description}</AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    )
}

export default Day3