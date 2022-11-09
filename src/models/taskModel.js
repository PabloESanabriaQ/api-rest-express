import { Schema as _Schema, model } from 'mongoose';
import storyModel from './storyModel';

const Schema = _Schema;

const taskSchema = new Schema({
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
      story: {
        type: Schema.Types.ObjectId,
        ref: storyModel,
        required: true
      },
      created: {
        type: Date,
        default: Date.now,
        required: false
      },
      dueDate: {
        type: Date,
        required: false
      },
      done: {
        type: Boolean,
        required: false,
        default: false
      }
});

export default model("Task", taskSchema);