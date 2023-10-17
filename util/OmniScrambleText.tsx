type QueueItem = {
    to: string;
    start: number;
    end: number;
    char?: string;
    revealed: boolean;
};

class OmniScrambleText {
    private el: HTMLElement;
    private chars: string = '01';
    private queue: QueueItem[] = [];
    private frame: number = 0;
    private frameIncrement: number;
    private defaultScrambleSpeed: number = 0.5; // Adjust to control the speed
    private frameRequest?: number;
    private revealDelay: number = 40;
    private resolve?: (value?: void | PromiseLike<void>) => void;

    constructor(el: HTMLElement, scrambleSpeed?: number, revealDelay?: number) {
        this.el = el;
        this.frameIncrement = scrambleSpeed ? scrambleSpeed : this.defaultScrambleSpeed;
        this.revealDelay = revealDelay ? revealDelay : this.revealDelay;
        this.update = this.update.bind(this);
    }

    setText(newText: string): Promise<void> {
        const promise = new Promise<void>((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < newText.length; i++) {
            const to = newText[i];
            const start = i * 10;
            const end = start + this.revealDelay;
            this.queue.push({ to, start, end, revealed: false });
        }
        cancelAnimationFrame(this.frameRequest!);
        this.frame = 0;
        this.update();
        return promise;
    }

    public cancelCurrentAnimation(): void {
        if (this.frameRequest) {
            cancelAnimationFrame(this.frameRequest);
            this.frameRequest = undefined;
        }
    }

    private update(): void {
        let output = '';
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { to, start, end, char, revealed } = this.queue[i];
            if (this.frame >= end || (i === n - 1 && this.frame + 1 >= end)) {
                this.queue[i].revealed = true;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.5) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += this.randomChar();
            }
        }
        this.el.innerText = output;
        if (this.queue.every(item => item.revealed)) {
            this.resolve!();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame += this.frameIncrement;
        }
    }

    private randomChar(): string {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

export default OmniScrambleText;
