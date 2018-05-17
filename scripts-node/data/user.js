'use strict';

import mongoose from 'mongoose';

export class User extends mongoose.Schema {
  constructor() {
    super({
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      email_id: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, required: true },
      created_date: { type: Date, default: Date.now },
      updated_date: { type: Date, default: Date.now }
    });
  }
}
