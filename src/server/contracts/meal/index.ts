import User from '../../model/user';

export interface IMeal {
    user: User;

    getMeal(): void;
}

export interface IOneMeal {
    Name;
    Kcal;
    Proteins;
    Fats;
    CHO;
}
