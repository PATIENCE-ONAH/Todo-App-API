const mongoose = require('mongoose');

const status = {
    Pending: 'Pending',
    Progress: 'In-progress',
    Completed: 'Completed'
}

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: Object.values(status),
    default: status.Pending,
  },
  dueDate: {
    type: Date,
  },
},
{ timestamps: true }
);

// Middleware to update the `updatedAt` field on each update
TodoSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
