import { calcDailyNutritional } from "../../utils/nutritional";

class User implements UserINT {
    gender: boolean;
    age: number;
    height: number;
    weight: number;
    activity: ActivityENU;

    constructor(gender: boolean, age: number, height: number, weight: number, activity: ActivityENU) {
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
    }
    getSGender(): boolean {
        throw new Error("Method not implemented.");
    }

    setHeight(height: number): void {
        this.height = height;
    }

    setWeight(weight: number): void {
        this.height = weight;
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

    getGender(): boolean {
        return this.gender;
    }

    getAge(): number {
        return this.age;
    }

    getHeight(): number {
        return this.height;
    }

    getWeight(): number {
        return this.weight;
    }

    getActivity(): number {
        throw new Error("Method not implemented.");
    }
}

export default User;
