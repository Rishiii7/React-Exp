"use client";
import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'

const Day4 = () => {


    return (
        <>
        <LShapedGun 
            property={""}
        />
        <LShapedGun 
            property={"debounce"}
        />
        <LShapedGun 
            property={"throttle"}
        />
        
        </>
    )
}


type LShapedGunProps = {
    property : string
}

const LShapedGun = ({
    property
}: LShapedGunProps) => {
    const [bullet, setBullet] = useState(false);
    const debounce = useRef<NodeJS.Timeout | undefined>();
    const throttle = useRef<boolean>(false);

    const onClick = () => {
        switch (property) {
            case "debounce" :
                debouce();
                break;
            case "throttle" : 
                throttleF()
                break;
            default :
                handleGunClick();
        }
    }

    const handleGunClick = () => {
        setBullet(true);
        setTimeout( ()=> {
            setBullet(false)
        }, 1000)
    };

    const debouce = () => {
        clearInterval(debounce.current);
        debounce.current = setTimeout(handleGunClick, 1000);
    }
    
    const throttleF = () => {   
        if( !throttle.current ) {
            console.log("how many time it is called");
            handleGunClick();
            throttle.current = true;
            setTimeout( () => (throttle.current = false), 1000);
        }
    }

    return (
        <>
        <div className='flex gap-x-10'>

        <Button 
            className='flex flex-col'
            onClick={onClick}
            >
            ||----- 
        </Button>
        {
            bullet && (
                <div> -------- </div>
            )
        }
        </div>
        </>
    )
}

export default Day4