const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },    
}, { strict: false });


// This runs before document is aved to db.
// Ensures pw is hashed before saving
// 'next' function is callback to signal completion of middleware
// this.isModified check if pw field hsa been modified, ensuring pw is only hashed when it's new or updated
// if so, we use .hash() to hash pw with salt rounds value of 10
// next() calls 'next' func to proveed with saving document
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


// mongoose.Scheme method is designed to define structure of documents and specifiy field options
// Methods and middleware need to be defined separately cuz they are behaviors/hooks rather than structural properties
UserSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);