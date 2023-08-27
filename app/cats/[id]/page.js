import CatInfo from "@/components/CatInfo";
import { getACat } from "@/services/apiCats";

export default async function Page({ params }) {
    const { id } = params;
    const data = await getACat(id);

    return <CatInfo data={data} />
}