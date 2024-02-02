const HelloWorld = artifacts.require('HelloWorld');


contract("HelloWorld", (accounts) => {

    it("should return my name", async () => {
        const instance = await HelloWorld.deployed();
        const value = await instance.getMyName.call();

        assert.equal(value,"Tristan");
    })

    it("should change my name", async () => {
        const instance = await HelloWorld.deployed();
        await instance.changeMyName("Bob");
        const value = await instance.getMyName.call();
    
        assert.equal(value,"Bob");
    })
})


