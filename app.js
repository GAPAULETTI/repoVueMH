const { createApp } = Vue 
const url = 'https://mindhub-ab35.onrender.com/api/amazing-events'

const app = createApp( {
    data(){
        return {
            events: [],
            categories: [],
            checks: [],
            text:"",
            filtro: []
        }
    },
    created(){
        this.fetchApi()
        this.getCategories()
        this.filterData()
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
            this.filtro = response.events
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
            /* let response = await fetch(url)
            response = await response.json() */
            this.filtro = this.events.filter(each =>{
                return(each.name.toLowerCase().includes(this.text))&&(this.checks.length === 0 || this.checks.includes(each.category))
            })
            console.log(this.filtro)
        }
    }

})
app.mount('#app')