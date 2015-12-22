modules.define('spec',
    ['form-field', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, BEMDOM, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_type_hidden', function() {

    var formField;

    beforeEach(function() {
        formField = BEMDOM.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'hidden' },
            name : 'hidden',
            val :  'value'
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        BEMDOM.destruct(formField.domElem);
    });

    it('should return value on getVal', function() {
        formField.getVal().should.equal('value');
    });

    it('should allow to change value', function() {
        formField.setVal('new');
        formField.getVal().should.equal('new');
    });
});

provide();

});
