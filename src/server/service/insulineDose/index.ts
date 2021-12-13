import User from '../../model/user';

export function calcInsulineDose(CHOMeal: number, user: User): number {

    if (!CHOMeal) { return null; }

    const TDI = totalDailyInsulineDose(user);
    console.log(CHOMeal, TDI);
    const CHORatio = CHOCoverageRatio(TDI);
    const CHODose = CHOMeal / CHORatio;
    const bloodGlucoseDose = bloodGlucoseCorrectionDose(user, TDI);

    return Math.round(CHODose + bloodGlucoseDose);
}

function totalDailyInsulineDose(user: User) {
    return 0.55 * user.weight;
}

function CHOCoverageRatio(TDI: number) {
    return 500 / TDI;
}

function bloodGlucoseCorrectionDose(user: User, TDI: number) {
    return (user.bloodGlucose - user.bloodGlucoseGoal) / (1800 / TDI);
}
