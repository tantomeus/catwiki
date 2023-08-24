export async function getCats() {
    const breedRes = await fetch(`https://api.thecatapi.com/v1/breeds`);
    const breedData = await breedRes.json();

    const images = await Promise.all(breedData.map((el) => fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${el.id}`).then(res => res.json())));
    const data = breedData.map((breed, i) => ({...breed, img: images.flat()[i]}));
    
    return data;
}

export async function getACat(id) {
    const catRes = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
    const imgRes = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}`);
    const catData = await catRes.json();
    const imgData = await imgRes.json();
    return {...catData, imgs: imgData};
}