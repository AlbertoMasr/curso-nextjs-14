"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h1>Error</h1>
            <p>Something went wrong!</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}