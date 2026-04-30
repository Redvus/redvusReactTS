import type { FilterType, GalleryItem } from '../types/gallery.types';

const baseUrl = 'https://c846fb63-voos.s3.twcstorage.ru/redvus/';
const version = 'v=202604161200';

export interface FilterOption {
    id: FilterType;
    label: string;
    icon: string;
    count: number;
}

export const galleryItems: GalleryItem[] = [
    // Сайты
    {
        id: 1,
        title: 'Джин Джу',
        description: 'Ресторан китайской кухни. Первая серьезная работа на поприще веб-разработки. Только осваивал HTML, CSS и Javascript, поэтому сайт получился довольно простым, но визуально стильным с некоторыми интерактивными элементами. Некоторые русские названия специально переводил на китайский.',
        type: 'web',
        imageUrl: `${baseUrl}web/djindju/rpw_djindju_00.webp?${version}`,
        images: [
            `${baseUrl}web/djindju/rpw_djindju_01.webp?${version}`,
            `${baseUrl}web/djindju/rpw_djindju_02.webp?${version}`,
            `${baseUrl}web/djindju/rpw_djindju_03.webp?${version}`,
            `${baseUrl}web/djindju/rpw_djindju_04.webp?${version}`,
            `${baseUrl}web/djindju/rpw_djindju_05.webp?${version}`,
            `${baseUrl}web/djindju/rpw_djindju_06.webp?${version}`,
        ],
        date: '2013',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://djindju.redvus.ru/'
    },
    {
        id: 2,
        title: 'Трэкшн Групп',
        description: 'Продажа, обслуживание и ремонт грузовых автомобилей. Первый сайт, сделанный сначала на Wordpress, потом переработанный под CMS Modx, так как нашел эту систему наиболее гибкой, функциональной и надежной для создания сайтов.',
        type: 'web',
        imageUrl: `${baseUrl}web/traction/rpw_traction_00.webp?${version}`,
        images: [
            `${baseUrl}web/traction/rpw_traction_01.webp?${version}`,
            `${baseUrl}web/traction/rpw_traction_02.webp?${version}`,
            `${baseUrl}web/traction/rpw_traction_03.webp?${version}`
        ],
        date: '2015',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://tractiongroup.ru/'
    },
    {
        id: 3,
        title: 'Тарзания',
        description: 'Строительство и обслуживание веревочных парков. Сайт на нескольких страницах с анимациями и интерактивными элементами.',
        type: 'web',
        imageUrl: `${baseUrl}web/tarzaniya/rpw_tarzaniya_00.webp?${version}`,
        images: [
            `${baseUrl}web/tarzaniya/rpw_tarzaniya_01.webp?${version}`,
            `${baseUrl}web/tarzaniya/rpw_tarzaniya_02.webp?${version}`,
            `${baseUrl}web/tarzaniya/rpw_tarzaniya_03.webp?${version}`,
            `${baseUrl}web/tarzaniya/rpw_tarzaniya_04.webp?${version}`,
        ],
        date: '2015',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://tarzaniya.com/'
    },
    {
        id: 4,
        title: 'Фабрика Форте',
        description: 'Фабрика по пошиву постельного белья и домашнего текстиля. Первый интернет-магазин, сделанный сначала на WordPress, затем переделанный на CMS Modx с обновленным дизайном.',
        type: 'web',
        imageUrl: `${baseUrl}web/fabrikaForte/rpw_fabrikaForte_00.webp?${version}`,
        images: [
            `${baseUrl}web/fabrikaForte/rpw_fabrikaForte_01.webp?${version}`,
            `${baseUrl}web/fabrikaForte/rpw_fabrikaForte_02.webp?${version}`,
            `${baseUrl}web/fabrikaForte/rpw_fabrikaForte_03.webp?${version}`,
            `${baseUrl}web/fabrikaForte/rpw_fabrikaForte_04.webp?${version}`,
        ],
        date: '2017',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://fabrika-forte.ru/'
    },
    // {
    //     id: 5,
    //     title: 'Время обедать',
    //     description: 'Сервис по доставке еды для офисов и мероприятий',
    //     type: 'web',
    //     imageUrl: `${baseUrl}web/timeToLunch/rp_timeToLunch_00.webp?${version}`,
    //     images: [
    //         `${baseUrl}web/timeToLunch/rp_timeToLunch_01.webp?${version}`,
    //         `${baseUrl}web/timeToLunch/rp_timeToLunch_02.webp?${version}`,
    //         `${baseUrl}web/timeToLunch/rp_timeToLunch_03.webp?${version}`,
    //     ],
    //     date: '2018',
    //     tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
    //     linked: 'https://ttl.redvus.ru/'
    // },
    {
        id: 6,
        title: 'Бизнес-Ремонт',
        description: 'Ремонт и обслуживание коммерческой недвижимости. Сайт на нескольких страницах с анимациями и интерактивными элементами.',
        type: 'web',
        imageUrl: `${baseUrl}web/businessRemont/rpw_businessRemont_00.webp?${version}`,
        images: [
            `${baseUrl}web/businessRemont/rpw_businessRemont_01.webp?${version}`,
            `${baseUrl}web/businessRemont/rpw_businessRemont_02.webp?${version}`,
            `${baseUrl}web/businessRemont/rpw_businessRemont_03.webp?${version}`,
        ],
        date: '2019',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://business-remont.ru/'
    },
    {
        id: 7,
        title: 'Листт 63',
        description:
            `Строительство зданий и производственных, выставочных или складских сооружений.<br /><br />
            Ремонт офисных, торговых помещений, объектов общественного питания, медицинских помещений`,
        type: 'web',
        imageUrl: `${baseUrl}web/listt63/rpw_listt63_00.webp?${version}`,
        images: [
            `${baseUrl}web/listt63/rpw_listt63_01.webp?${version}`,
            `${baseUrl}web/listt63/rpw_listt63_02.webp?${version}`,
            `${baseUrl}web/listt63/rpw_listt63_03.webp?${version}`,
        ],
        date: '2019',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://listt63.ru/'
    },
    {
        id: 8,
        title: 'СМИБС',
        description: `Муниципальное бюджетное учреждение культуры городского округа Самара «Самарская муниципальная информационно-библиотечная система». Многостраничный сайт с разнообразными шаблонами страниц, включая страницы с новостями, анонсами, формами заявки, мероприятиями и другие статьями с разной тематикой. Сайт был разработан с учетом удобства навигации и предоставления информации о библиотеках и их услугах.`,
        type: 'web',
        imageUrl: `${baseUrl}web/smibs/rpw_smibs_00.webp?${version}`,
        images: [
            `${baseUrl}web/smibs/rpw_smibs_01.webp?${version}`,
            `${baseUrl}web/smibs/rpw_smibs_02.webp?${version}`,
            `${baseUrl}web/smibs/rpw_smibs_03.webp?${version}`,
            `${baseUrl}web/smibs/rpw_smibs_04.webp?${version}`,
            `${baseUrl}web/smibs/rpw_smibs_05.webp?${version}`,
            `${baseUrl}web/smibs/rpw_smibs_06.webp?${version}`,
        ],
        date: '2021',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/'
    },
    {
        id: 9,
        title: 'Аквалайф',
        description: 'Ионизаторы и фильтры для воды. Сайт сделан в виде одной страницы с анимациями и интерактивными элементами, но имитирующим переход на другую страницу со скрытием содержимиго одного блока и отображением другого.',
        type: 'web',
        imageUrl: `${baseUrl}web/akvalife/rpw_akvalife_00.webp?${version}`,
        images: [
            `${baseUrl}web/akvalife/rpw_akvalife_01.webp?${version}`,
            `${baseUrl}web/akvalife/rpw_akvalife_02.webp?${version}`,
            `${baseUrl}web/akvalife/rpw_akvalife_03.webp?${version}`,
            `${baseUrl}web/akvalife/rpw_akvalife_04.webp?${version}`,
            `${baseUrl}web/akvalife/rpw_akvalife_05.webp?${version}`,
        ],
        date: '2022',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://akvalife.redvus.ru/'
    },
    {
        id: 10,
        title: 'Плейофф',
        description: 'Школа для подготовки юных хоккеистов. Сайт сделан в виде одной страницы с анимациями и интерактивными элементами.',
        type: 'web',
        imageUrl: `${baseUrl}web/playoff/rpw_playoff_00.webp?${version}`,
        images: [
            `${baseUrl}web/playoff/rpw_playoff_01.webp?${version}`,
            `${baseUrl}web/playoff/rpw_playoff_02.webp?${version}`,
            `${baseUrl}web/playoff/rpw_playoff_03.webp?${version}`,
            `${baseUrl}web/playoff/rpw_playoff_04.webp?${version}`,
        ],
        date: '2022',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://playoff.redvus.ru/'
    },
    // {
    //     id: 11,
    //     title: 'Голиаф',
    //     description: 'Компания по перевозке крупногабаритных грузов',
    //     type: 'web',
    //     imageUrl: `${baseUrl}web/goliaph/rp_goliaph_00.webp?${version}`,
    //     images: [
    //         `${baseUrl}web/goliaph/rp_goliaph_01.webp?${version}`,
    //         `${baseUrl}web/goliaph/rp_goliaph_02.webp?${version}`,
    //         `${baseUrl}web/goliaph/rp_goliaph_03.webp?${version}`,
    //     ],
    //     date: '2022',
    //     tags: ['HTML', 'CSS', 'Javascript'],
    //     linked: 'https://goliaph.redvus.ru/'
    // },
    {
        id: 12,
        title: 'Фотобокс',
        description: `Продажа и профессиональная проявка фотопленки.Печать фотографий и плакатов. Сайт сделан в виде одной страницы с плавной прокруткой.`,
        type: 'web',
        imageUrl: `${baseUrl}web/photoboxs/rpw_photoboxs_00.webp?${version}`,
        images: [
            `${baseUrl}web/photoboxs/rpw_photoboxs_01.webp?${version}`,
        ],
        date: '2023',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://photoboxs.ru/'
    },
    // {
    //     id: 13,
    //     title: 'Проект для ресторана',
    //     description: `Бизнес-ланч для ресторана с доставкой еды.<br><br>
    //     Заказ блюд из меню ресторана с доставкой в офис или на дом.`,
    //     type: 'web',
    //     imageUrl: `${baseUrl}web/sandwich/rpw_sandwich_00.webp?${version}`,
    //     images: [
    //         `${baseUrl}web/sandwich/rpw_sandwich_01.webp?${version}`,
    //         `${baseUrl}web/sandwich/rpw_sandwich_02.webp?${version}`,
    //         `${baseUrl}web/sandwich/rpw_sandwich_03.webp?${version}`,
    //     ],
    //     date: '2023',
    //     tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
    //     linked: 'https://sandvich.redvus.ru/'
    // },
    // {
    //     id: 14,
    //     title: 'ЕвроАвтоЦентр',
    //     description: `Продажа и обслуживание грузовых автомобилей Мерседес-Бенц`,
    //     type: 'web',
    //     imageUrl: `${baseUrl}web/mbtruck/rp_mbtruck_00.webp?${version}`,
    //     images: [
    //         `${baseUrl}web/mbtruck/rp_mbtruck_01.webp?${version}`,
    //         `${baseUrl}web/mbtruck/rp_mbtruck_02.webp?${version}`,
    //         `${baseUrl}web/mbtruck/rp_mbtruck_03.webp?${version}`,
    //     ],
    //     date: '2024',
    //     tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
    //     linked: 'https://mb-truck.ru/'
    // },
    {
        id: 15,
        title: 'Краспан',
        description: `Продажа материалов для фасадов и кровли.<br><br>
        Сайт сделан на нескольких страницах с модальными окнами для показа галереи и своей продукции с описанием.<br><br>
        Также присутствуют интерактивные элементы.`,
        type: 'web',
        imageUrl: `${baseUrl}web/kraspan/rpw_kraspan_00.webp?${version}`,
        images: [
            `${baseUrl}web/kraspan/rpw_kraspan_01.webp?${version}`,
            `${baseUrl}web/kraspan/rpw_kraspan_02.webp?${version}`,
            `${baseUrl}web/kraspan/rpw_kraspan_03.webp?${version}`,
        ],
        date: '2024',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://краспан-поволжье.рф/'
    },
    {
        id: 16,
        title: 'Форсунка',
        description: `Продажа автозапчастей для грузовых автомобилей.<br><br>
        Интернет-магазин на базе CMS OpenCart с доработками по дизайну и функционалу.`,
        type: 'web',
        imageUrl: `${baseUrl}web/forsunka/rpw_forsunka_00.webp?${version}`,
        images: [
            `${baseUrl}web/forsunka/rpw_forsunka_01.webp?${version}`,
            `${baseUrl}web/forsunka/rpw_forsunka_02.webp?${version}`,
            `${baseUrl}web/forsunka/rpw_forsunka_03.webp?${version}`,
            `${baseUrl}web/forsunka/rpw_forsunka_04.webp?${version}`,
            `${baseUrl}web/forsunka/rpw_forsunka_05.webp?${version}`,
        ],
        date: '2026',
        tags: ['PHP', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://forsunka.com/'
    },

    // Игры
    {
        id: 17,
        title: 'Славянские мифы',
        description: 'Интерактивная викторина по славянской мифологии. Содержит вопросы с несколькими вариантами ответов, а также иллюстрациями и анимациями, которые помогают погрузиться в атмосферу древних славянских легенд и мифов.',
        type: 'games',
        imageUrl: `${baseUrl}games/slavicMyth/rpg_slavicMyth_00.webp?${version}`,
        images: [
            `${baseUrl}games/slavicMyth/rpg_slavicMyth_01.webp?${version}`,
            `${baseUrl}games/slavicMyth/rpg_slavicMyth_02.webp?${version}`,
            `${baseUrl}games/slavicMyth/rpg_slavicMyth_03.webp?${version}`,
            `${baseUrl}games/slavicMyth/rpg_slavicMyth_04.webp?${version}`,
            `${baseUrl}games/slavicMyth/rpg_slavicMyth_05.webp?${version}`,
        ],
        date: '2023',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/slavicmyths/'
    },
    {
        id: 18,
        title: 'Космические пазлы',
        description: 'Интерактивная викторина по космической тематике. Содержит вопросы с несколькими вариантами ответов, а также иллюстрациями и анимациями, которые помогают погрузиться в атмосферу космоса и узнать больше о планетах, звездах, галактиках и других космических объектах.',
        type: 'games',
        imageUrl: `${baseUrl}games/cosmicPuzzles/rpg_cosmicPuzzles_00.webp?${version}`,
        images: [
            `${baseUrl}games/cosmicPuzzles/rpg_cosmicPuzzles_01.webp?${version}`,
            `${baseUrl}games/cosmicPuzzles/rpg_cosmicPuzzles_02.webp?${version}`,
            `${baseUrl}games/cosmicPuzzles/rpg_cosmicPuzzles_03.webp?${version}`,
            `${baseUrl}games/cosmicPuzzles/rpg_cosmicPuzzles_04.webp?${version}`,
        ],
        date: '2023',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/cosmicpuzzles/'
    },
    {
        id: 19,
        title: 'Краеведия',
        description: 'Интерактивная викторина по знаниям о родном крае. Содержит вопросы с несколькими вариантами ответов, а также иллюстрациями и анимациями, которые помогают погрузиться в атмосферу родного края и узнать больше о его истории, культуре, природе и достопримечательностях.',
        type: 'games',
        imageUrl: `${baseUrl}games/kraevedia/rpg_kraevedia_00.webp?${version}`,
        images: [
            `${baseUrl}games/kraevedia/rpg_kraevedia_01.webp?${version}`,
            `${baseUrl}games/kraevedia/rpg_kraevedia_02.webp?${version}`,
            `${baseUrl}games/kraevedia/rpg_kraevedia_03.webp?${version}`,
            `${baseUrl}games/kraevedia/rpg_kraevedia_04.webp?${version}`,
            `${baseUrl}games/kraevedia/rpg_kraevedia_05.webp?${version}`,
            `${baseUrl}games/kraevedia/rpg_kraevedia_06.webp?${version}`,
            `${baseUrl}games/kraevedia/rpg_kraevedia_07.webp?${version}`,
            `${baseUrl}games/kraevedia/rpg_kraevedia_08.webp?${version}`,
        ],
        date: '2023',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/kraevedia/'
    },
    {
        id: 20,
        title: 'Игросказы',
        description: 'Интерактивная викторина по рассказам стран мира. Содержит вопросы с несколькими вариантами ответов, а также иллюстрациями и анимациями, которые помогают погрузиться в атмосферу различных стран и узнать больше о их культуре, традициях, истории и достопримечательностях.',
        type: 'games',
        imageUrl: `${baseUrl}games/igroskazy/rpg_igroskazy_00.webp?${version}`,
        images: [
            `${baseUrl}games/igroskazy/rpg_igroskazy_01.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_02.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_03.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_04.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_05.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_06.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_07.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_08.webp?${version}`,
            `${baseUrl}games/igroskazy/rpg_igroskazy_09.webp?${version}`,
        ],
        date: '2025',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/igroskazy/'
    },
    {
        id: 21,
        title: 'Волшебное перо',
        description: 'Интерактивная викторина по сказкам Александра Николаевича Афанасьева. Содержит вопросы с несколькими вариантами ответов, а также иллюстрациями и анимациями, которые помогают погрузиться в атмосферу русских народных сказок и узнать больше о их героях, сюжетах и морали.',
        type: 'games',
        imageUrl: `${baseUrl}games/magicFeather/rpg_magicFeather_00.webp?${version}`,
        images: [
            `${baseUrl}games/magicFeather/rpg_magicFeather_01.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_02.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_03.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_04.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_05.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_06.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_07.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_08.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_09.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_010.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_011.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_012.webp?${version}`,
            `${baseUrl}games/magicFeather/rpg_magicFeather_013.webp?${version}`,
        ],
        date: '2024',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/magicfeather/'
    },
    {
        id: 22,
        title: 'Старая квартира',
        description: 'Интерактивная викторина по истории начала века. Содержит вопросы с несколькими вариантами ответов, а также иллюстрациями и анимациями, которые помогают погрузиться в атмосферу начала XX века и узнать больше о жизни людей, их быте, культуре и исторических событиях того времени.',
        type: 'games',
        imageUrl: `${baseUrl}games/oldAppartment/rpg_oldAppartment_00.webp?${version}`,
        images: [
            `${baseUrl}games/oldAppartment/rpg_oldAppartment_01.webp?${version}`,
            `${baseUrl}games/oldAppartment/rpg_oldAppartment_02.webp?${version}`,
            `${baseUrl}games/oldAppartment/rpg_oldAppartment_03.webp?${version}`,
            `${baseUrl}games/oldAppartment/rpg_oldAppartment_04.webp?${version}`,
            `${baseUrl}games/oldAppartment/rpg_oldAppartment_05.webp?${version}`,
            `${baseUrl}games/oldAppartment/rpg_oldAppartment_06.webp?${version}`,
            `${baseUrl}games/oldAppartment/rpg_oldAppartment_07.webp?${version}`,
        ],
        date: '2024',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/oldapartment/'
    },
    {
        id: 23,
        title: 'Марина Цветаева',
        description: 'Интерактивная викторина по творчеству Марины Ивановны Цветаевой. Содержит вопросы с несколькими вариантами ответов, а также иллюстрациями и анимациями, которые помогают погрузиться в атмосферу жизни и творчества поэтессы и узнать больше о ее биографии, произведениях и влиянии на литературу.',
        type: 'games',
        imageUrl: `${baseUrl}games/cvetaeva/rpg_cvetaeva_00.webp?${version}`,
        images: [
            `${baseUrl}games/cvetaeva/rpg_cvetaeva_01.webp?${version}`,
            `${baseUrl}games/cvetaeva/rpg_cvetaeva_02.webp?${version}`,
            `${baseUrl}games/cvetaeva/rpg_cvetaeva_03.webp?${version}`,
            `${baseUrl}games/cvetaeva/rpg_cvetaeva_04.webp?${version}`,
            `${baseUrl}games/cvetaeva/rpg_cvetaeva_05.webp?${version}`,
            `${baseUrl}games/cvetaeva/rpg_cvetaeva_06.webp?${version}`,
        ],
        date: '2025',
        tags: ['HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/cvetaeva/'
    },
    // {
    //     id: 24,
    //     title: 'Литературные классики',
    //     description: 'Интерактивная викторина по славянской мифологии',
    //     type: 'games',
    //     imageUrl: `${baseUrl}games/classics/rp_classics_00.webp?${version}`,
    //     images: [
    //         `${baseUrl}games/classics/rp_classics_01.webp?${version}`,
    //         `${baseUrl}games/classics/rp_classics_02.webp?${version}`,
    //         `${baseUrl}games/classics/rp_classics_03.webp?${version}`
    //     ],
    //     date: '2023',
    //     tags: ['HTML', 'CSS', 'Javascript'],
    //     linked: 'https://smibs.ru/classics/'
    // },

    // Мобильные
    // {
    //     id: 25,
    //     title: 'SMIBS-AR',
    //     description: 'Мобильное приложение «SMIBS-AR» для устройств на базе Android, написанное на Kotlin, разработанное для МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» (СМИБС). Приложение использует технологию дополненной реальности (AR) для просмотра 3Д моделей изобретений Леонардо да Винчи, восстановленных по чертежам из его записных книжек. Пользователи могут взаимодействовать с 3Д моделями, которые проецируются на реальные объекты в натуральную величину.',
    //     type: 'mobile',
    //     imageUrl: `${baseUrl}mobile/smibsAR/rp_smibsAR_00.webp?${version}`,
    //     images: [
    //         `${baseUrl}mobile/smibsAR/rp_smibsAR_01.webp?${version}`,
    //         `${baseUrl}mobile/smibsAR/rp_smibsAR_02.webp?${version}`,
    //         `${baseUrl}mobile/smibsAR/rp_smibsAR_03.webp?${version}`
    //     ],
    //     date: '2023',
    //     tags: ['Kotlin', 'Blender', 'Substance Painter']
    // },

    // Брэндинг
    {
        id: 26,
        title: 'HammerHead',
        description: 'Логотип для компании по производству боксов для подводных съемок',
        type: 'branding',
        imageUrl: `${baseUrl}branding/hammerhead/rp_hammerhead_00.webp?${version}`,
        images: [
            `${baseUrl}branding/hammerhead/rp_hammerhead_01.webp?${version}`,
            `${baseUrl}branding/hammerhead/rp_hammerhead_02.webp?${version}`,
            `${baseUrl}branding/hammerhead/rp_hammerhead_03.webp?${version}`
        ],
        date: '2004',
        tags: ['Illustrator']
    },
    {
        id: 27,
        title: 'АквариуСтрой',
        description: 'Логотип для компании по строительству',
        type: 'branding',
        imageUrl: `${baseUrl}branding/akvariustroi/rp_akvariustroi_00.webp?${version}`,
        images: [
            `${baseUrl}branding/akvariustroi/rp_akvariustroi_01.webp?${version}`,
            `${baseUrl}branding/akvariustroi/rp_akvariustroi_02.webp?${version}`,
            `${baseUrl}branding/akvariustroi/rp_akvariustroi_03.webp?${version}`,
            `${baseUrl}branding/akvariustroi/rp_akvariustroi_04.webp?${version}`,
            `${baseUrl}branding/akvariustroi/rp_akvariustroi_05.webp?${version}`,
            `${baseUrl}branding/akvariustroi/rp_akvariustroi_06.webp?${version}`
        ],
        date: '2011',
        tags: ['Illustrator']
    },
    {
        id: 28,
        title: 'Белла Вита',
        description: 'Логотип для школы крастоты и здоровья',
        type: 'branding',
        imageUrl: `${baseUrl}branding/bellaVita/rp_bellaVita_00.webp?${version}`,
        images: [
            `${baseUrl}branding/bellaVita/rp_bellaVita_01.webp?${version}`,
            `${baseUrl}branding/bellaVita/rp_bellaVita_02.webp?${version}`,
        ],
        date: '2010',
        tags: ['Illustrator']
    },
    {
        id: 29,
        title: 'Экспонорм',
        description: 'Логотип для компании по изготовлению и продаже выставочных стендов и конструкций',
        type: 'branding',
        imageUrl: `${baseUrl}branding/exponorm/rp_exponorm_00.webp?${version}`,
        images: [
            `${baseUrl}branding/exponorm/rp_exponorm_01.webp?${version}`,
            `${baseUrl}branding/exponorm/rp_exponorm_02.webp?${version}`,
            `${baseUrl}branding/exponorm/rp_exponorm_03.webp?${version}`,
            `${baseUrl}branding/exponorm/rp_exponorm_04.webp?${version}`,
            `${baseUrl}branding/exponorm/rp_exponorm_05.webp?${version}`
        ],
        date: '2008',
        tags: ['Illustrator']
    },
    {
        id: 30,
        title: 'Белый Лотос',
        description: 'Логотип для спа-салона',
        type: 'branding',
        imageUrl: `${baseUrl}branding/whiteLotos/rp_whiteLotos_00.webp?${version}`,
        images: [
            `${baseUrl}branding/whiteLotos/rp_whiteLotos_01.webp?${version}`,
            `${baseUrl}branding/whiteLotos/rp_whiteLotos_02.webp?${version}`,
            `${baseUrl}branding/whiteLotos/rp_whiteLotos_03.webp?${version}`,
            `${baseUrl}branding/whiteLotos/rp_whiteLotos_04.webp?${version}`,
            `${baseUrl}branding/whiteLotos/rp_whiteLotos_05.webp?${version}`,
            `${baseUrl}branding/whiteLotos/rp_whiteLotos_06.webp?${version}`,
            `${baseUrl}branding/whiteLotos/rp_whiteLotos_07.webp?${version}`
        ],
        date: '2012',
        tags: ['Illustrator']
    },
    {
        id: 31,
        title: 'УЗС 1',
        description: 'Логотип устройства проверки ультразвуком',
        type: 'branding',
        imageUrl: `${baseUrl}branding/uzs_1/rp_uzs1_00.webp?${version}`,
        images: [
            `${baseUrl}branding/uzs_1/rp_uzs1_01.webp?${version}`,
            `${baseUrl}branding/uzs_1/rp_uzs1_02.webp?${version}`,
            `${baseUrl}branding/uzs_1/rp_uzs1_03.webp?${version}`,
            `${baseUrl}branding/uzs_1/rp_uzs1_04.webp?${version}`,
            `${baseUrl}branding/uzs_1/rp_uzs1_05.webp?${version}`,
            `${baseUrl}branding/uzs_1/rp_uzs1_06.webp?${version}`,
            `${baseUrl}branding/uzs_1/rp_uzs1_07.webp?${version}`,
            `${baseUrl}branding/uzs_1/rp_uzs1_08.webp?${version}`
        ],
        date: '2010',
        tags: ['Illustrator']
    },
    {
        id: 32,
        title: 'Трэкшн Групп',
        description: 'Логотип для компании по продаже и обслуживанию грузовых автомобилей',
        type: 'branding',
        imageUrl: `${baseUrl}branding/tractiongroup/rp_tractiongroup_00.webp?${version}`,
        images: [
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_01.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_02.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_03.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_04.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_05.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_06.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_07.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_08.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_09.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_010.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_011.webp?${version}`,
            `${baseUrl}branding/tractiongroup/rp_tractiongroup_012.webp?${version}`
        ],
        date: '2015',
        tags: ['Illustrator']
    },
    {
        id: 33,
        title: 'Самарская Сувенирная Компания',
        description: 'Логотип для сувенирной компании',
        type: 'branding',
        imageUrl: `${baseUrl}branding/ssk/rp_ssk_00.webp?${version}`,
        images: [
            `${baseUrl}branding/ssk/rp_ssk_01.webp?${version}`,
            `${baseUrl}branding/ssk/rp_ssk_02.webp?${version}`,
            `${baseUrl}branding/ssk/rp_ssk_03.webp?${version}`,
        ],
        date: '2014',
        tags: ['Illustrator']
    },
    {
        id: 34,
        title: 'Метрология и Автоматизация',
        description: 'Логотип для метрологической компании',
        type: 'branding',
        imageUrl: `${baseUrl}branding/ma/rp_ma_00.webp?${version}`,
        images: [
            `${baseUrl}branding/ma/rp_ma_01.webp?${version}`,
            `${baseUrl}branding/ma/rp_ma_02.webp?${version}`,
            `${baseUrl}branding/ma/rp_ma_03.webp?${version}`,
            `${baseUrl}branding/ma/rp_ma_04.webp?${version}`,
            `${baseUrl}branding/ma/rp_ma_05.webp?${version}`,
        ],
        date: '2016',
        tags: ['Illustrator']
    },
    {
        id: 35,
        title: 'Биг Бен',
        description: 'Логотип школы английского языка для детей',
        type: 'branding',
        imageUrl: `${baseUrl}branding/bigben/rp_bigben_00.webp?${version}`,
        images: [
            `${baseUrl}branding/bigben/rp_bigben_01.webp?${version}`,
        ],
        date: '2013',
        tags: ['Illustrator']
    },
    {
        id: 36,
        title: 'Буква',
        description: 'Логотип для детского проекта',
        type: 'branding',
        imageUrl: `${baseUrl}branding/bybukva/rp_byBukva_00.webp?${version}`,
        images: [
            `${baseUrl}branding/bybukva/rp_byBukva_01.webp?${version}`,
        ],
        date: '2013',
        tags: ['Illustrator']
    },
    {
        id: 37,
        title: 'Архимед',
        description: 'Логотип для строительной компании',
        type: 'branding',
        imageUrl: `${baseUrl}branding/archimed/rp_archimed_00.webp?${version}`,
        images: [
            `${baseUrl}branding/archimed/rp_archimed_01.webp?${version}`,
        ],
        date: '2014',
        tags: ['Illustrator']
    },
    {
        id: 38,
        title: 'Красавин',
        description: 'Логотип для студии и школы массажа Валерия Красавина',
        type: 'branding',
        imageUrl: `${baseUrl}branding/krasavin/rp_krasavin_00.webp?${version}`,
        images: [
            `${baseUrl}branding/krasavin/rp_krasavin_01.webp?${version}`,
            `${baseUrl}branding/krasavin/rp_krasavin_02.webp?${version}`,
            `${baseUrl}branding/krasavin/rp_krasavin_03.webp?${version}`,
            `${baseUrl}branding/krasavin/rp_krasavin_04.webp?${version}`,
        ],
        date: '2012',
        tags: ['Illustrator']
    },
    {
        id: 39,
        title: 'Тантал',
        description: 'Логотип для магазина по продаже электрических изделий',
        type: 'branding',
        imageUrl: `${baseUrl}branding/tantal/rp_tantal_00.webp?${version}`,
        images: [
            `${baseUrl}branding/tantal/rp_tantal_01.webp?${version}`,
            `${baseUrl}branding/tantal/rp_tantal_02.webp?${version}`,
            `${baseUrl}branding/tantal/rp_tantal_03.webp?${version}`,
        ],
        date: '2011',
        tags: ['Illustrator']
    },
    {
        id: 40,
        title: 'СамараАвтоГаз',
        description: 'Логотип для транспортной компании',
        type: 'branding',
        imageUrl: `${baseUrl}branding/sag/rp_sag_00.webp?${version}`,
        images: [
            `${baseUrl}branding/sag/rp_sag_01.webp?${version}`,
            `${baseUrl}branding/sag/rp_sag_02.webp?${version}`,
            `${baseUrl}branding/sag/rp_sag_03.webp?${version}`,
            `${baseUrl}branding/sag/rp_sag_04.webp?${version}`,
        ],
        date: '2013',
        tags: ['Illustrator']
    },
    {
        id: 41,
        title: 'ЭкоСервис',
        description: 'Логотип для клиннинговой компании',
        type: 'branding',
        imageUrl: `${baseUrl}branding/es/rp_es_00.webp?${version}`,
        images: [
            `${baseUrl}branding/es/rp_es_01.webp?${version}`,
        ],
        date: '2013',
        tags: ['Illustrator']
    },
    {
        id: 42,
        title: 'Redice',
        description: 'Логотип для хоккейной школы и магазина хоккейного снаряжения',
        type: 'branding',
        imageUrl: `${baseUrl}branding/redice/rp_redice_00.webp?${version}`,
        images: [
            `${baseUrl}branding/redice/rp_redice_01.webp?${version}`,
            `${baseUrl}branding/redice/rp_redice_02.webp?${version}`,
        ],
        date: '2018',
        tags: ['Illustrator']
    },
    {
        id: 43,
        title: 'Фабрика Архипова',
        description: 'Логотип для маленькой артели по ремонту и модернизации оборудования',
        type: 'branding',
        imageUrl: `${baseUrl}branding/archipov/rp_archipov_00.webp?${version}`,
        images: [
            `${baseUrl}branding/archipov/rp_archipov_01.webp?${version}`,
        ],
        date: '2016',
        tags: ['Illustrator']
    },
    {
        id: 44,
        title: 'Фабрика Карпова',
        description: 'Логотип для производственной компании',
        type: 'branding',
        imageUrl: `${baseUrl}branding/koff/rp_koff_00.webp?${version}`,
        images: [
            `${baseUrl}branding/koff/rp_koff_01.webp?${version}`,
            `${baseUrl}branding/koff/rp_koff_02.webp?${version}`,
            `${baseUrl}branding/koff/rp_koff_03.webp?${version}`,
            `${baseUrl}branding/koff/rp_koff_04.webp?${version}`,
            `${baseUrl}branding/koff/rp_koff_05.webp?${version}`,
        ],
        date: '2014',
        tags: ['Illustrator']
    },
    {
        id: 45,
        title: 'Time to Lunch',
        description: 'Логотип для кухни быстрого питания и по доставке обедов',
        type: 'branding',
        imageUrl: `${baseUrl}branding/timetolunch/rp_timetolunch_00.webp?${version}`,
        images: [
            `${baseUrl}branding/timetolunch/rp_timetolunch_01.webp?${version}`,
            `${baseUrl}branding/timetolunch/rp_timetolunch_02.webp?${version}`,
            `${baseUrl}branding/timetolunch/rp_timetolunch_03.webp?${version}`,
            `${baseUrl}branding/timetolunch/rp_timetolunch_04.webp?${version}`,
            `${baseUrl}branding/timetolunch/rp_timetolunch_05.webp?${version}`,
        ],
        date: '2018',
        tags: ['Illustrator']
    },
    {
        id: 46,
        title: 'Я вижу',
        description: 'Логотип для сети салонов оптики',
        type: 'branding',
        imageUrl: `${baseUrl}branding/isee/rp_isee_00.webp?${version}`,
        images: [
            `${baseUrl}branding/isee/rp_isee_01.webp?${version}`,
            `${baseUrl}branding/isee/rp_isee_02.webp?${version}`,
            `${baseUrl}branding/isee/rp_isee_03.webp?${version}`,
            `${baseUrl}branding/isee/rp_isee_04.webp?${version}`,
            `${baseUrl}branding/isee/rp_isee_05.webp?${version}`,
            `${baseUrl}branding/isee/rp_isee_06.webp?${version}`,
            `${baseUrl}branding/isee/rp_isee_07.webp?${version}`,
        ],
        date: '2015',
        tags: ['Illustrator']
    },
    {
        id: 47,
        title: 'Козелки',
        description: 'Переосмысление логотипа и варианты этикеток для продукции Стара-Загорского мясокомбината «Козелки»',
        type: 'branding',
        imageUrl: `${baseUrl}branding/kozelki/rp_kozelki_00.webp?${version}`,
        images: [
            `${baseUrl}branding/kozelki/rp_kozelki_01.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_02.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_03.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_04.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_05.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_06.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_07.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_08.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_09.webp?${version}`,
            `${baseUrl}branding/kozelki/rp_kozelki_010.webp?${version}`,
        ],
        date: '2013',
        tags: ['Illustrator']
    },
    {
        id: 48,
        title: 'ППЖР',
        description: 'Логотип устройства пароотборника перекачиваемой жидкости',
        type: 'branding',
        imageUrl: `${baseUrl}branding/ppgr/rp_ppgr_00.webp?${version}`,
        images: [
            `${baseUrl}branding/ppgr/rp_ppgr_01.webp?${version}`,
            `${baseUrl}branding/ppgr/rp_ppgr_02.webp?${version}`,
            `${baseUrl}branding/ppgr/rp_ppgr_03.webp?${version}`,
            `${baseUrl}branding/ppgr/rp_ppgr_04.webp?${version}`,
            `${baseUrl}branding/ppgr/rp_ppgr_05.webp?${version}`,
            `${baseUrl}branding/ppgr/rp_ppgr_06.webp?${version}`,
            `${baseUrl}branding/ppgr/rp_ppgr_07.webp?${version}`,
            `${baseUrl}branding/ppgr/rp_ppgr_08.webp?${version}`,
        ],
        date: '2010',
        tags: ['Illustrator']
    },
    {
        id: 49,
        title: 'Форсунка',
        description: 'Логотип для компании по продаже запчастей для грузовых автомобилей',
        type: 'branding',
        imageUrl: `${baseUrl}branding/forsunka/rp_forsunka_00.webp?${version}`,
        images: [
            `${baseUrl}branding/forsunka/rp_forsunka_01.webp?${version}`,
            `${baseUrl}branding/forsunka/rp_forsunka_02.webp?${version}`,
        ],
        date: '2016',
        tags: ['Illustrator']
    },
    {
        id: 50,
        title: 'Фотобокс',
        description: 'Логотип для компании по фотоуслугам, проявке и продаже фотопленки, печати фотографий',
        type: 'branding',
        imageUrl: `${baseUrl}branding/photoboxs/rp_photoboxs_00.webp?${version}`,
        images: [
            `${baseUrl}branding/photoboxs/rp_photoboxs_01.webp?${version}`,
            `${baseUrl}branding/photoboxs/rp_photoboxs_02.webp?${version}`,
        ],
        date: '2026',
        tags: ['Illustrator']
    },

    // Проекты
    {
        id: 51,
        title: 'Интерактивная выставка c элементами игры',
        description: 'Работа была сделана в рамках проекта виртуальной интерактивной выставки про выдающегося человека своего времени Н. Г. Гарина-Михайловского. Выставка содержит 3D модели, анимации, интерактивные элементы и видеоролики, которые помогают погрузиться в атмосферу жизни и творчества писателя и узнать больше о его биографии, произведениях и влиянии на литературу.',
        type: 'web',
        imageUrl: `${baseUrl}projects/garin/rp_garin_00.webp?${version}`,
        images: [
            `${baseUrl}projects/garin/rp_garin_02.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_03.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_04.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_05.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_06.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_07.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_08.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_09.webp?${version}`,
            `${baseUrl}projects/garin/rp_garin_01.webp?${version}`,
        ],
        videos: [
            {
                url: `${baseUrl}projects/garin/video/rp_garin_intro.mp4`,
                thumbnail: `${baseUrl}projects/garin/video/thumb/rp_garin_intro.webp?${version}`,
            },
            {
                url: `${baseUrl}projects/garin/video/rp_garin_into.mp4`,
                thumbnail: `${baseUrl}projects/garin/video/thumb/rp_garin_into.webp?${version}`,

            },
        ],
        date: '2025',
        tags: ['Blender', 'Substance Painter', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/garin/'
    },
    {
        id: 52,
        title: 'Интерактивная проект к 80-летию Победы',
        description: 'Работа была сделана в рамках проекта виртуальной интерактивной книги. 3D модели, анимации, интерактивные элементы и видеоролики, которые рассказывают о подвиге советского народа.',
        type: 'web',
        imageUrl: `${baseUrl}projects/victory80/rpp_victory80_00.webp?${version}`,
        images: [
            `${baseUrl}projects/victory80/rpp_victory80_01.webp?${version}`,
            `${baseUrl}projects/victory80/rpp_victory80_02.webp?${version}`,
            `${baseUrl}projects/victory80/rpp_victory80_03.webp?${version}`,
            `${baseUrl}projects/victory80/rpp_victory80_04.webp?${version}`,
            `${baseUrl}projects/victory80/rpp_victory80_05.webp?${version}`,
            `${baseUrl}projects/victory80/rpp_victory80_06.webp?${version}`,
        ],
        videos: [
            {
                url: `${baseUrl}projects/victory80/rpp_victory80_00.mp4`,
                thumbnail: `${baseUrl}projects/victory80/rpp_victory80S_00.webp?${version}`,
            },
            {
                url: `${baseUrl}projects/victory80/rpp_victory80_01.mp4`,
                thumbnail: `${baseUrl}projects/victory80/rpp_victory80S_01.webp?${version}`,

            },
            {
                url: `${baseUrl}projects/victory80/rpp_victory80_02.mp4`,
                thumbnail: `${baseUrl}projects/victory80/rpp_victory80S_02.webp?${version}`,

            },
        ],
        date: '2025',
        tags: ['Blender', 'Substance Painter', 'HTML', 'CSS', 'Javascript'],
        linked: 'https://smibs.ru/victory80/'
    },

    // Арт
    {
        id: 53,
        title: 'Гараж',
        description: 'Работа по созданию 3D модели гаража с реалистичной текстурой и освещением. Модели были созданы в Blender, текстуры были разработаны в Substance Painter, а финальная обработка и композитинг были выполнены в Photoshop. Целью проекта было разместить в одном месте отсылки к разным понравившимся играм, в которые играл по нескольку раз и сотнями часов.',
        type: 'art',
        imageUrl: `${baseUrl}art/garage/rpa_garage_00.webp?${version}`,
        images: [
            `${baseUrl}art/garage/rpa_garage_01.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_02.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_03.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_04.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_05.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_06.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_07.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_08.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_09.webp?${version}`,
            `${baseUrl}art/garage/rpa_garage_010.webp?${version}`,
        ],
        date: '2025',
        tags: ['Blender', 'Substance Painter', 'Photoshop']
    },
    {
        id: 54,
        title: 'Предсказуемость глупости',
        description: 'Работа навеяна мыслями о том, что глупость и жестокость людей не имеют границ, и что всегда найдется кто-то, кто будет использовать это для своих целей. На заднем плане пристуствует элемент, который символизирует последствия человеческой глупости и безответственности. Этот образ может служить напоминанием о том, что мы должны быть осторожными и ответственными в своих действиях, чтобы избежать таких катастрофических последствий.',
        type: 'art',
        imageUrl: `${baseUrl}art/girlNuclear/rp_girlnuclear_00.webp?${version}`,
        images: [
            `${baseUrl}art/girlNuclear/rp_girlnuclear_01.webp?${version}`,
            `${baseUrl}art/girlNuclear/rp_girlnuclear_02.webp?${version}`,
            `${baseUrl}art/girlNuclear/rp_girlnuclear_03.webp?${version}`,
            `${baseUrl}art/girlNuclear/rp_girlnuclear_04.webp?${version}`,
            `${baseUrl}art/girlNuclear/rp_girlnuclear_05.webp?${version}`
        ],
        date: '2026',
        tags: ['Blender', 'Substance Painter', 'Photoshop']
    },
    {
        id: 55,
        title: 'Мир прекрасен',
        description: 'Мир никогда не перестанет быть красивым, как бы люди не старались его уничтожить. Всегда найдутся крепкие духом, кто будет цепляться за эту красоту, бороться за неё и жить дальше...',
        type: 'art',
        imageUrl: `${baseUrl}art/dgMountain/rp_dgMountain_00.webp?${version}`,
        images: [
            `${baseUrl}art/dgMountain/rp_dgMountain_01.webp?${version}`,
            `${baseUrl}art/dgMountain/rp_dgMountain_02.webp?${version}`,
            `${baseUrl}art/dgMountain/rp_dgMountain_03.webp?${version}`,
        ],
        date: '2025',
        tags: ['Blender', 'Substance Painter', 'Photoshop']
    },

    // Видео
    {
        id: 56,
        title: 'Форпост',
        description: 'Тренировочный проект – разбавить статику небольшой анимацией. Взял модели из предыдущих проектов и добавил новые. Освоение новых инструментов, принципов анимации, изучение основ работы в DaVinci Stidio для дальнейшего развития.',
        type: 'video',
        imageUrl: `${baseUrl}video/forpost/rpv_forpost_00.webp?${version}`,
        images: [
            `${baseUrl}video/forpost/rpv_forpost_01.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_02.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_03.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_04.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_05.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_06.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_07.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_08.webp?${version}`,
            `${baseUrl}video/forpost/rpv_forpost_09.webp?${version}`,
        ],
        videos: [
            {
                url: `${baseUrl}video/forpost/rpv_forpost.mp4`,
                thumbnail: `${baseUrl}video/forpost/rpv_forpostCover.webp?${version}`,
            },
        ],
        date: '2026',
        tags: ['Blender', 'Substance Painter', 'DaVinci Resolve'],
        linked: 'https://vk.com/video/@id713554684?z=video713554684_456239043'
    },
    {
        id: 57,
        title: 'Фотобокс',
        description: 'Рекламный проект от компании по фотоуслугам, проявке и продаже фотопленки, печати фотографий для трансляции на видео-биллборде у оживленной автомобильной трассы.',
        type: 'video',
        imageUrl: `${baseUrl}video/photoboxs/rpv_photoboxs_00.webp?${version}`,
        videos: [
            {
                url: `${baseUrl}video/photoboxs/rpv_photoboxs.mp4`,
                thumbnail: `${baseUrl}video/photoboxs/rpv_photoboxsCover.webp?${version}`,
            },
            {
                url: `${baseUrl}video/photoboxs/rpv_photoboxs_2.mp4`,
                thumbnail: `${baseUrl}video/photoboxs/rpv_photoboxsCover_2.webp?${version}`,
            },
        ],
        date: '2025',
        tags: ['Blender'],
    },
    {
        id: 58,
        title: 'Литературный театр',
        description: 'Проект для маленького театра в филиале библиотеки СМИБС. Заставка логотипа для показа через проектор на задний фон.',
        type: 'video',
        imageUrl: `${baseUrl}video/smibs/rpv_theaterLogo_00.webp?${version}`,
        videos: [
            {
                url: `${baseUrl}video/smibs/rpv_theaterLogo.mp4`,
                thumbnail: `${baseUrl}video/smibs/rpv_theaterLogoCover.webp?${version}`,
            },
        ],
        date: '2025',
        tags: ['Blender'],
    },

    // Branding
    {
        id: 59,
        title: 'Амитис',
        description: 'Логотип для диагностической лаборатории',
        type: 'branding',
        imageUrl: `${baseUrl}branding/amitis/rpb_amitis_00.webp?${version}`,
        images: [
            `${baseUrl}branding/amitis/rpb_amitis_01.webp?${version}`,
        ],
        date: '2014',
        tags: ['Illustrator']
    },
    {
        id: 60,
        title: 'Галерея Атриум',
        description: 'Логотип для торгового центра модной одежды',
        type: 'branding',
        imageUrl: `${baseUrl}branding/galleryAtrium/rpb_galleryAtrium_00.webp?${version}`,
        images: [
            `${baseUrl}branding/galleryAtrium/rpb_galleryAtrium_01.webp?${version}`,
        ],
        date: '2008',
        tags: ['Illustrator']
    },
    {
        id: 61,
        title: 'АДВ-групп',
        description: 'Логотип для рекламного агентства, специализирующегося на торговле материалов для наружной рекламы и выставочных стендов',
        type: 'branding',
        imageUrl: `${baseUrl}branding/adv/rpb_adv_00.webp?${version}`,
        images: [
            `${baseUrl}branding/adv/rpb_adv_01.webp?${version}`,
        ],
        date: '2008',
        tags: ['Illustrator']
    },
];

export const filterOptions: FilterOption[] = [
    { id: 'web', label: 'Сайты', icon: 'fas fa-globe', count: galleryItems.filter(item => item.type === 'web').length },
    { id: 'games', label: 'Игры', icon: 'fas fa-gamepad', count: galleryItems.filter(item => item.type === 'games').length },
    // { id: 'mobile', label: 'Мобильные', icon: 'fas fa-mobile-screen-button', count: galleryItems.filter(item => item.type === 'mobile').length },
    { id: 'branding', label: 'Брэндинг', icon: 'fas fa-splotch', count: galleryItems.filter(item => item.type === 'branding').length },
    // { id: 'publish', label: 'Полиграфия', icon: 'fas fa-book-open', count: galleryItems.filter(item => item.type === 'publish').length },
    // { id: 'projects', label: 'Проекты', icon: 'fas fa-video', count: galleryItems.filter(item => item.type === 'projects').length },
    { id: 'art', label: 'Арт', icon: 'fas fa-paint-brush', count: galleryItems.filter(item => item.type === 'art').length },
    { id: 'video', label: 'Видео', icon: 'fas fa-video', count: galleryItems.filter(item => item.type === 'video').length },
    { id: 'all', label: 'Всего', icon: 'fas fa-th-large', count: galleryItems.length }
];