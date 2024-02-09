import React, { useState } from 'react';
import { makeObservable, observable, action } from "mobx";

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
        });
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