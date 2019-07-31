describe("RegNumbers", function(){
let myObj= regFactory();
it('should be able add registration of CA in the list of CApe Town', function(){
   myObj.addReg [ 'CA', 'CL', 'CJ' ]


    assert.equal[ 'CA', 'CL', 'CJ' ], myObj.getList()
})
it('should be able add registration of CL in the list of Stellenbosch', function(){
    myObj.addReg('CL 123');
 
     assert.equal[ 'CL 123', 'CL 124' ], myObj.getList()
 })
 it('should be able add registration of CJ in the list of Paarl', function(){
    myObj.addReg('CJ 123');
 
     assert.equal[ 'CJ 123', 'CJ 124' ], myObj.getList()
 })
 it('should be able to filter the registration of CapeTown', function(){
    myObj.addReg('CJ 123, CL 423, cJ 581, CA 111, CA139');
 
     assert.equal[ 'CA 111, CA 139' ], myObj.getList()
 })
})

    