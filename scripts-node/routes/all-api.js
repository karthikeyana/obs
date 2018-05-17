'use strict';

import { UserApi } from './user-api';
import { BookApi } from './book-api';

export default function(app) {
	app.controllers = {
		user: new UserApi(app),
		book: new BookApi(app)
	}
}
