class Storage {
  store: Store;
  private _key: string;
  constructor() {
    this._key = 'cache-store';
    // @ts-ignore
    this.store = JSON.parse(globalThis.localStorage.getItem(this._key) || null) || Object.create(null);
  }
  set(key: keyof Store, value: any): void {
    Reflect.set(this.store, key, value);
    this.cacheStore();
  }
  get(key: keyof Store) {
    return Reflect.get(this.store, key);
  }
  remove(key: keyof Store): void {
    Reflect.deleteProperty(this.store, key);
    this.cacheStore();
  }
  cacheStore() {
    requestIdleCallback(
      () => {
        globalThis.localStorage.setItem(this._key, JSON.stringify(this.store));
      },
      { timeout: 1e3 }
    );
  }
}

export default new Storage();

// ========================================
// Type Definition
// ========================================
type Store = {
  loginType: undefined | 'stoic' | 'plug' | 'II';
  userInfo: LoginUserInfo;
};

interface LoginUserInfo {
  [key: string]: any;
  loginType: string;
  principalId: string;
  accountId: string;
  isLogin: boolean;
}
