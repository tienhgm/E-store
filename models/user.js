const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },

    passwordHash: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    address: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
})

// userSchema.virtual('id').get(function() {
//     return this._id.toHexString();
// })
// userSchema.set('toJSON', {
//     virtuals: true,
// })
userSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    const { _id: id, ...result } = object;
    return { ...result, id };
});
exports.User = mongoose.model('User', userSchema);
