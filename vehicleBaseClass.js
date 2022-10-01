class vehicle {
    constructor(make, model, color,serial,year){
        this.make= make;
        this.model = model;
        this.color= color;
        this.serial= serial;
        this.year= year;
    }
    drive(){
        console.log('drive');
    }
    park(){
        console.log('park');
    }
    stop(){
        console.log('stop');
    }
   
}