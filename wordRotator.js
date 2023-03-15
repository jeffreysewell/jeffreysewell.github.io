export class WordRotator {
    constructor(element, words, duration) {
        this.element = element;
        this.words = words;
        this.duration = duration;
        this.index = 0;

        this.changeWord();
        setInterval(() => this.changeWord(), this.duration);
    }

    changeWord() {
        this.element.textContent = this.words[this.index];
        this.index = (this.index + 1) % this.words.length;
    }
}
