
var expect  = require('chai').expect;
var requester = require('./req');

var mochasync =(fn)=>{
    return done => {
        fn.call().then(done, err => {
          done(err);
        });
   }
}

describe('check the inserted data in list', function () {
 it('should return newly added name',  mochasync(async()=> {
        let content={"name":"girish"}
        let data = await requester.PostRequest(content);
        expect("girish").to.equal(data.data);
    })
);
it('demo test only should always pass',  mochasync(async()=> {
        
    expect("girish").to.equal("girish");
})
);
it('demo test only should always failed',  mochasync(async()=> {
    
    expect("girish").to.equal("girih");
})
);
});

