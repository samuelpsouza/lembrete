'use strict';

describe('lembreteApp.sticky-note module', function() {
    beforeEach(module('lembreteApp.stickyNoteView'));

    describe('stickyView controller', function (){
        it('should ...', function ($controller) {
            let stickyNoteCtrl = $controller('StickyNoteCtrl');
            expect(stickyNoteCtrl).toBeDefined();
        });
    });
});