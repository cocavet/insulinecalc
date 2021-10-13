class User implements UserINT {
    sex: boolean;
    age: number;
    height: number;
    weight: number;
    activity: ActivityENU;

    constructor(sex: boolean, age: number, height: number, weight: number, activity: ActivityENU) {
        this.sex = sex;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    setWeight(weight: number): void {
        this.height = weight;
    }

    getDailyNutritional(): number {
        return calcDailyNutritional(this.sex, this.age, this.height, this.weight, this.activity);
    }

    getSex(): boolean {
        return this.sex;
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
