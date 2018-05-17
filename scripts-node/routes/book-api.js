"use strict";

import { Controller } from "../util/controller";
import { modelManager } from "../data/model-manager";
import { BOOK_MODEL, USER_MODEL } from "../data/model-constants";
import multer from "multer";

export class BookApi extends Controller {
  constructor(app) {
    super(app);
    var storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "uploads/");
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    });
    var upload = multer({ storage: storage });
    app.post(this.namespace() + "/add-book", upload.any(), (req, res) => {
      this.callRoute("addBook", req, res);
    });
  }
  namespace() {
    return "/book";
  }

  routing() {
    return {
      "/edit-book": "editBook",
      "/list-book": "listBook"
    };
  }

  get BookModel() {
    return modelManager.getModel(BOOK_MODEL);
  }

  get UserModel() {
    return modelManager.getModel(USER_MODEL);
  }

  addBook(req, res) {
    let args = req.body;
    args.book_image_url = req.files[0].path;
    args.book_image_name = req.files[0].originalname;
    return new this.BookModel(args).save().then(data => {
      return {
        result: data,
        message: "book added successfully"
      };
    });
  }

  listBook(req, res) {
    let args = req.body || {};
    return this.BookModel.find().then(data => {
      return {
        result: data,
        message: "finded all available books successfully"
      };
    });
  }

  editBook(req, res) {
    return this.UserModel.findOne({ _id: req.body.user_id, role: "editor" })
      .exec()
      .then(data => {
        if (data !== null) {
          return this.BookModel.findOneAndUpdate(
            { _id: req.body.book_id },
            { $set: updateFields },
            { new: true }
          )
            .exec()
            .then(data => {
              return {
                result: data,
                message: "Book information uploaded successfully"
              };
            });
        } else {
          return {
            message: "Book information update faild!"
          };
        }
      });
  }
}
