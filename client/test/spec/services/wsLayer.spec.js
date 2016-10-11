describe("wsLayer",function(){
var values,factory;

beforeEach(function(){
    module('shared');
    inject(function($injector){
        factory=$injector.get('wslayer');
    });
});

describe("wsLayerGetTest",function(){

    describe("formURLTest",function(){
        it("should return the correct Url",function (){
            var url=factory.formUrl("/new/qweqw",[{key:'abh',value:'new'}],[{key:'abh',value:'new'}]);
            console.log(url);
            expect(url).toEqual("/new/qweqw;abh=new?abh=new");
        });

    });
});

});