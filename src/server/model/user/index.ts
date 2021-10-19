import { GenderENU, ActivityENU, UserINT } from "../../contracts/user";
import { calcDailyNutritional } from "../../utils/nutritional";

class User implements UserINT {
    id: number
    gender: GenderENU;
    age: number;
    height: number;
    weight: number;
    activity: ActivityENU;

    constructor(id: number, gender: GenderENU, age: number, height: number, weight: number, activity: ActivityENU) {
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
    }

    setActivity(activity: ActivityENU): void {
        this.activity = activity;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }

    getDailyNutritional(): NutritionalTYP {
        return calcDailyNutritional({
            gender: this.gender,
            age: this.age,
            height: this.height,
            weight: this.weight,
            activity: this.activity
        });
    }
}

export default User;
