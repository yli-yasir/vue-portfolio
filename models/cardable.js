//cardable interface other models will need to define these fields so that
//they can be viewed as cards

module.exports = {
    name: {type:String,required: true},
    thumbnailUrl: {type:String,required: true},
    shortDescription: String
};