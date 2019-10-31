import { observable, action } from 'mobx';

import AppTool from '@tool/app-tool';

interface IConfig {
  id: number,
  title: string,
  uri: string,
  duration: string,
}

class Store {
  @observable public thumbnails: IConfig[] = [];

  @action.bound
  public getData = (): void => {
    this.thumbnails = [
      {
        id: 1,
        title: '01.mp4',
        uri: `${AppTool.serverImage}11.jpg`,
        duration: '05:52',
      },
      {
        id: 2,
        title: '02.mp4',
        uri: `${AppTool.serverImage}22.jpg`,
        duration: '01:25',
      },
      {
        id: 3,
        title: '03.mp4',
        uri: `${AppTool.serverImage}33.jpg`,
        duration: '03:07',
      },
      {
        id: 4,
        title: '04.mp4',
        uri: `${AppTool.serverImage}44.jpg`,
        duration: '02:06',
      },
      {
        id: 5,
        title: '05.mp4',
        uri: `${AppTool.serverImage}55.jpg`,
        duration: '03:07',
      },
      {
        id: 6,
        title: '06.mp4',
        uri: `${AppTool.serverImage}66.jpg`,
        duration: '03:24',
      },
      {
        id: 7,
        title: '07.mp4',
        uri: `${AppTool.serverImage}77.jpg`,
        duration: '01:20',
      },
      {
        id: 8,
        title: '08.mp4',
        uri: `${AppTool.serverImage}88.jpg`,
        duration: '01:31',
      },
    ];
  }
}

const store = new Store();
export default store;
