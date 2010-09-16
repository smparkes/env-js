$debug("Defining HTMLTextAreaElement");
/*
* HTMLTextAreaElement - DOM Level 2
*/
var HTMLTextAreaElement = function(ownerDocument) {
    this.HTMLInputAreaCommon = HTMLInputAreaCommon;
    this.HTMLInputAreaCommon(ownerDocument);
};
HTMLTextAreaElement.prototype = new HTMLInputAreaCommon;
__extend__(HTMLTextAreaElement.prototype, {
    get cols(){
        return this.getAttribute('cols');
    },
    set cols(value){
        this.setAttribute('cols', value);
    },
    get rows(){
        return this.getAttribute('rows');
    },
    get value(){
        return this.innerText;
    },
    set value(value){
        this.innerText=value;
    },
    set rows(value){
        this.setAttribute('rows', value);
    }
});

// $w.HTMLTextAreaElement = HTMLTextAreaElement;
