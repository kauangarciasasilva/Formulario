export default class UserModel{
    name:string;
    email:string;
    message:string

    constructor(){

    }
    toString():string{
        return JSON.stringify(this);
    }
    toJson(userString:string):UserModel{
        return JSON.parse(userString)as UserModel;
    }
}