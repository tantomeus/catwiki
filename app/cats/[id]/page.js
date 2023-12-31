import { getACat } from "@/services/apiCats";

import CatInfo from "@/components/CatInfo";

export default async function Page({ params }) {
    const { id } = params;
    const cat = await getACat(id);

    return <CatInfo data={cat} />
}