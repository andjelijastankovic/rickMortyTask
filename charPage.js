$(document).ready(function() {
    const id = localStorage.getItem('charId');
    info(id);
})

const split = (arr) => {
    let p = '';
    for(let i = 0; i < arr.length; i++) {
        p += arr[i] + "<br>";
    }

    return p;
}

const info = (someId) => {
    let api = `https://rickandmortyapi.com/api/character/${someId}`;
    fetch(api).then(response => {
        return response.json();
    }).then(response => {
        let episodes = response.episode.slice(0, 8);
        let listEpisodes = split(episodes);
        let char = $('.singleChar');
        char.append(`<div class='imgName'>
            <img src= '${response.image}' class='charImg'>
            <h2 class='name'>${response.name} </h2>
        </div>`);
        char.append(
        `<div class='charInfo'>
                <div>
                    <div>
                        <div>
                            <h3>Character info</h3>
                        </div>

                        <div class='sol'>
                            <div>
                                <h5>Species</h5>
                                <p>${response.species}</p>
                            </div>

                            <div>
                                <h5>Origin</h5>
                                <p>${response.origin.name}</p>
                            </div>

                            <div>
                                <h5>Location</h5>
                                <p>${response.location.name}</p>
                            </div>
                        </div>
                        

                        <div class='sg'>
                            <div>
                                <h5>Status</h5>
                                <p>${response.status}</p>
                            </div>
                            <div>
                                <h5>Gender</h5>
                                <p>${response.gender}</p>
                            </div>
                        </div> 
                    </div>
                    
                    <div class='episodes'>
                        <h3>Episodes:</h3>
                        ${listEpisodes}
                    </div>
                </div>

                
        </div>`);

        $(document.body).append(char);
    });
}