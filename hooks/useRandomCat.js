import { getRandomCat } from "@/services/apiCats";
import { useEffect, useState } from "react";

export function useRandomCat() {
    const [randomCat, setRandomCat] = useState("");

    useEffect(() => {
        async function func() {
            const data = await getRandomCat();
            setRandomCat(data);
        }
        func();
    }, []);

    return {randomCat};
}