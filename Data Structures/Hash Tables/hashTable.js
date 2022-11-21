class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size).fill([]);
	}

	hash(key) {
		let total = 0;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total *= 31 + (value % this.keyMap.length);
		}

		return total;
	}
	set(key, value) {
		this.keyMap[this.hash(key)].push([key, value]);
	}

	get(key) {
		let index = this.hash(key);
		let keyValuePair = this.keyMap[index].find((arr) => arr[0] === key);
		return this.keyMap[index] && keyValuePair ? keyValuePair[1] : null;
	}
}

let ht = new HashTable(17);

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("plum", "#DDA0DD");

console.log(ht.get("maroon")); // #800000
console.log(ht.get("yellow")); // #FFFF00
console.log(ht.get("olive")); // #808000
console.log(ht.get("salmon")); // #FA8072
console.log(ht.get("plum")); // #DDA0DD
console.log(ht.get("plu")); // null
console.log(ht.get("pl")); // null
console.log(ht.get("p")); // null
