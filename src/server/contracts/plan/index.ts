import User from '../../model/user';
import { IOneMeal } from '../meal';

export interface IPlan {
    user: User;

    getPlan(): Promise<IOneMeal[]>;
}
