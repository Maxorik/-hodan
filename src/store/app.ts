import { makeAutoObservable } from "mobx";

/** Основной стор приложения */
class AppMainStore {
    constructor() {
        makeAutoObservable(this, {}, { deep:false })
    }

    /** Активная страница */
    activePage: string = 'main';
    setActivePage(page: string) {
        this.activePage = page;
    }


}

export default new AppMainStore()