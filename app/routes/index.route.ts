/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict"

/**
 * Load app configurations
 */

import spreadSheetRoute from "./spreadsheet.route"
import { APIURL } from "../constants/config"
export default (app) => {
  spreadSheetRoute(`${APIURL}/spreadsheet`, app)
}
