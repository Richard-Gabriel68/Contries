function bandeira (pais)
{
    return `<img src="paises/${pais}.png"/>`
}

let app = new Vue(
    {
        el: '#app',
        data:
        {
            brazil: bandeira('brazil'),
            argentina: bandeira('argentina'),
            china: bandeira('china')
            
        },
        methods:
        {
            paises: function()
            {
                return  [
                    
                    {bandeira:this.brazil, nome: '<strong>Brasil</strong>', continente:'America do sul'},
                    {bandeira:this.argentina, nome: '<strong>Argentina</strong>', continente: 'America do sul'},
                    {bandeira:this.china, nome:'<strong>China</strong>', continente:'Asía'}
                ]
            }
        }
    }
)