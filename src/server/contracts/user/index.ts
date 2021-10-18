interface UserINT {
    gender: boolean
    age: number
    height: number
    weight: number
    activity: ActivityENU

    getSGender(): boolean
    getAge(): number
    getHeight(): number
    getWeight(): number
    getActivity(): number
    setHeight(height: number): void
    setWeight(weight: number): void
    getDailyNutritional(): NutritionalTYP
}

enum ActivityENU {
    sedentary = 1.2,
    low = 1.375,
    moderate = 1.550,
    high = 1.725,
    veryHigh = 1.9
}