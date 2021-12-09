import { INutritional } from '../../contracts/nutritional';
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
    public sport: number;
    public stress: number;
    public bloodGlucose: number;

    constructor(id: number, gender: GenderENU, age: number, height: number,
        weight: number, activity: ActivityENU, numMeals: NumMealsENU, sport: number,
        stress: number, bloodGlucose: number) {

        this.id = id;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
        this.numMeals = numMeals;
        this.sport = sport;
        this.stress = stress;
        this.bloodGlucose = bloodGlucose;
    }

    public setbloodGlucose(bloodGlucose: number): void {
        throw new Error('Method not implemented.');
    }

    public setSport(sport: number): void {
        this.sport = sport;
    }

    public setStress(stress: number): void {
        this.stress = stress;
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
