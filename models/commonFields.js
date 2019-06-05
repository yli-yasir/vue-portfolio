//cardable interface other models will need to define these fields so that
//they can be viewed as cards

module.exports = {
    _id: String,
    name: {type:String,required: true},
    thumbnailUrl: {type:String,required: true},
    description: String
};