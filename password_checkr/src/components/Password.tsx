import React, { useCallback, useEffect, useState } from "react"

const PasswordChecker = (password : string) : number => {
    let strength = 0;
    console.log(password);

    if(password.length < 3) {
        return 0;
    }

    if(password.match(/[a-z]+/)) {
        strength += 1;
    }
    if(password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if(password.match(/[0-9]+/)) {
        strength += 1;
    }
    if(password.match(/[$@#&!]+/)){
        strength += 1;
    }
    if(password.length > 12) {
        strength += 1;
    }

    return strength*2;

}

type PasswordChecker = {
    password : string;
    strength : number;
}

export const PasswordComponent = () => {
    const [password, setPassword] = useState<string>('');
    const [strength, setStrength] = useState<number>(0);

    const onchangePasswordHandler = useCallback( (e : React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }, []);
    
    
    useEffect( () => {
        setStrength(PasswordChecker(password));
    }, [password]);
    return (
        <>
            <div className="h-screen w-screen">
                <div className="flex flex-col justify-center items-center mt-10 p-6">
                    <div className="">
                        <label htmlFor="password" 
                            className=" text-2xl font-medium">
                                Password
                        </label>
                    </div>

                    <div className="mt-4 items-center">
                        <input type="text"
                        onChange={ (e) => onchangePasswordHandler(e)}
                            className="border-2 rounded-lg w-72 p-1 text-black px-2">
                        </input>
                    </div>

                    <div className="mt-2">
                        <ProgressBarComponent value={strength}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProgressBarComponent = ({ value }: { value: number }) => {
    const getColor = (value: number) => {
        if (value <= 4) return 'bg-red-500';
        if (value <= 8) return 'bg-orange-500';
        return 'bg-green-500';
    };

    return (
        <>
            <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className={`h-2.5 rounded-full ${getColor(value)}`}
                    style={{ width: `${value * 10}%` }}
                ></div>
            </div>
        </>
    );
};

