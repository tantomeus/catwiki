export async function getCats() {
    const breedRes = await fetch(`https://api.thecatapi.com/v1/breeds`);
    const breedData = await breedRes.json();
    const breedDataFiltered = breedData.filter(({id}) => id !== "mala");

    const images = await Promise.all(breedDataFiltered.map((el) => fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${el.id}`).then(res => res.json())));
    const data = breedDataFiltered.map((breed, i) => ({...breed, img: images.flat()[i]}));
    
    return data;
}

export async function getACat(id) {
    const res = await Promise.all([fetch(`https://api.thecatapi.com/v1/breeds/${id}`), fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}`)]);
    const catData = await res[0].json();
    const imgData = await res[1].json();
    return {...catData, imgs: imgData};
}

export async function getRandomCat() {
    const breedRes = await fetch(`https://api.thecatapi.com/v1/breeds`);
    const breedData = await breedRes.json();
    const index = Math.floor(Math.random() * breedData.length);
    return "/cats/" + breedData[index].id;
}