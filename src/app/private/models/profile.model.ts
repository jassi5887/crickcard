import { Tag } from './tag.model';
import { User } from './user.model';

export class Profile {

    constructor(
        public user: User,
        public firstName: string, 
        public lastName: string,
        public imageUrl?: string,   
        public tags?: Tag[],             
        public dob?: string) {}
}