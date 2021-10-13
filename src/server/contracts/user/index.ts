interface UserINT {
    sex: boolean
    age: number
    height: number
    weight: number
    activity: ActivityENU

    getSex(): boolean
    getAge(): number
    getHeight(): number
    getWeight(): number
    getActivity(): number
    setHeight(height: number): void
    setWeight(weight: number): void
    getDailyNutritional(): number
}

enum ActivityENU {
    Red,
    Green,
    Blue,
}