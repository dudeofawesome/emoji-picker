function random (max: number, min?: number): number {
    if (!min) {
        min = 0;
    }
    return Math.floor((Math.random() * (max - min)) + min);
}

export enum EmojiOption {
    HAPPY,
    GOOD,
    MUSIC,
    HEART,
    LOVE,
    SURPRISE,
    SORRY,
    SAD
};

export function EmojiPicker (expression: string | EmojiOption, unicode: boolean = false): string {
    let choices: Array<string> = [];
    let compare: string = (typeof expression === 'string') ? expression.toUpperCase() : EmojiOption[expression];
    switch (EmojiOption[compare]) {
        case EmojiOption.HAPPY:
            choices = (!unicode) ? [':smile:', ':smiley:', ':grinning:', ':simple_smile:'] : ['😀', '😃', '😄', '🙂', '🙃'];
            return choices[random(choices.length)];
        case EmojiOption.GOOD:
            choices = (!unicode) ? [':thumbsup:', ':ok_hand:'] : ['👍', '👌'];
            return choices[random(choices.length)];
        case EmojiOption.MUSIC:
            choices = (!unicode) ? [':musical_note:'] : ['🎵', '🎶'];
            return choices[random(choices.length)];
        case EmojiOption.HEART:
            choices = (!unicode) ? [':heart:', ':heartbeat:'] : ['♥️', '💓'];
            return choices[random(choices.length)];
        case EmojiOption.LOVE:
            choices = (!unicode) ? [':heart:', ':heartbeat:', ':hearpulse:', ':heart_eyes:', ':heart_eyes_cat:'] : ['♥️', '💓', '💗', '😍', '😻', '💝'];
            return choices[random(choices.length)];
        case EmojiOption.SURPRISE:
            choices = (!unicode) ? [':astonished:', ':open_mouth:', ':frowning:', ':anguished:'] : ['😲', '😮', '😦', '😧'];
            return choices[random(choices.length)];
        case EmojiOption.SORRY: case EmojiOption.SAD:
            choices = (!unicode) ? [':disappointed:', ':cry:', ':sob:'] : ['😞', '😢', '😭'];
            return choices[random(choices.length)];
        default:
            return '';
    }
};
