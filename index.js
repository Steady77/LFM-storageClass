class Storage {
  constructor(key, storageType, value = '') {
    this.key = key;
    this.storageType = storageType;
    this.set(value);
  }

  getStorageType(type) {
    switch (type) {
      case 'localStorage':
        return localStorage;
      case 'sessionStorage':
        return sessionStorage;
      default:
        alert('Invalid storage! localStorage was set as default');
        this.storageType = 'localStorage';
        return localStorage;
    }
  }

  get() {
    return this.getStorageType(this.storageType).getItem(this.key);
  }

  set(value) {
    this.getStorageType(this.storageType).setItem(this.key, value);
  }

  clear() {
    this.getStorageType(this.storageType).setItem(this.key, '');
  }

  isEmpty() {
    return !this.get();
  }
}

const names = new Storage('names', 'localStorage');
