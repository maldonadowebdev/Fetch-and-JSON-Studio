window.addEventListener("load", function() {

fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then( function(json) {
        let containerDiv = document.getElementById("container");
        let output = [];
        for (let i = 0; i < json.length; i++){
            let add = `
            <div class="astronaut">
                <span>
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>         
                        <li>ID: ${json[i].id}</li>
                        <li>Hours in Space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </span>
                <img class="avatar" src="${json[i].picture}">
            </div>
            `;
            output.push(add);

        };
        containerDiv.innerHTML = output.join("");
        });
    });
});