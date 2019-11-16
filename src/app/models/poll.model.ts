import { User } from './user.model';

export class Poll {

    constructor(public pollID: number, public naam: string, public gestemd: User[]){
    }     
}
