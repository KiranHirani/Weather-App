class Storage{

    constructor(){
        this.city;
        this.defaultCity='Boston';
    }

    getLocationData(){
        let cityLS=localStorage.getItem('city');
        if(cityLS === null){
            this.city=this.defaultCity;
        }else{
            this.city=localStorage.getItem('city')  
        }

        return {
            city:this.city
        }
    }

    setLocationData(city){
        localStorage.setItem('city',city);
    }
}