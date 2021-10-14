export class Form{
    name: string
    quote: string
    vote: number
    

    constructor(name: string,quote: string, vote?:number, ){
 this.name =name
 this.quote = quote
 
this.vote = vote || 0


    }

    voteUp(){
        this.vote += 1
    }

    voteDown(){
        this.vote -= 1
    }
}