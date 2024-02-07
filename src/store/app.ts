import { makeObservable, observable, action } from "mobx";

/** Основной стор приложения */
class AppMainStore {
    constructor() {
        makeObservable(this, {
            activePage: observable,
            setActivePage: action,
            searchedValue: observable,
        });
    }

    /** Активная страница */
    activePage: string = 'main';
    setActivePage(page: string) {
        this.activePage = page;
    }

    /** Поиск */
    searchedValue: string = '';

}

export default new AppMainStore()