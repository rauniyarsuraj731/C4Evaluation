const mongoose = require ("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb+srv://rauniyarsuraj:<evaluation>@cluster0.yxh10.mongodb.net/C4Evaluation?retryWrites=true&w=majority");
};

module.export = connect;