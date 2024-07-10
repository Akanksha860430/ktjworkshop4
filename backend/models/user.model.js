const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  savedLocations: [
    {
      locationName: {
        type: String,
        required: true,
        trim: true
      },
      temperature: {
        type: Number,
        required: true
      },
      weather: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
