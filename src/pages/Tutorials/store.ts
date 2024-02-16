/** Модель для туториалов */
import axios from "axios";
import { makeObservable, observable, action, computed } from "mobx";
import appStore from '../../store'

export interface ITutorialsProps {
    title: string,
    text: string,
    href: string,
    tags: string,
    description?: string
}

const url = 'https://hodan-2ff80-default-rtdb.firebaseio.com/tutorials.json';

class TutorialsStore {
    constructor() {
        makeObservable(this, {
            isInit: observable,
            tutorialList: observable,
            tutorialVideoList: observable,
            tutorialTextList: observable,
            getTutorials: action,
        });
    }

    isInit: boolean = false;

    /** Данные */
    tutorialList: ITutorialsProps[] = [];
    tutorialVideoList: ITutorialsProps[] = [];
    tutorialTextList: ITutorialsProps[] = [];

    async getTutorials() {
        try {
            const response = await axios.get(url);
            this.tutorialList = Object.values(response.data);
            this.tutorialVideoList = [];
            this.tutorialTextList = [];
            this.tutorialList.forEach(tutorial => {
                tutorial.href.indexOf('youtube.com') !== -1 ?
                    this.tutorialVideoList.push(tutorial) : this.tutorialTextList.push(tutorial)
            });

            console.log(this.tutorialTextList, this.tutorialVideoList)
        } catch (err) {
            console.error(err.toJSON());
        }
    }

    /** Добавить запись */
    addNote(title: string, href: string, text: string, tags: string) {
        title && href && text && axios.post(url, { title: title, href: href, text: text, tags: tags })
            // .finally(function () { this.getResources() })
    }
}

export default new TutorialsStore()

