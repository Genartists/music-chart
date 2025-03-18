const client_id = '2fe0769f35b340d08cd82a7932442338';
const client_secret = '65274f57b6ff4dc88d72b5b549f1255d';

// function to get access key from spotify
export async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
        },
    });
    return await response.json();
}


const ACCESS_TOKEN = 'access_Token';

export const fetcher = async (url) => {
    try {
        // test if there's no token yet, if it is call getToken function to get it then store
        // to sessionStorage
        if (!sessionStorage.getItem(ACCESS_TOKEN)) {
            const {access_token} = await getToken();
            sessionStorage.setItem(ACCESS_TOKEN, access_token);
            console.log(access_token);
        }
        // get the token
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN)},
        })

        const jsonData = await response.json();
        return jsonData.artists;
    }
    catch (e) {
        console.error(e);
        throw new Error(e)
    }
}