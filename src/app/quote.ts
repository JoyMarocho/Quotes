export class Quote {
    showAuthorAndSubmitter: boolean;
    constructor(public id: number, public quote: string, public author: string, public submitter: string, public dateEntered: Date){
    this.showAuthorAndSubmitter=false;
    }
}
