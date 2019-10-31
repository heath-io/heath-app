import { observable, action } from 'mobx';

import AppTool from '@tool/app-tool';

interface IConfig {
  id: number,
  title: string,
  uri: string,
}

class Store {
  @observable public images: IConfig[] = [];

  @action.bound
  public getData = (): void => {
    const list = [
      {
        id: 11,
        title: '11.jpg',
        uri: `${AppTool.serverImage}11.jpg`,
      },
      {
        id: 22,
        title: '22.jpg',
        uri: `${AppTool.serverImage}22.jpg`,
      },
      {
        id: 33,
        title: '33.jpg',
        uri: `${AppTool.serverImage}33.jpg`,
      },
      {
        id: 44,
        title: '44.jpg',
        uri: `${AppTool.serverImage}44.jpg`,
      },
      {
        id: 55,
        title: '55.jpg',
        uri: `${AppTool.serverImage}55.jpg`,
      },
      {
        id: 66,
        title: '66.jpg',
        uri: `${AppTool.serverImage}66.jpg`,
      },
      {
        id: 77,
        title: '77.jpg',
        uri: `${AppTool.serverImage}77.jpg`,
      },
      {
        id: 88,
        title: '88.jpg',
        uri: `${AppTool.serverImage}88.jpg`,
      },
      {
        id: 99,
        title: '99.jpg',
        uri: `${AppTool.serverImage}99.jpg`,
      },
    ];
    this.images = list.concat(list).concat(list).concat(list).concat(list);
  }
}

const store = new Store();
export default store;
