'use strict';

describe('lembreteApp.login module', function() {
    beforeEach(module('lembreteApp.login'));

    describe('loginView controller', function(){
        it('should ...', inject(function($controller){
            let loginViewCtrl = $controller('LoginCtrl');
            expect(loginViewCtrl).toBeDefined();
        }));
    });
});