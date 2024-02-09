/** Модель для ресурсов */
import axios from "axios";
import { makeObservable, observable, action, computed } from "mobx";
import appStore from './app'

export interface IResourceProps {
    title: string,
    text: string,
    href: string,
    tags: string,
    description?: string
}

const url = 'https://hodan-2ff80-default-rtdb.firebaseio.com/services.json';

class ResourcesStore {
    constructor() {
        makeObservable(this, {
            resourceList: observable,
            getResources: action,
        });
    }

    /** Данные */
    resourceList: IResourceProps[] = [];

    async getResources() {
        try {
            const response = await axios.get(url)
            this.resourceList =  response.data
        } catch (err) {
            console.error(err.toJSON())
        }
    }

    /** Добавить запись */
    addNote(title: string, href: string, text: string, tags: string) {
        console.log(arguments)
    }
}

export default new ResourcesStore()

