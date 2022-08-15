import React from 'react'



export const getImages = async(description) => {


    const urlFetch = `https://api.giphy.com/v1/gifs/search?api_key=F74Dk4QXp1m1pImd7bhfOMnfKnCLIfWo&limit=1&q=${description}`;
    const resp = await fetch(urlFetch);
    const {data} = await resp.json();

    const dataUsed = data.map( (data) => {
        return {
            url: data.images.fixed_height.url
        }
    })

    const [url] = dataUsed;
    return url;
}
