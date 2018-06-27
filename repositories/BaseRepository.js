class BaseRepository{
    constructor(model){
        if(!model) throw new Error("model must be provided");
        this.model = model;
    }

    get(option,callback){
        this.model.find(option,callback);
    }

    add(option,data){
        this.model.create(option,data);
    }

    getById(id,callback){
        this.model.findById(id,callback);
    }

    deleteById(option,callback){
        this.model.remove(option,callback);
    }

    update(id,option,callback){
        this.model.update(id,option,callback);
    }
}

module.exports = function(model){
    return new BaseRepository(model);
}