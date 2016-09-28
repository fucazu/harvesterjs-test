let harvester = require('harvesterjs')
let Types = require('joi')

harvester({
    adapter: 'mongodb',
    connectionString: 'mongodb://localhost:27017/harvester',
    oplogConnectionString: 'mongodb://localhost:27017/harvesteroplog'
}).resource('batata', {
    name: Types.string()
})
.listen(1337);

/*
O POST tem que ser feito passando o objeto no body.
EXEMPLO...

{
  "batata": [
    { "name":"frita" }
  ]
}

 */