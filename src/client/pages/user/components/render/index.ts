import { APP_SELECTOR } from '../../../../utils/common';

export function render() {
    APP_SELECTOR.innerHTML = `
        <div class="user">
            <form>
                <ul>
                    <li>
                        <label>Gender</label>
                        <input type="radio">
                    </li>
                    <li>
                        <label>Age</label>
                        <input type="number">
                    </li>
                    <li>
                        <label>Height</label>
                        <input type="number">
                    </li>
                    <li>
                        <label>Weight</label>
                        <input type="number">
                    </li>
                    <li>
                        <label>Activity</label>
                        <select>
                            <options></options>
                        </select>
                    </li>
                    <li>
                        <label>numMeals</label>
                        <select>
                            <options></options>
                        </select>
                    </li>
                </ul>
                <button>Generate user</button>
            </form>
        </div>
    `;
}
