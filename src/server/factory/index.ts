import User from "../model/user";

export function getUser(params) {
    const { gender, age, height, weight, activity } = params;

    return new User(gender, age, height, weight, activity);
}