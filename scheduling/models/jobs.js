const mognoose = require('mongoose');

const jobsSchema = mongoose.Schema({
    _id: mongoose.Schema.Type.ObjectId,
    message: { type: String, required: true },
    time: { type: String, required: true },
    channel: { type: String, required: true },
    status: { type: String, default: 'waiting' },
});