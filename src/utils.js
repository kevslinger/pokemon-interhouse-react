export class Delay {
    constructor(time) {
        this.time = time;
        this.timeout = null;
        this.close = null;
    }

    getPromise() {
        return new Promise((resolve, reject) => {
            this.close = reject;
            this.timeout = setTimeout(() => {
                resolve();
            }, this.time);
        });
    }
    cancel() {
        this.timeout && clearTimeout(this.timeout);
        this.close && this.close('unmounted');
        return { isCanceled: true };
    }
}

export const arrEquals = (a, b) =>
    a.length === b.length &&
    a.every((v, i) => v === b[i]);

export const capitalize = (word) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();

