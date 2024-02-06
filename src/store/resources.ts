/** Модель для ресурсов */
import axios from "axios";
import { makeAutoObservable } from "mobx";

export interface ICardProps {
    title: string,
    text: string,
    href: string,
    tags: string,
    description?: string
}

const url = 'https://hodan-2ff80-default-rtdb.firebaseio.com/services.json';

class ResourcesStore {
    constructor() {
        makeAutoObservable(this, {}, { deep:false })
    }

    resourceList: ICardProps[] = [];

    async getResources() {
        try {
            const response = await axios.get(url)
            this.resourceList =  response.data
        } catch (err) {
            console.error(err.toJSON())
        }
    }

}

export default new ResourcesStore()

