const BASE_URL = "https://api.thecatapi.com/v1/";

export async function getCats() {
    try {
        const breedRes = await fetch(`${BASE_URL}breeds`);

        if (!breedRes.ok) throw new Error("something went wrong");

        const breedData = await breedRes.json();
        const breedDataFiltered = breedData.filter(({id}) => id !== "mala");
        const images = await Promise.all(breedDataFiltered.map((el) => {
            return fetch(`${BASE_URL}images/search?breed_ids=${el.id}`).then(res => res.json())
        }));
        const data = breedDataFiltered.map((breed, i) => ({...breed, img: images.flat()[i]}));
        
        return data;
    } catch(err) {
        console.error(err);
    }
}

export async function getACat(id) {
    try {
        const res = await Promise.all([fetch(`${BASE_URL}breeds/${id}`), fetch(`${BASE_URL}images/search?limit=8&breed_ids=${id}`)]);

        if (!res[0].ok || !res[1].ok) throw new Error("something went wrong");

        const catData = await res[0].json();
        const imgData = await res[1].json();

        return {...catData, imgs: imgData};
    } catch(err) {
        console.error(err);
    }
}

export async function getRandomCat() {
    try {
        const breedRes = await fetch(`${BASE_URL}breeds`);

        if (!breedRes.ok) throw new Error("something went wrong");

        const breedData = await breedRes.json();
        const index = Math.floor(Math.random() * breedData.length);

        return "/cats/" + breedData[index].id;
    } catch(err) {
        console.error(err);
    }
}