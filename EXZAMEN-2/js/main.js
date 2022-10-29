const conteinerEl = document.querySelector("#conteiner")
console.log(conteinerEl);


fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element);
            let imgEl = document.createElement('img')
            imgEl.src = element.image
            conteinerEl.appendChild(imgEl)

            let p1El = document.createElement("p");
            let h2El = document.createElement("h2");
            let divEl = document.createElement("div");

            p1El.innerHTML = "Price: " + element.price
            h2El.innerHTML = `<b>description</b> ${element.description.split("").splice(1, 70).join("") + "..."}`

            conteinerEl.appendChild(divEl)
            divEl.innerHTML = `<button class="btn_item" id="conteiner_btn" data-target-id="${element.id}">Delete</button>`
            divEl.appendChild(imgEl);
            divEl.appendChild(p1El);
            divEl.appendChild(h2El);
            console.log(element);
            



            divEl.classList.add("collection_item");
            h2El.classList.add("text_one");

            conteinerEl.addEventListener('click', (e) => {
                if(e.target.classList.contains("btn_item"));
            })

            // const btn = document.querySelector("#conteiner_btn")
            // btn.addEventListener("click" , (e) => {
            //     if((e.target.hasAttribute("data-target-id"))){
            //     fetch(`https://fakestoreapi.com/products${element.id}`,{
            //     method: "DELETE"

            //     })
            //     .then(appen => console.log(appen.json()))
            // //     e.console.log(btn.target);
            // //     .then(appen => console.log(appen.json()))
            // }


            // })



        });
    })






// console.log(conteinerEl);