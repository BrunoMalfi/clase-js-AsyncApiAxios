console.log('----------Asincronía, API y Axios---------')
const API_URL="https://jsonplaceholder.typicode.com/users"
let users=[]; 
const verUsuarioBtn = document.getElementById('verUsuarioBtn')
const usuariosDiv = document.getElementById('usuariosDiv')
const perritoRndBtn = document.getElementById('perritoRndBtn')
const perritosDiv = document.getElementById('perritosDiv')
const perritosDivImg = document.getElementById('perritosDivImg')
axios.get(API_URL)
.then((res) => { 
    console.log('Ej 1.1 array de usuarios : ',res.data)
    console.log('Ej 1.2 array de nombres de usuarios : ',res.data.map((usuario)=>usuario.name))
    users=res.data;
    //console.log('Ej 1.3/en el then(res) array de usuarios en variable users : ',users)    
})      
.catch((err) => console.error(err));

const showUsers=()=>{
    console.log('Ej 1.4 array de usuarios en variable users desde boton: ',users)
    usuariosDiv.innerHTML=""
    users.map((user)=>{
        const parrafo = document.createElement("p");
        const node = document.createTextNode(user.name);
        parrafo.appendChild(node);
        usuariosDiv.appendChild(parrafo)
    })
    
    
    

}

console.log('Ej 1.3 array de usuarios en variable users : ',users)

verUsuarioBtn.addEventListener('click',showUsers)

//Extra : 
const API_URL2="https://dog.ceo/api/breed"
axios.get(API_URL2+"s/list/all")
.then((res) =>{ console.log('Extra .1 : ', Object.keys(res.data.message))
})      
.catch((err) => console.error(err));

axios.get(API_URL2+"s/image/random")
.then((res) =>{ console.log('Extra .2 : ', res.data.message)
})      
.catch((err) => console.error(err));

axios.get(API_URL2+"/shiba/images")
.then((res) =>{ console.log('Extra .3 : ', res.data.message)
})      
.catch((err) => console.error(err));

const showFotoPerrito = (event)=>{
    console.log('Event', event.target.childNodes[0].data)
    event.target.setAttribute("class","col col-2 btn btn-sm btn-warning m-1")

    const perrito=event.target.childNodes[0].data
    axios.get(API_URL2+"/"+perrito+"/images")
         .then((res) =>{
            perritosDivImg.innerHTML=""
            console.log('Perrito imagenes  : ', res.data.message)
            res.data.message.map((img)=>{
                 const imgTag = document.createElement("img");
                 imgTag.setAttribute("src",img)
                 imgTag.setAttribute("width","300")
                 imgTag.setAttribute("height","350")
                 perritosDivImg.appendChild(imgTag)
             })
        })      
        .catch((err) => console.error(err));
}


const showPerrito = ()=>{
    perritosDiv.innerHTML=""
    perritosDivImg.innerHTML=""
    axios.get(API_URL2+"s/list/all")
    .then((res) =>{ 
        // console.log('Extra .showPerrito : ', Object.keys(res.data.message))
        // let RandomPerritoId = Math.floor(Math.random() * Object.keys(res.data.message).length)
        // let RandomPerrito =Object.keys(res.data.message)[RandomPerritoId]
        // const btn1 = document.createElement("button");
        // const node = document.createTextNode(RandomPerrito);
        // btn1.setAttribute("type","button")
        // btn1.appendChild(node);
        // perritosDiv.appendChild(btn1)
        // btn1.addEventListener('click',showFotoPerrito)
        // RandomPerritoId = Math.floor(Math.random() * Object.keys(res.data.message).length)
        // RandomPerrito =Object.keys(res.data.message)[RandomPerritoId]
        // const btn2 = document.createElement("button");
        // const node2 = document.createTextNode(RandomPerrito);
        // btn2.setAttribute("type","button")
        // btn2.appendChild(node2);
        // perritosDiv.appendChild(btn2)
        // btn2.addEventListener('click',showFotoPerrito)

        Object.keys(res.data.message).map((perrito)=>{
            const btn = document.createElement("button");
            const node0 = document.createTextNode(perrito);
            btn.setAttribute("type","button")
            //class="col col-3 btn btn-primary
            btn.setAttribute("class","col col-2 btn btn-sm btn-primary m-1")
            btn.appendChild(node0);
            perritosDiv.appendChild(btn)
            btn.addEventListener('click',showFotoPerrito)
        })


    })
}
perritoRndBtn.addEventListener('click',showPerrito)