import { useCallback, useState } from "react";

export const StarComponent = () => {

    const [star, setStar] = useState<number>(-1);
    const [onMouse, setOnMouse] = useState<number>(-1);


    const onclickHandler = useCallback( (index : number) => {
        console.log(`clicked the ${index} star`);
        setStar(index);
    }, [star]);

    const onMouseOverHandler = useCallback( (index : number) => {
        console.log(`Mouse oved the ${index} star`);
        setOnMouse(index);
    }, [onMouse])

    const getColor = useCallback( (index : number) => {
        if(index <= star) {
            return true;
        }
        return false;
    }, [star]);

    const getColorOnMouse = useCallback( (index : number) => {
        if(index <= onMouse) {
            return true;
        }
        return false;
    }, [onMouse]);

    return (
        <>
            <div className="h-screen w-screen">
                <div className="h-full w-full bg-lime-300  flex justify-center">
                    <div className="flex flex-col  justify-center p-10">
                        <div className="flex relative  p-4 ">
                            <div className="flex aboslute top-0 inset-x-0"
                                onMouseOut={ () => onMouseOverHandler(-1)}>
                                {
                                    Array(5).fill(0).map((_, index) =>  {
                                        return (
                                            <div key={index} 
                                                onClick={ () => onclickHandler(index)}
                                                onMouseOver={ () => onMouseOverHandler(index)}
                                                >
                                                <svg className={`w-8 h-8 ${getColor(index) || getColorOnMouse(index) ? `text-yellow-400` : `text-white`}  ms-1`}aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                        <div className="flex justify-center relative">
                            <div className=" text-black text-2xl absolute ">
                                    {
                                        star !== -1 ? star + 1 : ''
                                    }
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </>
    );
};

