<template>
    <div class="container">
        <form class="form" @submit.prevent="dodajSladoled">
            <h1 class="title">DODAJ SLADOLED</h1>
            <div class="main-div">
                <div class="sub-div">
                    <label for="naziv">NAZIV: </label>
                    <input type="text" id="naziv" v-model="noviSladoled.naziv">
                </div>
            </div>
            <div class="main-div">
                <div class="sub-div">
                    <label for="opis">OPIS: </label>
                    <input type="text" id="opis" v-model="noviSladoled.opis">
                </div>
                 <div class="sub-button">
                    <button type="submit" class="responsive-button">DODAJ SLADOLED</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name:'DodajSladoled',
        data(){
            return{
                noviSladoled:{
                    naziv:'',
                    opis:''
                }
            }
        },
        methods:{
            async dodajSladoled(){
                try{
                    const response=await axios.post('http://localhost:3000/sladoledi',this.noviSladoled);
                    if(response.status===201){
                        this.noviSladoled={
                            naziv:'',
                            opis:''
                        };
                        alert('Sladoled dodan');
                    }else{
                        alert('Greška prilikom dodavanja');
                    }
                }catch(err){
                    console.log('Greška',err);
                    alert('Greška na serveru');
                }
            }
        }
    }
</script>
<style scoped>
body{
        font-family: Arial, sans-serif;
        margin: 0;
        background-color: whitesmoke;
    }
    .container{
        background-color: whitesmoke;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .form{
        background-color: blue;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        color: white;
    }
    .title{
        font-size: 28px;
        margin-bottom: 20px;
        color: white;
    }
    .sub-div{
        margin-bottom: 10px;
        padding-left: 15px;
    }
    .sub-button{
        margin-top: 25px;
        background-color: yellow;
    }
    input{
        background-color: white;
    }
    label{
        margin-right: 15px;
    }
</style>