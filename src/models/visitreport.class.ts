export class Visitreport {
    client: string;
    date: number;
    type: string;
    userFirstName: string;
    userSecondName: string;
    userFunction: string;
    turnover: number;
    refund: number;
    refundType: string;
    potential: number;
    share: number;
    competitor: string;
    utilsation: string;
    customerPortal: string;
    newsletter: string;

    constructor(obj?: any){
        this.client = obj? obj.client : '';
        this.date = obj? obj.date : '';
        this.type = obj? obj.type : '';
        this.userFirstName = obj? obj.userFirstName : '';
        this.userSecondName = obj? obj.userSecondName : '';
        this.userFunction = obj? obj.userFunction : '';
        this.turnover = obj? obj.turnover : '';
        this.refund = obj? obj.refund : '';
        this.refundType = obj? obj.refundType : '';
        this.potential = obj? obj.potential : '';
        this.share = obj? obj.share : '';
        this.competitor = obj? obj.competitor : '';
        this.utilsation = obj? obj.utilsation : '';
        this.customerPortal = obj? obj.customerPortal : '';
        this.newsletter = obj? obj.newsletter : '';
        

    }







}