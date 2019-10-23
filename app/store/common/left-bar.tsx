import { observable, action } from 'mobx';

class Store {
  @observable public count = 0;

  @action.bound
  public increment = () => this.count += 1;

  @action.bound
  public decrement = () => this.count -= 1;
}

// const store = new Store();
export default Store;
