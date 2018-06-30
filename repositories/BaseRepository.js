class BaseRepository{
    constructor(model){
        if(!model) throw new Error("model must be provided");
        this.model = model;
    }

    get(options,callback){
        this.model.find(options,'-password',callback);
    }

    add(data,callback){
        this.model.create(data,callback);
      
    }

    getById(id,callback){
        this.model.findById(id,'-password',callback);
    }

    deleteById(id,callback){
        this.model.remove(id,callback);
    }

    updateUser(id,data,callback){
        this.model.findByIdAndUpdate(id,data,callback);
    }
}

module.exports =(model)=>{
    return new BaseRepository(model);
}