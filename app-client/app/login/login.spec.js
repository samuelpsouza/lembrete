'use strict';

describe('lembreteApp.login module', function() {
    beforeEach(module('lembreteApp.loginView'));

    describe('loginView controller', function(){
        it('should ...', inject(function($controller){
            let loginViewCtrl = $controller('LoginViewCtrl');
            expect(loginViewCtrl).toBeDefined();
        }));
    });
});