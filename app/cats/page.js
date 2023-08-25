import FullList from "@/components/FullList";
import { getCats } from "@/services/apiCats";

export default async function Cats() {
    const data = await getCats();
    
    return <FullList cats={data.slice(0, data.length - 1)}/>
}