import { useState } from "react";

export function useReset() {
    const [ values, setValues ] = useState(() => {});

    const handleResetCall = (reset) => setValues(() => reset);
    return {values, handleResetCall};
}
