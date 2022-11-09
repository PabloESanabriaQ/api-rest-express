import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const storySchema = new Schema({
    id: {
        type: Number,
      required: true,
      min: 1,
      unique: true
    },
    name: {
        type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    /*
    epic: {
      type: Schema.Types.ObjectId,
      ref: epic,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: user,
      required: false
    },
    assignedTo: [{
      type: Schema.Types.ObjectId,
      ref: user,
      required: false
    }],*/
    points: {
      type: Number,
      required: false,
      default: 0,
      min: 0,
      max: 5,
    },
    created: {
      type: Date,
      default: Date.now,
      required: false
    },
    due: {
      type: Date,
      required: false
    },
    started: {
      type: Date,
      required: false
    },
    finished: {
      type: Date,
      required: false
    },
    status: {
      type: String,
      enum: ['todo', 'running', 'done'],
      required: false,
      default: 'todo'
    },
    icon: {
      type: String,
      required: false
    }
});

export default model("Story", storySchema);