class StringBuilder {
    #value;
    constructor(initialValue) {
        this.#value = initialValue || '';
    }
    getValue() {
        return this.#value;
    }
    padStart(padChar) {
        this.#value = padChar + this.#value;
        return this;
    }
    padEnd(padChar) {
        this.#value = this.#value + padChar;
        return this;
    }
    padBoth(padChar) {
        this.#value = padChar + this.#value + padChar;
        return this;
    }
    toString() {
        return this.#value;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


