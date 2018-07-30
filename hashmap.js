'use strict';
////what do hashmaps need?
class HashMap {
  constructor(initialCapacity = 8){
    this.length = 0;
    this. _slots = [];
    this._capacity = initialCapacity;
    this.deleted = 0;
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

  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined) {
      throw new Error('key error');
    }
    return this._slots[index].value;
  }

  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key);
    this._slots[index] = {
      key, value, deleted: false
    };
    this.length++;
  }

  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error('key error');
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }

  forEach(fn) {
    this._slots.forEach(fn)
  }

    _findSlot(key) {
      const hash = HashMap._hashString(key);
      const start = hash % this._capacity;

      for (let i = start; i < start + this._capacity; i++) {
        const index = i % this._capacity;
        const slot = this._slots[index];
        if (slot === undefined || (slot.key === key && !slot.deleted)) {
          return index;
        }
      }
    }

    _resize(size) {
      const oldSlots = this._slots;
      this._capacity = size;
      this.length = 0;
      this._deleted = 0;
      this._slots = [];

      for (const slot of oldSlots) {
        if (slot !== undefined && !slot.deleted) {
          this.set(slot.key, slot.value);
        }
      }
    }

    // function getAnagrams(string) {

    //   for (let i = 0; i < string.length; i++) {
    //     if (string[i] === reverseString(string[i])) {
    //       return true;
    //     }
    //     let currentLetter = string[i].substring(i, i + 1);
    //     let previousLetters = string[i].substring(0, i);
    //     let afterLetters = string[i].substring(i + 1);
    //     getAnagrams(previousLetters + afterLetters);
    //   }

    //   return false;
    // }

    // function reverseString(string) {
    //   if (string === '') {
    //     return '';
    //   }

    //   else return reverseString(string.substr(1)) + string.charAt(0)
    // };

    // console.log(getAnagrams(['asdfasdf', 'laskdjfasldkfjafd', 'afasdf', 'alsdfja', 'lasjdfaklsdf', 'akjsdflasdf' ]))

    // console.log(reverseString('hello'));



//     permutation(value){
//       let pali = '';
//       let combValue = '';
//       /////this loop iterates throgh strings
//       for(i = 0; i < value.length; i++ ){
// ////iterate combinations of the string
//         while(combValue[i] !== value.length[i] )
//               comb
//       }
//
//
//
//
//         /////if / else to compare values
//
//
//         /////if one of the string combinations is a palidrone return true
//

    //   }
    // }




}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;
