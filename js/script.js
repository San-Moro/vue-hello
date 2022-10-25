// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue;
// Invocare la funzione
createApp({
    data: function(){
        return {
            message : "Hello Vue!",
            image : "hello-vue.jpg",
        }
    }
}).mount("#app");