'use strict';
////what do hashmaps need?
class Hashmap = {
  constructor(){
    this.length = 0;
    this. _slots = [];
    this._capacity = initialCapacity;
  }
////<< this is a bitwise operator
  static _hashString(string) {
        let hash = 5381;
        for (let i=0; i<string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            /////will not exceed 32 bits with &
            hash = hash & hash;
        }
        return hash >>> 0;
    }


}

HashMap.MAX_LOAD_RATIO = 0.9;
