// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const {createApp} = Vue;
// Invocare la funzione
createApp({
    data: function(){
        return {
            message : "Hello!"
        }
    }
}).mount("#app");