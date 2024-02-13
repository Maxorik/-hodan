/** Модель для радио */
import axios from "axios";
import { makeObservable, observable, action, computed } from "mobx";
import appStore from 'store'

export interface IRadioProps {
    href: string
}

const url = 'https://hodan-2ff80-default-rtdb.firebaseio.com/radio.json';

class RadioStore {
    constructor() {
        makeObservable(this, {
            radioList: observable,
            getRadio: action,
        });
    }

    /** Данные */
    radioList: IRadioProps[] = [];

    async getRadio() {
        try {
            const response = await axios.get(url);
            this.radioList = Object.values(response.data);
        } catch (err) {
            console.error(err.toJSON());
        }
    }

    /** Добавить запись */
    addRadio(href: string) {
        href && axios.post(url, { href: href })
            .finally(function () { this.getRadio() })
    }
}

export default new RadioStore()

