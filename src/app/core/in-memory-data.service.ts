import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const news = [
      {id: 11, heading: 'title_11', body: 'text_11', src: 'img_1.jpg' },
      {id: 12, heading: 'title_12', body: 'text_12', src: 'img_2.jpg' },
      {id: 13, heading: 'title_13', body: 'text_13', src: 'img_3.jpg' },
      {id: 14, heading: 'title_14', body: 'text_14', src: 'img_4.jpg' },
      {id: 15, heading: 'title_15', body: 'text_15', src: 'img_5.jpg' },
      {id: 16, heading: 'title_16', body: 'text_16', src: 'img_1.jpg' },
      {id: 17, heading: 'title_17', body: 'text_17', src: 'img_2.jpg' },
      {id: 18, heading: 'title_18', body: 'text_18', src: 'img_3.jpg' },
      {id: 19, heading: 'title_19', body: 'text_19', src: 'img_4.jpg' },
      {id: 20, heading: 'title_20', body: 'text_20', src: 'img_5.jpg' },
      {id: 21, heading: 'title_21', body: 'text_21', src: 'img_1.jpg' },
      {id: 22, heading: 'title_22', body: 'text_22', src: 'img_2.jpg' },
      {id: 23, heading: 'title_23', body: 'text_23', src: 'img_3.jpg' },
      {id: 24, heading: 'title_24', body: 'text_24', src: 'img_4.jpg' },
      {id: 25, heading: 'title_25', body: 'text_25', src: 'img_5.jpg' },
      {id: 26, heading: 'title_26', body: 'text_26', src: 'img_1.jpg' },
      {id: 27, heading: 'title_27', body: 'text_27', src: 'img_2.jpg' },
      {id: 28, heading: 'title_28', body: 'text_28', src: 'img_3.jpg' },
      {id: 29, heading: 'title_29', body: 'text_29', src: 'img_4.jpg' },
      {id: 30, heading: 'title_30', body: 'text_30', src: 'img_5.jpg' },
      {id: 31, heading: 'title_31', body: 'text_31', src: 'img_1.jpg' },
      {id: 32, heading: 'title_32', body: 'text_32', src: 'img_2.jpg' },
      {id: 33, heading: 'title_33', body: 'text_33', src: 'img_3.jpg' },
      {
        id: 34,
        heading: 'Никола Тесла – самый загадочный ученый в мире',
        body: 'Достижения Н. Теслы остаются научной загадкой для современных ученых. Этот человек смог достигнуть таких познаний, до которых нашим ученым еще расти и расти. К сожалению, большая часть его изобретений до наших дней не сохранилась, так как он предпочел лично уничтожить свои наработки, считая, что до таких технологий мы пока не доросли.',
        src: 'img_2.jpg' },
      {
        id: 35,
        heading: 'Самые известные мифические города',
        body: 'В многочисленных древних трактатах Тибета и Азии упоминается страна под названием Шамбала, которая якобы существует и ныне где-то в параллельной вселенной. Согласно некоторым теориям, именно там родился Калка. Шамбалу обосновал царь Сучандры, но по другим приданиям она являлась частью Азии. Невидимым для человеческого взора данное царство стало после вторжения мусульман на территории С.Азии, что произошло в четвертом веке. Считается, что только самые добрые, открытые, «чистые» душевно люди смогут найти туда дорогу.',
        src: 'img_1.jpg' },
      {
        id: 36,
        heading: 'Астронавты – люди суеверные',
        body: 'Астронавтов принято считать самыми суеверными людьми. Дело в том, что полеты в космос очень опасны. Чтобы защитить себя эти люди готовы пойти на все. Нередко перед полетом они совершают своеобразные ритуалы. Некоторые из них выглядят нелепо и даже смешно, но астронавты продолжают верить в то, что это убережет их от беды. К примеру, в космос астронавты всегда берут с собой полынь – выносливое растение, которое на протяжении длительного времени сохраняет свой запах, напоминая членам экипажа о родной планете. На стартовую площадку астронавтов всегда провожают под музыкальное произведение «Земля в иллюминаторе».',
        src: 'img_1.jpg' }
    ];
    return {news};
  }
}
