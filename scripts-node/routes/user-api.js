"use strict";

import { Controller } from "../util/controller";
import { modelManager } from "../data/model-manager";
import { USER_MODEL, SESSION_MODEL } from "../data/model-constants";

const uuid = require("node-uuid");

export class UserApi extends Controller {
  namespace() {
    return "/user";
  }

  routing() {
    return {
      "/sign-up": "signUp",
      "/sign-in": "signIn"
    };
  }

  get UserModel() {
    return modelManager.getModel(USER_MODEL);
  }

  get SessionModel() {
    return modelManager.getModel(SESSION_MODEL);
  }

  signUp(req, res) {
    let args = req.body;
    return new this.UserModel(args).save().then(data => {
      return {
        message: "user created successfully"
      };
    });
  }

  signIn(req, res) {
    let args = req.body;
    return this.UserModel.findOne(args)
      .exec()
      .then(user => {
        return this.saveSession(user._id).then(data => {
          return {
            message: "user login successfully",
            result: {
              user_id: user._id,
              session_id: data.sid
            }
          };
        });
      }).catch(e => {
        return {
          status:'ERROR',
          message: "user not found!"
        }
      });
  }

  saveSession(userdata) {
    var suuid = uuid.v4();
    return this.SessionModel.findOne({ user_uid: userdata })
      .exec()
      .then(data => {
        if (data !== null) {
          return this.SessionModel.findOneAndUpdate(
            { user_uid: data.user_uid },
            { $set: { session_id: suuid } },
            { new: true }
          )
            .exec()
            .then(data => {
              return {
                sid: data.session_id
              };
            });
        } else {
          return new this.SessionModel({
            user_uid: userdata,
            session_id: suuid
          })
            .save()
            .then(data => {
              return {
                sid: data.session_id
              };
            });
        }
      });
  }
}
