'use strict';

import mongoose from 'mongoose';

export class SessionID extends mongoose.Schema {

	constructor() {
		super({
			session_id: String
		});
	}
}
