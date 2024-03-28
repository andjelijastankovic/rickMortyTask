$(document).ready(function () {
    let page = 1;
    const api = 'https://rickandmortyapi.com/api/character';
    characters(api);

    $('#search').keyup(searchCharacter);

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            page++;
            let url = api + '?page=' + page;
            characters(url);
        }
    });
});


const searchCharacter = () => {
    let searchValue = encodeURIComponent($('#search').val());
    let api = `https://rickandmortyapi.com/api/character/?name=${searchValue}`;
    fetch(api).then(response => {
        return response.json();
    }).then(response => {
        const charactersDiv = $('.characters');
        charactersDiv.empty();
        response.results.forEach(element => {
            let char = `<div class='character'>

                <div>
                    <img src ='${element.image}' onclick='getId(${element.id})'>
                </div>

                <div class='infos'>
                    <div>
                        <h2>${element.name}</h2>
                    </div>

                    <div class='info'>
                        <div>
                            <h5>Species</h5>
                            <p>${element.species}</p>
                        </div>

                        <div>
                            <h5>Origin</h5>
                            <p>${element.origin.name}</p>
                        </div>

                        <div>
                            <h5>Location</h5>
                            <p>${element.location.name}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            charactersDiv.append(char);
        })
    })

}

const characters = (link) => {
    fetch(link).then(response => {
        return response.json();
    }).then(response => {
        const charactersDiv = $('.characters');
        response.results.forEach(element => {
            var char = `<div class='character'>
                <div>
                    <img src ='${element.image}' onclick='getId(${element.id})'>
                </div>

                <div class='infos'>
                    <div>
                        <h4>${element.name}</h4>
                    </div>

                    <div class='info'>
                        <div>
                            <h5>Species</h5>
                            <p>${element.species}</p>
                        </div>

                        <div>
                            <h5>Origin</h5>
                            <p>${element.origin.name}</p>
                        </div>

                        <div>
                            <h5>Location</h5>
                            <p>${element.location.name}</p>
                        </div>
                    </div>
                </div>
                
                
            </div>`;
            charactersDiv.append(char);
        });
    }).catch(error => {
        console.log(error.message);
    })
}

const getId = (id) => {
    localStorage.setItem('charId', id);
    location.assign('./charPage.html');
}