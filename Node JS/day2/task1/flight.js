class Flight
{
    tickets=[]
    /*constructor(sNumber,fNumber,departure,arrival,date)
    {
        this.sNumber=sNumber;
        this.fNumber=fNumber;
        this.departure=departure;
        this.arrival=arrival;
        this.date=date;
        this.id=this.makeid(6)
    }*/
    
    addFlight(sNumber,fNumber,departure,arrival,date,id)
    {
        
        this.tickets.push({sNumber,fNumber,departure,arrival,date,id})
    }
    displayAll()
    {
        console.log(this.tickets)
    }
    displayOne(id)
    {
       for(let i = 0 ; i<this.tickets.length ; i++)
       {
        if(this.tickets[i].id === id)
        {
            console.log(this.tickets[i])
        }
       }
    }

   updateOne(id , obj)
    {
       for(let i = 0 ; i<this.tickets.length ; i++)
       {
        if(this.tickets[i].id === id)
        {
            this.tickets.splice(i,1,obj)
        }
       }
    }

}

module.exports = {
    Flight
}