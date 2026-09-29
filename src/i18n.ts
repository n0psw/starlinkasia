import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: { calc: { "title":"Калькулятор стоимости","typeLabel":"Тип объекта","types":{"house":"Частный дом / Дача","camp":"Вахтовый поселок / Стройплощадка","biz":"Коммерческий объект / Промышленность","mobile":"Мобильный / Автомобильный"},"usersLabel":"Количество пользователей","usersCount":"чел.","optionsLabel":"Дополнительные опции","meshOption":"Mesh-модуль Wi-Fi (+45 000 ₸)","installOption":"Профессиональный монтаж (+50 000 ₸)","notesLabel":"Особые пожелания:","notesPlaceholder":"Например: горная местность...","recommendedKit":"Рекомендуемая комплектация:","aiRecommendation":"ИИ-Рекомендация:","total":"Итоговая стоимость:","btnWhatsApp":"Получить КП в WhatsApp","recs":{"mobile":"Оптимально для быстрого развертывания.","standard":"Рекомендуется стационарный комплект для стабильности.","mesh":"Добавлен Mesh-модуль для покрытия {{users}} чел.","install":"Включен монтаж."} },
      nav: { map: 'Покрытие', countries: 'Страны', features: 'Преимущества', setup: 'Установка', specs: 'Спецификации', support: 'Поддержка', contact: 'Контакты', signIn: 'Войти' , calc: 'Калькулятор'},
      hero: { title: 'Спутниковый интернет по всей Азии', desc: 'Высокоскоростной широкополосный интернет с низкой задержкой. Доступен в любой точке покрытия.', searchPlaceholder: 'Выберите вашу страну...' },
      countries: { title: 'Доступные страны', desc: 'Starlink официально работает в ряде стран Центральной и Восточной Азии.' },
      features: { 
        title: 'Преимущества',
        items: [
          { value: '150+', unit: 'Мбит/с', desc: 'Сверхвысокая скорость скачивания для любых задач' },
          { value: '25', unit: 'мс', desc: 'Минимальная задержка благодаря низкой орбите' },
          { value: '100%', unit: 'Связь', desc: 'Работает в самых удаленных и труднодоступных местах' }
        ]
      },
      setup: {
        title: 'Установка за считанные минуты',
        desc: 'Комплект Starlink поставляется со всем необходимым для выхода в интернет.',
        steps: [
          { title: 'Найдите открытое небо', desc: 'Антенне нужен беспрепятственный обзор неба' },
          { title: 'Подключите к сети', desc: 'Вставьте кабель в розетку' },
          { title: 'Вы в сети', desc: 'Маршрутизатор настроится автоматически' }
        ]
      },
      app: {
        title: 'Управляйте сетью со смартфона',
        desc: 'Приложение Starlink помогает настроить параметры, получать обновления, обращаться в поддержку и проверять скорость в реальном времени.',
        download: 'Доступно для iOS и Android'
      },
      specs: {
        title: 'Спецификации',
        items: [
          { label: 'Антенна', value: 'Электронная фазированная антенная решетка' },
          { label: 'Ориентация', value: 'Автоматическая с электроприводом' },
          { label: 'Защита от среды', value: 'IP54 (Защита от пыли и брызг воды)' },
          { label: 'Плавление снега', value: 'До 40 мм/час' },
          { label: 'Температура', value: 'от -30°C до +50°C' },
          { label: 'Wi-Fi роутер', value: 'Wi-Fi 6 (802.11ax), Dual Band' }
        ]
      },
      map: { active: 'Активное покрытие', asia: 'Страны Азии', click: 'Нажмите для перехода', soon: 'Скоро' },
      support: {
        title: 'Часто задаваемые вопросы',
        items: [
          { q: 'Как установить Starlink?', a: 'В комплект входит всё необходимое: терминал, роутер, кабели и база. Система сама настраивается за пару минут, нужно лишь обеспечить ей открытый вид на небо.' },
          { q: 'Какая будет скорость?', a: 'Обычно скорость скачивания составляет от 100 до 200 Мбит/с, а задержка — около 20 мс в большинстве локаций.' },
          { q: 'Можно ли приостановить обслуживание?', a: 'Да, в зависимости от выбранного тарифа вы можете приостанавливать и возобновлять сервис в любое время.' }
        ]
      },
      footer: { desc: 'Глобальный провайдер спутникового интернета нового поколения.', contacts: 'Наши контакты', connect: 'Подключение', rights: 'Все права защищены.' }
    }
  },
  kk: {
    translation: { calc: { "title":"Құнын есептеу","typeLabel":"Нысан түрі","types":{"house":"Жек үй / Саяжай","camp":"Вахталық кент / Құрылыс","biz":"Коммерциялық нысан","mobile":"Мобилді / Автомобильді"},"usersLabel":"Пайдаланушылар саны","usersCount":"адам","optionsLabel":"Қосымша опциялар","meshOption":"Wi-Fi Mesh-модулі (+45 000 ₸)","installOption":"Кәсіби орнату (+50 000 ₸)","notesLabel":"Ерекше тілектер:","notesPlaceholder":"Мысалы: таулы аймақ...","recommendedKit":"Ұсынылатын жинақ:","aiRecommendation":"ЖИ-Ұсыныс:","total":"Жалпы құны:","btnWhatsApp":"WhatsApp арқылы КП алу","recs":{"mobile":"Жылдам орнату үшін оңтайлы.","standard":"Тұрақтылық үшін стандартты жинақ ұсынылады.","mesh":"{{users}} адамға арналған Mesh-модуль қосылды.","install":"Орнату қосылған."} },
      nav: { map: 'Қамту аймағы', countries: 'Елдер', features: 'Артықшылықтар', setup: 'Орнату', specs: 'Сипаттамалар', support: 'Қолдау', contact: 'Байланыс', signIn: 'Кіру' , calc: 'Калькулятор'},
      hero: { title: 'Бүкіл Азия бойынша спутниктік интернет', desc: 'Төмен кідірісі бар жоғары жылдамдықты интернет. Қамту аймағының кез келген нүктесінде қолжетімді.', searchPlaceholder: 'Өз еліңізді таңдаңыз...' },
      countries: { title: 'Қолжетімді елдер', desc: 'Starlink Орталық және Шығыс Азияның бірқатар елдерінде ресми түрде жұмыс істейді.' },
      features: { 
        title: 'Артықшылықтар',
        items: [
          { value: '150+', unit: 'Мбит/с', desc: 'Кез келген тапсырма үшін өте жоғары жүктеп алу жылдамдығы' },
          { value: '25', unit: 'мс', desc: 'Төменгі орбитаның арқасында минималды кідіріс' },
          { value: '100%', unit: 'Байланыс', desc: 'Ең шалғай және жету қиын жерлерде жұмыс істейді' }
        ]
      },
      setup: {
        title: 'Бірнеше минут ішінде орнату',
        desc: 'Starlink жинағы интернетке қосылуға қажетті барлық нәрсемен бірге жеткізіледі.',
        steps: [
          { title: 'Ашық аспанды табыңыз', desc: 'Антеннаға аспанның кедергісіз көрінісі қажет' },
          { title: 'Желіге қосыңыз', desc: 'Кабельді розеткаға қосыңыз' },
          { title: 'Сіз желідесіз', desc: 'Маршрутизатор автоматты түрде реттеледі' }
        ]
      },
      app: {
        title: 'Желіні смартфоннан басқарыңыз',
        desc: 'Starlink қолданбасы параметрлерді реттеуге, жаңартулар алуға және жылдамдықты тексеруге көмектеседі.',
        download: 'iOS және Android үшін қолжетімді'
      },
      specs: {
        title: 'Техникалық сипаттамалар',
        items: [
          { label: 'Антенна', value: 'Электрондық фазалық антенна торы' },
          { label: 'Бағдарлау', value: 'Электр жетегі бар автоматты' },
          { label: 'Ортадан қорғау', value: 'IP54 (Шаң мен су шашырандыларынан қорғау)' },
          { label: 'Қарды еріту', value: '40 мм/сағ дейін' },
          { label: 'Температура', value: '-30°C-тан +50°C-қа дейін' },
          { label: 'Wi-Fi роутер', value: 'Wi-Fi 6 (802.11ax), Dual Band' }
        ]
      },
      map: { active: 'Белсенді қамту', asia: 'Азия елдері', click: 'Өту үшін басыңыз', soon: 'Жақында' },
      support: {
        title: 'Жиі қойылатын сұрақтар',
        items: [
          { q: 'Starlink-ті қалай орнатуға болады?', a: 'Жинақта барлық қажетті заттар бар: терминал, роутер, кабельдер және база. Жүйе өзін-өзі бірнеше минут ішінде реттейді, тек ашық аспан көрінісін қамтамасыз ету керек.' },
          { q: 'Жылдамдық қандай болады?', a: 'Әдетте жүктеп алу жылдамдығы 100-ден 200 Мбит/с-қа дейін, ал кідіріс көптеген аймақтарда шамамен 20 мс құрайды.' },
          { q: 'Қызметті уақытша тоқтатуға бола ма?', a: 'Иә, таңдалған тарифке байланысты қызметті кез келген уақытта тоқтатып, қайта жалғастыра аласыз.' }
        ]
      },
      footer: { desc: 'Жаңа буын спутниктік интернетінің жаһандық провайдери.', contacts: 'Біздің байланыстар', connect: 'Қосылу', rights: 'Барлық құқықтар қорғалған.' }
    }
  },
  ky: {
    translation: { calc: { "title":"Баасын эсептөө","typeLabel":"Объекттин түрү","types":{"house":"Жеке үй / Дача","camp":"Вахталык айыл / Курулуш","biz":"Коммерциялык объект","mobile":"Мобилдик / Автомобилдик"},"usersLabel":"Колдонуучулардын саны","usersCount":"адам","optionsLabel":"Кошумча опциялар","meshOption":"Wi-Fi Mesh-модулу (+45 000 ₸)","installOption":"Кесипкөй орнотуу (+50 000 ₸)","notesLabel":"Өзгөчө каалоолор:","notesPlaceholder":"Мисалы: тоолуу аймак...","recommendedKit":"Сунушталган топтом:","aiRecommendation":"ЖИ-Сунуш:","total":"Жалпы баасы:","btnWhatsApp":"WhatsApp аркылуу КП алуу","recs":{"mobile":"Тез орнотуу үчүн оптималдуу.","standard":"Туруктуулук үчүн стандарттуу топтом сунушталат.","mesh":"{{users}} адамга арналган Mesh-модуль кошулду.","install":"Орнотуу кошулган."} },
      nav: { map: 'Камтуу аймагы', countries: 'Өлкөлөр', features: 'Артыкчылыктар', setup: 'Орнотуу', specs: 'Мүнөздөмөлөр', support: 'Колдоо', contact: 'Байланыш', signIn: 'Кирүү' , calc: 'Калькулятор'},
      hero: { title: 'Бүткүл Азия боюнча спутниктик интернет', desc: 'Кечигүүсү аз болгон жогорку ылдамдыктагы интернет. Камтуу аймагынын бардык жеринде жеткиликтүү.', searchPlaceholder: 'Өлкөңүздү тандаңыз...' },
      countries: { title: 'Жеткиликтүү өлкөлөр', desc: 'Starlink Борбордук жана Чыгыш Азиянын бир катар өлкөлөрүндө расмий иштейт.' },
      features: { 
        title: 'Артыкчылыктар',
        items: [
          { value: '150+', unit: 'Мбит/с', desc: 'Кандай гана тапшырма болбосун жогорку ылдамдыкта жүктөө' },
          { value: '25', unit: 'мс', desc: 'Төмөнкү орбитанын аркасында минималдуу кечигүү' },
          { value: '100%', unit: 'Байланыш', desc: 'Эң алыскы жана жетүүгө кыйын жерлерде иштейт' }
        ]
      },
      setup: {
        title: 'Бир нече мүнөттүн ичинде орнотуу',
        desc: 'Starlink топтому интернетке кирүү үчүн зарыл болгон бардык нерселер менен келет.',
        steps: [
          { title: 'Ачык асманды табыңыз', desc: 'Антеннага асмандын тоскоолдуксуз көрүнүшү керек' },
          { title: 'Тармакка кошуңуз', desc: 'Кабелди розеткага сайыңыз' },
          { title: 'Сиз тармактасыз', desc: 'Маршрутизатор автоматтык түрдө жөндөлөт' }
        ]
      },
      app: {
        title: 'Тармакты смартфондон башкарыңыз',
        desc: 'Starlink тиркемеси жөндөөлөрдү башкарууга, ылдамдыкты текшерүүгө жана колдоо алууга жардам берет.',
        download: 'iOS жана Android үчүн жеткиликтүү'
      },
      specs: {
        title: 'Техникалык мүнөздөмөлөр',
        items: [
          { label: 'Антенна', value: 'Электрондук фазалык антенна массиви' },
          { label: 'Багыттоо', value: 'Электр кыймылдаткычы менен автоматтык' },
          { label: 'Коргоо', value: 'IP54 (Чаң жана суудан коргоо)' },
          { label: 'Кар эритүү', value: '40 мм/саатка чейин' },
          { label: 'Температура', value: '-30°C дан +50°C га чейин' },
          { label: 'Wi-Fi роутер', value: 'Wi-Fi 6 (802.11ax), Dual Band' }
        ]
      },
      map: { active: 'Активдүү камтуу', asia: 'Азия өлкөлөрү', click: 'Өтүү үчүн басыңыз', soon: 'Жакында' },
      support: {
        title: 'Көп берилүүчү суроолор',
        items: [
          { q: 'Starlink кантип орнотулат?', a: 'Топтомдо бардык керектүү нерселер бар: терминал, роутер, кабелдер жана база. Система бир нече мүнөттүн ичинде өзүн-өзү жөндөйт, болгону ачык асманды камсыз кылуу керек.' },
          { q: 'Ылдамдык кандай болот?', a: 'Адатта жүктөө ылдамдыгы 100дөн 200 Мбит/с чейин, ал эми кечигүү көпчүлүк аймактарда 20 мс түзөт.' },
          { q: 'Кызматты убактылуу токтотууга болобу?', a: 'Ооба, тандалган тарифке жараша кызматты каалаган убакта токтотуп жана кайра уланта аласыз.' }
        ]
      },
      footer: { desc: 'Жаңы муундагы спутниктик интернеттин дүйнөлүк провайдери.', contacts: 'Биздин байланыштар', connect: 'Кошулуу', rights: 'Бардык укуктар корголгон.' }
    }
  },
  uz: {
    translation: { calc: { "title":"Narxni hisoblash","typeLabel":"Obyekt turi","types":{"house":"Xususiy uy / Dacha","camp":"Vaxta posyolkasi / Qurilish","biz":"Tijorat obyekti","mobile":"Mobil / Avtomobil"},"usersLabel":"Foydalanuvchilar soni","usersCount":"kishi","optionsLabel":"Qo'shimcha variantlar","meshOption":"Wi-Fi Mesh-moduli (+45 000 ₸)","installOption":"Professional o'rnatish (+50 000 ₸)","notesLabel":"Maxsus istaklar:","notesPlaceholder":"Masalan: tog'li hudud...","recommendedKit":"Tavsiya etilgan to'plam:","aiRecommendation":"SI-Tavsiya:","total":"Umumiy narx:","btnWhatsApp":"WhatsApp orqali tijorat taklifini olish","recs":{"mobile":"Tezkor joylashtirish uchun maqbul.","standard":"Barqarorlik uchun standart to'plam tavsiya etiladi.","mesh":"{{users}} kishi uchun Mesh-modul qo'shildi.","install":"O'rnatish kiritilgan."} },
      nav: { map: 'Qamrov hududi', countries: 'Mamlakatlar', features: 'Afzalliklar', setup: "O'rnatish", specs: 'Xususiyatlar', support: "Qo'llab-quvvatlash", contact: 'Aloqa', signIn: 'Kirish' , calc: 'Калькулятор'},
      hero: { title: "Butun Osiyo bo'ylab sun'iy yo'ldosh interneti", desc: "Past kechikishga ega yuqori tezlikdagi internet. Qamrov xaritasining barcha nuqtalarida mavjud.", searchPlaceholder: 'Mamlakatingizni tanlang...' },
      countries: { title: 'Mavjud mamlakatlar', desc: 'Starlink Markaziy va Sharqiy Osiyoning bir qator mamlakatlarida rasmiy ravishda ishlaydi.' },
      features: { 
        title: 'Afzalliklar',
        items: [
          { value: '150+', unit: 'Mbit/s', desc: "Har qanday vazifa uchun o'ta yuqori yuklab olish tezligi" },
          { value: '25', unit: 'ms', desc: 'Past orbita tufayli minimal kechikish' },
          { value: '100%', unit: 'Aloqa', desc: 'Eng chekka va borish qiyin joylarda ishlaydi' }
        ]
      },
      setup: {
        title: 'Sanoqli daqiqalarda o\'rnatish',
        desc: 'Starlink to\'plami internetga ulanish uchun barcha zarur narsalar bilan ta\'minlangan.',
        steps: [
          { title: 'Ochiq osmonni toping', desc: 'Antennaga osmonning to\'siqsiz ko\'rinishi kerak' },
          { title: 'Tarmoqqa ulang', desc: 'Kabelni rozetkaga ulang' },
          { title: 'Siz tarmoqdasiz', desc: 'Router avtomatik ravishda sozlanadi' }
        ]
      },
      app: {
        title: 'Tarmoqni smartfondan boshqaring',
        desc: 'Starlink ilovasi sozlamalarni boshqarish, tezlikni tekshirish va qo\'llab-quvvatlash xizmatiga murojaat qilishga yordam beradi.',
        download: 'iOS va Android uchun mavjud'
      },
      specs: {
        title: 'Texnik xususiyatlar',
        items: [
          { label: 'Antenna', value: 'Elektron fazali antenna massivi' },
          { label: 'Yo\'naltirish', value: 'Elektr uzatmali avtomatik' },
          { label: 'Himoya', value: 'IP54 (Chang va suv sachrashidan himoya)' },
          { label: 'Qor eritish', value: '40 mm/soat gacha' },
          { label: 'Harorat', value: '-30°C dan +50°C gacha' },
          { label: 'Wi-Fi router', value: 'Wi-Fi 6 (802.11ax), Dual Band' }
        ]
      },
      map: { active: 'Faol qamrov', asia: 'Osiyo mamlakatlari', click: "O'tish uchun bosing", soon: 'Tez kunda' },
      support: {
        title: "Ko'p so'raladigan savollar",
        items: [
          { q: "Starlink qanday o'rnatiladi?", a: "To'plamda barcha kerakli narsalar mavjud: terminal, router, kabellar va baza. Tizim o'zini bir necha daqiqada sozlaydi, faqat ochiq osmonni ta'minlash kerak." },
          { q: "Tezlik qanday bo'ladi?", a: "Odatda yuklab olish tezligi 100 dan 200 Mbit/s gacha, kechikish esa aksariyat hududlarda taxminan 20 ms ni tashkil qiladi." },
          { q: "Xizmatni vaqtincha to'xtatib turish mumkinmi?", a: "Ha, tanlangan tarifga qarab xizmatni xohlagan vaqtda to'xtatib turishingiz va qayta tiklashingiz mumkin." }
        ]
      },
      footer: { desc: "Yangi avlod sun'iy yo'ldosh internetining global provayderi.", contacts: 'Bizning aloqalarimiz', connect: 'Ulanish', rights: 'Barcha huquqlar himoyalangan.' }
    }
  },
  tg: {
    translation: { calc: { "title":"Ҳисобкунии арзиш","typeLabel":"Намуди иншоот","types":{"house":"Хонаи шахсӣ / Дача","camp":"Шаҳраки коргарӣ / Сохтмон","biz":"Иншооти тиҷоратӣ","mobile":"Мобилӣ / Автомобилӣ"},"usersLabel":"Шумораи истифодабарандагон","usersCount":"нафар","optionsLabel":"Имконоти иловагӣ","meshOption":"Модули Wi-Fi Mesh (+45 000 ₸)","installOption":"Насби касбӣ (+50 000 ₸)","notesLabel":"Хоҳишҳои махсус:","notesPlaceholder":"Масалан: минтақаи кӯҳӣ...","recommendedKit":"Маҷмӯи тавсияшаванда:","aiRecommendation":"Тавсияи ЗС:","total":"Арзиши умумӣ:","btnWhatsApp":"Дарёфти ПТ тавассути WhatsApp","recs":{"mobile":"Барои зуд ҷойгир кардан беҳтарин аст.","standard":"Маҷмӯи стандартӣ барои устуворӣ тавсия мешавад.","mesh":"Модули Mesh барои {{users}} нафар илова карда шуд.","install":"Насб дохил карда шудааст."} },
      nav: { map: 'Минтақаи фарогирӣ', countries: 'Кишварҳо', features: 'Афзалиятҳо', setup: 'Насб', specs: 'Хусусиятҳо', support: 'Дастгирӣ', contact: 'Тамос', signIn: 'Вуруд' , calc: 'Калькулятор'},
      hero: { title: 'Интернети моҳвораӣ дар тамоми Осиё', desc: 'Интернети баландсуръат бо таъхири кам. Дар тамоми минтақаи фарогирӣ дастрас аст.', searchPlaceholder: 'Кишвари худро интихоб кунед...' },
      countries: { title: 'Кишварҳои дастрас', desc: 'Starlink дар як қатор кишварҳои Осиёи Марказӣ ва Шарқӣ расман фаъолият мекунад.' },
      features: { 
        title: 'Афзалиятҳо',
        items: [
          { value: '150+', unit: 'Мбит/с', desc: 'Суръати фавқулодда баланди зеркашӣ барои ҳама гуна вазифаҳо' },
          { value: '25', unit: 'мс', desc: 'Таъхири ҳадди аққал ба шарофати мадори паст' },
          { value: '100%', unit: 'Алоқа', desc: 'Дар ҷойҳои дурдасттарин ва дастнорас кор мекунад' }
        ]
      },
      setup: {
        title: 'Насб дар чанд дақиқа',
        desc: 'Маҷмӯаи Starlink бо ҳама чизи лозимӣ барои пайвастшавӣ ба интернет меояд.',
        steps: [
          { title: 'Осмони кушодро ёбед', desc: 'Ба антенна намуди бемамониати осмон лозим аст' },
          { title: 'Ба шабака пайваст кунед', desc: 'Кабелро ба васлаки барқ пайваст кунед' },
          { title: 'Шумо дар шабака ҳастед', desc: 'Роутер ба таври худкор танзим мешавад' }
        ]
      },
      app: {
        title: 'Шабакаро аз смартфон идора кунед',
        desc: 'Барномаи Starlink ба шумо дар танзими параметрҳо, санҷиши суръат ва гирифтани кӯмак ёрӣ медиҳад.',
        download: 'Барои iOS ва Android дастрас аст'
      },
      specs: {
        title: 'Мушаххасоти техникӣ',
        items: [
          { label: 'Антенна', value: 'Массиви электронии марҳилавӣ' },
          { label: 'Самтёбӣ', value: 'Автоматӣ бо муҳаррики барқӣ' },
          { label: 'Муҳофизат', value: 'IP54 (Муҳофизат аз чанг ва об)' },
          { label: 'Обкунии барф', value: 'То 40 мм/соат' },
          { label: 'Ҳарорат', value: 'аз -30°C то +50°C' },
          { label: 'Wi-Fi роутер', value: 'Wi-Fi 6 (802.11ax), Dual Band' }
        ]
      },
      map: { active: 'Фарогирии фаъол', asia: 'Кишварҳои Осиё', click: 'Барои гузаштан пахш кунед', soon: 'Ба зудӣ' },
      support: {
        title: 'Саволҳои маъмул',
        items: [
          { q: 'Starlink чӣ гуна насб карда мешавад?', a: 'Маҷмӯа ҳама чизи лозимиро дар бар мегирад: терминал, роутер, кабелҳо ва база. Система дар якчанд дақиқа худро танзим мекунад, танҳо дидани осмони кушод лозим аст.' },
          { q: 'Суръат чӣ гуна хоҳад буд?', a: 'Одатан суръати боргирӣ аз 100 то 200 Мбит/с ва таъхир дар аксари минтақаҳо тақрибан 20 мс мебошад.' },
          { q: 'Оё мумкин аст хизматрасониро муваққатан боздошт кунем?', a: 'Бале, вобаста аз тарифи интихобшуда шумо метавонед хизматрасониро дар дилхоҳ вақт боздошт ва дубора фаъол кунед.' }
        ]
      },
      footer: { desc: 'Провайдери ҷаҳонии интернети моҳвораии насли нав.', contacts: 'Тамосҳои мо', connect: 'Пайвастшавӣ', rights: 'Ҳамаи ҳуқуқҳо маҳфузанд.' }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
