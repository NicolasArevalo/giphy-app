export const getTrends = async() =>{
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=7uUdBEHgqLrRL7N5THi2GmOazGhXEtJP&limit=15`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    
    const trending = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })

    return trending;
}