import React, { useState } from 'react';
import { makeObservable, observable, action } from "mobx";
import axios from "axios";

export interface ICardProps {
    title: string,
    text: string,
    href: string,
    tags: string,
    // description?: string
}

/** Хук для инпутов */
export const useFormField = (initialValue: string = '') => {
    const [value, setValue] = React.useState(initialValue);
    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
    const reset = React.useCallback(() => setValue(''), []);
    return { value, onChange, reset };
};

/** Основной стор приложения */
class AppMainStore {
    constructor() {
        makeObservable(this, {
            activePage: observable,
            setActivePage: action,
            searchedValue: observable,
            data: observable,
        });
    }

    /** апи */
    url = {
        resoures: 'https://hodan-2ff80-default-rtdb.firebaseio.com/services.json',
        tutorials: 'https://hodan-2ff80-default-rtdb.firebaseio.com/tutorials.json',
        radio: 'https://hodan-2ff80-default-rtdb.firebaseio.com/radio.json'
    }

    /** данные */
    data = {
        resoures: [] as ICardProps[],
        tutorials: [] as ICardProps[],
        radio: [] as ICardProps[],
    }

    /** получить данные */
    async getData(type: string) {
        try {
            const response = await axios.get(this.url[type]);
            this.data[type] = Object.values(response.data).reverse();
        } catch (err) {
            console.error(err.toJSON());
        }
    }

    /** Добавить запись */
    addRecord(type: string, data: any) {
        const payload = data.reduce((acc, item) => {
            acc[item.name] = item.formField.value;
            return acc;
        }, {});

        payload && axios.post(this.url[type], { ...payload })
            .finally(() =>
                this.getData(type)
            )
    }

    /** Активная страница */
    activePage: string = 'main';
    setActivePage(page: string) {
        this.activePage = page;
    }

    /** Поиск */
    searchedValue: string = '';
    discardSearchValue() {
        this.searchedValue = '';
    }

}

export default new AppMainStore()