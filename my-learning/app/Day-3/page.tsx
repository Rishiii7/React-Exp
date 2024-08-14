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
    const [accordion, setAccordion] = useState<boolean[]>(Array(list.length).fill(false));

    const handleAccordion = (index: number) => {
        console.log("inside onclick")
        setAccordion(accordion.map( (item, ind) => {
             return ind === index ? !item : false
        }))
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
                            onClick={() => handleAccordion(index)}
                            className='cursor-pointer p-3'
                            >
                            { item.title }
                            <div className={`${accordion[index] ? 'flex' : 'hidden'} `} >
                                { item.description }
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