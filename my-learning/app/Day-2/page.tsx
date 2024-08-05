"use client";
import React from 'react';
import { useCustomDialog } from './custom-dialog';
import { Button } from '@/components/ui/button';

const Day2 = () => {
    const [cofirm, ConfirmDialogComponent] = useCustomDialog({
        title: "Are you sure?",
        description: "please confrim to continue"
    });

    const handleOpenButton = async () => {
        const ok = await cofirm();

        if( !ok ) {
            console.log("Canceled by user")
            return;
        }

        console.log("Confirmed by user");
        // do whaetever operations you need to do
    }
  return (
    <div>
        <ConfirmDialogComponent />
        <Button
            onClick={handleOpenButton}
        >
            open
        </Button>
    </div>
  )
}

export default Day2