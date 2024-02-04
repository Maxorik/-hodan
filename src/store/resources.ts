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


const cardsResources: any[] = [
    {
    title: 'Цвет пикселя',
    href: 'https://sanstv.ru/color',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/9ad177ae91ee0aa5d5dc763fc739d117.png',
    text: 'Определить цвет пикселя онлайн'
},{
    title: 'Хостинг картинок',
    href: 'https://hostingkartinok.com/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/9a2199adab447a0e458ee2e3f8e034fe.png',
    text: 'Бесплатный хостинг без регистрации'
},{
    title: 'JSON viewer',
    href: 'https://codebeautify.org/jsonviewer',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/8ed860643c34e1b4de5f86974e35a4a1.png',
    text: 'Валидация и парсинг json'
},{
    title: 'js-beatify',
    href: 'https://beautifier.io/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/87a83757156274524f15c74bf52e4a6b.png',
    text: 'Распарсить javascript'
},{
    title: 'regex',
    href: 'https://regex101.com/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/11a3babd09feedec61d7d344724fc104.png',
    text: 'Проверить регулярное выражение'
},{
    title: 'Fontdrop!',
    href: 'https://fontdrop.info/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/042dda47ae00f8245982e654bc204722.png',
    text: 'Чтение файла шрифтов в браузере'
},{
    title: 'Material UI',
    href: 'https://mui.com/material-ui/all-components/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/75365b73b68409fa583a4e03f2d72fe8.png',
    text: 'Цель Material UI — предоставить разработчикам строительные блоки для создания отличных пользовательских интерфейсов, используя рекомендации Material Design в качестве справочника'
},{
    title: 'Firebase API',
    href: 'https://firebase.google.com/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/7c111b895c38689fdcea95dc841d3854.png',
    text: 'Firebase — это платформа для разработки приложений, которая помогает создавать и развивать приложения и игры, которые нравятся пользователям.'
},{
    title: 'Тест Safari браузера',
    href: 'https://www.browserstack.com/test-on-safari-browser',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/b4ae94a03283bfaa6108552fa7c58f43.png',
    text: 'Не беспокойтесь об эмуляторах Safari. Вместо этого тестируйте веб-сайты в последних и более старых браузерах Safari (4–15).'
},{
    title: 'React Flow',
    href: 'https://reactflow.dev/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/a4b8715ddd098f35367d3180a5ea089b.png',
    text: 'Настраиваемый компонент React для создания редакторов на основе узлов и интерактивных диаграмм.'
},{
    title: 'Смайлы для readme',
    href: 'https://gist.github.com/rxaviers/7360908',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/cea4c0208d592e2edec0d07d6ff015c6.png',
    text: 'Полный список разметки смайлов markdown GitHub'
},{
    title: 'Минимайзер js (npm)',
    href: 'https://www.npmjs.com/package/uglify-js',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/a07dd30c033625ee22fc2d3c6eb44b41.png',
    text: 'UglifyJS — это набор инструментов для парсера, минификатора, сжатия и улучшения JavaScript.'
},{
    href: 'https://active-vision.ru/icon/box-shadow/',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/05aa3239b5175aeeb043b6ee161a9d76.png',
    title: 'CSS BOX-SHADOW генератор',
    text: 'Генератор свойства box-shadow для css'
}, {
    href: 'https://ellipse-arts.ru/tools/special-chars',
    imageSrc: 'https://s1.hostingkartinok.com/uploads/images/2024/02/e3788f2cb0ecf8d91acd1cdebf3f7e2a.png',
    title: 'Спец. символы',
    text: 'Таблица специальных символов и их html кодов'
}]


