const { createApp } = Vue 
const url = 'https://mindhub-ab35.onrender.com/api/amazing-events'

const app = createApp( {
    data(){
        return {
            events: [],
            categories: [],
            checks: [],
            text:[]
        }
    },
    created(){
        this.fetchApi()
        this.getCategories()
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
        },
        async getCategories(){
            try{
                let response = await fetch(url)
                response = await response.json()
                response = response.events.map(each => each.category)
                response = [...new Set(response)]
                console.log(response)
                this.categories = response
        }catch(error){
            console.log(error)
        }

    },
        filterData(){
            
        }
    }

})
app.mount('#app')