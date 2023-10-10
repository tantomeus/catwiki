import { getCats } from "@/services/apiCats";

import FullList from "@/components/FullList";

export default async function Cats() {
    const cats = await getCats();
    
    return <FullList cats={cats}/>
}