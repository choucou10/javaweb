import { User } from '../../shared';
import { Entry } from '../entry';
export class Blog {
    constructor(
        public id?: number,
        public name?: string,
        public handle?: string,
        public user?: User,
        public entry?: Entry,
    ) { }
}
