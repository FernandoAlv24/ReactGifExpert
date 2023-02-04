export const getGifs = async (category) => {

    const url = `Https://api.giphy.com/v1/gifs/search?apikey=4QqZhKA6hPE0KwveO4ljXJT092OlUHih&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}