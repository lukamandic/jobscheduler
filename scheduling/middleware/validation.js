const Joi = require('joi');

const schema = Joi.object().keys({
    jobTime: Joi.string(),
    jobChannel: Joi.string(),
    jobMessage: Joi.string()
});

const result = (error, req, res, next) => {
    try {
        schema.validate({
            jobTime: req.body.jobTime,
            jobChannel: req.body.jobChannel,
            jobMessage: req.body.jobMessage
        });
    } catch (error) {
        return res.status(403).json({
            message: 'Forbiden!'
        });
    }
}

module.exports = schema, result;