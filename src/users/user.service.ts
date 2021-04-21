import { UserResponseModel } from "src/shared/models/user.response.model";
import { User } from "./user";

export class UserService {
    private readonly users:User[];

    constructor(){
        this.users = [{
            email : "naveen@techseeker.com",
            firstName : "naveen",
            lastName: "bommidi",
            id:1,
            password:"12345",
            phone:"1234567890"
        }];
    }

    async find(email:string):Promise<User>{
        return await this.users.find(_ => _.email == email);
    }
}
