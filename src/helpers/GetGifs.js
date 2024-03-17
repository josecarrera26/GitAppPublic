export const getGifs = async(category) =>{
    try {
        const url = `https://api.giphy.com/v1/stickers/search?api_key=bOydTehMBTrvIP9PBfhEL0A2dUSFeT7b&q=${category}&limit=10`
        const resp = await fetch (url);
        const { data } = await resp.json(); 
        console.log(data);   

        const gifs = data.map(img =>({
            id: img.id,
            img: img.title,
            url: img.images.downsized_medium.url
        }));
        return gifs
    } catch (error) {
        console.log(error);
        return error;
    }

}