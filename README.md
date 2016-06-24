# Emoji Picker
Add more emoji to your life

## Example

```Javascript
import {EmojiPicker} from 'emoji-picker';

console.log(`Emojis are so fun! ${EmojiPicker('happy')}`);
```

## Usage

### Methods

* `EmojiPicker(emotion: string, unicode: boolean = false): string`
    * `emotion: string`:
    * `unicode: boolean`:
    Returns an emoji to represent the specified emotion.
    If it can't find an emoji to represent the specified emotion, then it will return an empty string
