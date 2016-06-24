import {expect} from 'chai';
import * as Promise from 'bluebird';

import {EmojiPicker} from '../';

(() => {
    describe('EmojiPicker', () => {
        it('should get an emoji', () => {
            let emoji = EmojiPicker('happy');
            expect(emoji).to.exist.and.to.not.equal('');
        });
        it('should return nothing when no emoji can be found', () => {
            let emoji = EmojiPicker('some emotion that is not represented');
            expect(emoji).to.not.exist;
        });
    });
})();
