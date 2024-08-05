"use state";

import { Button } from '@/components/ui/button';
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle 
} from '@/components/ui/dialog';
import React, { useState } from 'react';

type CustomDialogProps = {
    title: string;
    description? : string | undefined;
}

export const useCustomDialog = ({
    title,
    description
}: CustomDialogProps): [() => Promise<unknown>, ()=> JSX.Element] => {
    const [promise, setPromise] = useState<{resolve: (value: boolean) => void} | null>(null);

    const confirm = () => new Promise( (resolve, reject) => {
        setPromise({resolve});
    });

    const handleClose = () => {
        setPromise(null);
    }

    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    }

    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    }



    const ConfirmDialogComponent = () => {
        return (
            <>
                <Dialog
                    open={promise !== null }
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                { title }
                            </DialogTitle>
                            <DialogDescription>
                                { description}
                            </DialogDescription>
                        </DialogHeader>
                        <Button
                            onClick={handleConfirm}
                        >
                            confirm
                        </Button>
                        <Button
                            onClick={handleCancel}
                        >
                            cancel
                        </Button>
                    </DialogContent>
                </Dialog>
            </>
        )
    };

    return [confirm, ConfirmDialogComponent];
}
