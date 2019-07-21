//cardable interface other models will need to define these fields so that
//they can be viewed as cards

module.exports = {
    _id: String,
    name: {type:String,required: true},
    thumbnailUrl: String,
    description: String,
    originDate: Date
};