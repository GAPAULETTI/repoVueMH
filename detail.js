const { createApp } = Vue 
const url = 'https://mindhub-ab35.onrender.com/api/amazing-events/'

const app = createApp( {
    data(){
        return {
            event: {}
        }
    },
    created(){
        this.captureId()
        /* fetch(url)
        .then( res => res.json() )
        .then(data => {
            this.events = data.events
            console.log(this.events)
        }).catch(err => console.log(err)) */
    },
    methods: {
        async captureId(){
            const queryString = location.search;

            const params = new URLSearchParams(queryString)

            const id = params.get("id")
        try{
           let response = await fetch(url)
           response = await response.json()  
           console.log(response)        
           this.event = response.events.find(each => each.id === id)
            
            console.log(this.event)
        }catch(error){
            console.log(error)
        }
        }

    },


})
app.mount('#cardDetail')