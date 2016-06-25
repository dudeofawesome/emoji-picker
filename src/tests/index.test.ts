import {expect} from 'chai';
import * as Promise from 'bluebird';

import {EmojiPicker, EmojiOption} from '../';

(() => {
    describe('EmojiPicker', () => {
        it('should get an ascii emoji with a string', () => {
            let emoji = EmojiPicker('happy');
            expect(emoji).to.exist.and.to.not.equal('');
        });
        it('should get a unicode emoji with a string', () => {
            let emoji = EmojiPicker('happy', true);
            expect(emoji).to.exist.and.to.not.equal('');
        });
        it('should get an ascii emoji with an enum', () => {
            let emoji = EmojiPicker(EmojiOption.HAPPY);
            expect(emoji).to.exist.and.to.not.equal('');
        });
        it('should get a unicode emoji with an enum', () => {
            let emoji = EmojiPicker(EmojiOption.HAPPY, true);
            expect(emoji).to.exist.and.to.not.equal('');
        });
        it('should return nothing when no emoji can be found', () => {
            let emoji = EmojiPicker('some emotion that is not represented');
            expect(emoji).to.equal('');
        });
    });
})();
