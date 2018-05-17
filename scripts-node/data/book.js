"use strict";

import mongoose from "mongoose";

export class Book extends mongoose.Schema {
  constructor() {
    super({
      author: { type: String, required: true },
      isbn: { type: String, required: true },
      book_title: { type: String, required: true },
      genre: { type: String },
      book_image_url: { type: String, trim: true },
      book_image_name: { type: String },
      is_cover_available: { type: Boolean, default: true },
      created_by: { type: String, required: true },
      created_date: { type: Date, default: Date.now },
      updated_by: { type: String, required: true },
      updated_date: { type: Date, default: Date.now }
    });
  }
}
