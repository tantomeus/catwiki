import { getCats } from "@/services/apiCats";

import Hero from "@/components/Hero";
import SectionMore from "@/components/MoreBreeds";
import Reasons from "@/components/Reasons";

export default async function Home() {
  const data = await getCats();

  return (
    <>
    <Hero data={data}/>
    <main>
      <SectionMore data={data}/>
      <Reasons/>
    </main>
    </>
  )
}
