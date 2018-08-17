import { Profile } from './profile.model';

export class Team {
    constructor(public name: string,
                public admin: Profile,
                public logo?,
                public players?: Profile[],
                public captain?: Profile,
                public viceCaptain?: Profile) {}
}