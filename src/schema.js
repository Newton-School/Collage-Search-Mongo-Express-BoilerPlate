const { Schema, mongo } = require('mongoose');

const collegeSchema = new Schema({
    name: Schema.Types.String,
    state: Schema.Types.String,
    min_pac: Schema.Types.Number,
    max_fees: Schema.Types.Number,
    city: Schema.Types.String,
    exam: Schema.Types.Array,
    course: Schema.Types.String
})

exports.collegeSchema = collegeSchema;
