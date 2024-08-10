"use client";
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef, useState } from 'react';

type TimerProps = {
    time: number
}

const useTimer = ({
    time
} : TimerProps) => {
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(time);

    const timerId = useRef<NodeJS.Timeout>();
    
    const start = () => {
        timerId.current = setInterval( () => {
            /**
             * start the timer
             * set the isrunning to true
             */
            if(seconds === 0 ) {
                clearInterval(timerId.current);
            }
            setSeconds( (prev) => prev - 1);
            setIsRunning( true );
        }, 1000);
    }
    const stop = () => {
        clearInterval(timerId.current);
        setIsRunning(false);
        setSeconds(time)
    }

    useEffect( () => {
        if(seconds === 0) {
            stop();
        }
    }, [seconds]);

    return {
        isRunning,
        start,
        stop,
        seconds,
    }
}


const page = () => {

    const {isRunning, start, stop, seconds} = useTimer({
        time: 10
    });

  return (
    <>
    <div className='w-full flex flex-col justify-center items-center mt-20 gap-5'>
        <div>
            { isRunning ? seconds : "no running time"}
        </div>
        <div className='space-x-10'>
            <Button
                onClick={start}
                disabled={isRunning}
            >
                Start Timer
            </Button>
            <Button
                onClick={stop}
                disabled={!isRunning}
            >
                Stop Timer
            </Button>
        </div>
    </div>
    </>
  )
};

export default page