export interface ICardProps {
    title: string,
    text: string,
    image: string,
    href: string,
    description?: string
}

const cardsResources: ICardProps[] = [{
    href: 'https://active-vision.ru/icon/box-shadow/',
    image: 'css-shadow.png',
    title: 'CSS BOX-SHADOW генератор',
    text: 'Свойство принимает составное значение из пяти разных частей: горизонтальное смещение, вертикальное смещение, размытие, растяжение, цвет тени. К тому же можно указать будет ли тень внешней или внутренней.'
}, {
    href: 'https://ellipse-arts.ru/tools/special-chars',
    image: 'html-symbols.png',
    title: 'Спец. символы',
    text: 'Таблица специальных символов и их html кодов'
}]

export default cardsResources;
