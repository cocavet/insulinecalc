import { ActivityENU, GenderENU, IUser, NumMealsENU } from '../../contracts/user';
import { calcDailyNutritional } from '../../utils/nutritional';

class User implements IUser {
    public id: number;
    public gender: GenderENU;
    public age: number;
    public height: number;
    public weight: number;
    public activity: ActivityENU;
    public numMeals: NumMealsENU;

    constructor(id: number, gender: GenderENU, age: number, height: number,
                weight: number, activity: ActivityENU, numMeals: NumMealsENU ) {
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
        this.numMeals = numMeals;
    }

    public setActivity(activity: ActivityENU): void {
        this.activity = activity;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public getDailyNutritional(): INutritional {
        return calcDailyNutritional({
            gender: this.gender,
            age: this.age,
            height: this.height,
            weight: this.weight,
            activity: this.activity,
        });
    }
}

export default User;
