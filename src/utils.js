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

export const contentInView = (element) => {
    const scroll = window.scrollY || window.pageYOffset;
    const elementPositionProps = element.getBoundingClientRect();
    const elementTopPosition = elementPositionProps.top + scroll;

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    };

    const elementPosition = {
        top: elementTopPosition,
        bottom: elementTopPosition + elementPositionProps.height,
    };
    return (
        (elementPosition.bottom >= viewport.top &&
            elementPosition.bottom <= viewport.bottom) ||
        (elementPosition.top <= viewport.bottom &&
            elementPosition.top >= viewport.top)
    );
};
