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
        this.model.findById(id,callback);
    }

    deleteById(id,callback){
        this.model.remove(id,callback);
    }

    update(id,update,callback){
        this.model.findByAndUupdate(id,update,callback);
    }
}

module.exports = function(model){
    return new BaseRepository(model);
}