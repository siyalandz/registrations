describe("RegNumbers", function () {
    it('should be able add registration of CA in the list of Cape Town', function () {
        let myObj = FactoryReg();
  
        var CapeTown = 'CA 123 456';
        myObj.addReg(CapeTown);

        assert.equal("CA 123 456", myObj.getList())
   
    })
    it('should be able add registration of CL in the list of Stellenbosch', function () {
        let myObj = FactoryReg();
  
        var Stellenbosch = 'CL 193 452';
        myObj.addReg(Stellenbosch);

        assert.equal('CL 193 452', myObj.getList())
   
    })
    it('should be able add registration of CY in the list of Paarl', function () {
        let myObj = FactoryReg();
  
        var Paarl = 'CY 456 528';
        myObj.addReg(Paarl);

        assert.equal('CY 456 528', myObj.getList())
   
    })

    it('Show registration numbers only for Paarl', function () {
        let myObj = FactoryReg();
        var Paarl = 'CY 456 528';
        myObj.addReg(Paarl);

        var Stellenbosch = 'CL 193 452';
        myObj.addReg(Stellenbosch);

        assert.deepEqual(['CY 456 528'], myObj.filter(Paarl))
    })

    it('Show registration numbers only for Cape Town', function () {
      
        let myObj = FactoryReg();
        var CapeTown = 'CA 123 456';
        myObj.addReg(CapeTown);
        
        
        var Paarl = 'CY 456 528';
        myObj.addReg(Paarl);

        var Stellenbosch = 'CL 193 452';
        myObj.addReg(Stellenbosch);

        assert.deepEqual(['CA 123 456'], myObj.filter(CapeTown))
    })
    it('Show registration numbers only for Stellenbosch', function () {
      
        let myObj = FactoryReg();
        var Stellenbosch = 'CL 193 452';
        myObj.addReg(Stellenbosch);

        var CapeTown = 'CA 123 456';
        myObj.addReg(CapeTown);
        
        
        var Paarl = 'CY 456 528';
        myObj.addReg(Paarl);

        
        assert.deepEqual(['CA 123 456'], myObj.filter(CapeTown))
    })

    it("Should be able to return empty string if no town selected",function() {
        // myObj = FactoryReg()
            let list = FactoryReg();
            list.addReg("");
            list.addReg("");
        
            // myObj.addReg("");
            // myObj.addReg("");
            // myObj.addReg("");
            // myObj.addReg("");
            // var CapeTown = "";
            assert.equal("", list.filter("'',''") )
    
        })
    
    // })
    //  it("should return all reg for that town from the list", () function {
    //     let myObj = FactoryReg();
    //     myObj.addReg("CA 123 451");
    //     myObj.addReg("CA 456 799")
    //     myObj.addReg("CL 432 567")
    //     myObj.addReg("CJ 145 567")
    //     myObj.addReg("CJ 821 507")
    //     myObj.addReg("CJ 451 567")
    //     myObj.addReg("CL 541 567")
    //     myObj.addReg("CL 145 681")
    //      assert.deepEqual(myObj.filter([ "CA 123 451,CA 456 799"])
    //  })


    // it("Should be able to filter all registrations of that town", function(){
    //     // myObj1 = FactoryReg()
    //     let list = myObj.getList();
    //     myObj.addReg("CA 463 455");
    //     myObj.addReg("CA 235 435");
    //     myObj.addReg("CA 123 541");
    //     myObj.addReg("CL 123 477");
    //     myObj.addReg("CL 123 479");
    //     assert.equal( myObj.getList()[' CL 123 477,CL 123 479 '])
        

    // })
    // it("Should be able to return empty string if no town selected",function() {
    //     // myObj1 = FactoryReg()
        // let list = FactoryReg();
        // list.addReg("CA 463 455");
        // list.addReg("CJ 235 435");
        // // myObj.addReg("CA 123 541");
        // myObj.addReg("CL 123 477");
        // myObj.addReg("CL 123 479");
        // myObj.addReg("CJ 139 879");
        // myObj.addReg("CL 888 500");
    //     var CapeTown = "CA";
    //     assert.equal("CA 463 455", list.filter(CapeTown) )

    // })
})