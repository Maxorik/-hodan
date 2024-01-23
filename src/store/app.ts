import { makeAutoObservable } from "mobx";

class AppMainStore {
    constructor() {
        makeAutoObservable(this, {}, { deep:false })
    }

    config = {   }


}

export default new AppMainStore()