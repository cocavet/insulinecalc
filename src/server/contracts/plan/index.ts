import User from '../../model/user';
import { IOneMeal } from '../meal';
import { INutritional } from '../nutritional';

export interface IPlan {
    user: User;
    planDays: number;

    getPlan(): Promise<IOneMeal[]>;
}
