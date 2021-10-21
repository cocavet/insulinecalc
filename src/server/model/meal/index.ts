import axios from 'axios';
import _ from 'lodash';
import { EDAMAME_BASE_URL } from '../../config';
import { IMeal, IOneMeal } from '../../contracts/meal';
import User from '../user';

class Meal implements IMeal {
    public user: User;

    constructor(user) {
        this.user = user;
    }

    public async getMeal(): Promise<IOneMeal> {
        const meal = await axios.get(EDAMAME_BASE_URL('chicken', this.user.getDailyNutritional().Kcal), {});

        console.log(meal.data['hits'][_.random(meal.data['hits'].length)]);

        return {
            Name: 0,
            Kcal: 0,
            Proteins: 0,
            Fats: 0,
            CHO: 0,
        };
    }
}

export default Meal;
