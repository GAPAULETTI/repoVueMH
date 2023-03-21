const { createApp } = Vue 
const url = 'https://mindhub-ab35.onrender.com/api/amazing-events'

const app = createApp( {
    data(){
        return {
            events: []
        }
    },
    created(){
        this.fetchApi()
        /* fetch(url)
        .then( res => res.json() )
        .then(data => {
            this.events = data.events
            console.log(this.events)
        }).catch(err => console.log(err)) */
    },
    methods: {
        async fetchApi(){
        try{
            let response = await fetch(url)
            response = await response.json()
            this.events = response.events
            console.log(this.events)
        }catch(error){
            console.log(error)
        }
        }

    },


})
app.mount('#app')