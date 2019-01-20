export class LocStorage {
    static storeJson(key, jsonData) {
        localStorage.setItem(key, JSON.stringify(jsonData));
    }

  static  getJson(key) {
        let data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }
}