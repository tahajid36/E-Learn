"use client"
import { useSession } from 'next-auth/react';
import React from 'react';
import LoadingSpinner from '../Components/LoadingSpinner';

export const CurrentUser = () => {
    const {data: session, status} = useSession();
    if(status === 'loading'){
        return <LoadingSpinner></LoadingSpinner>
    }
    return session?.user || null
};

export default CurrentUser;  