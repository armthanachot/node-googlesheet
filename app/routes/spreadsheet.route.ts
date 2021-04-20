/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict"
import {findAll,findByIndex,create,update,destroy,addSheet} from "../controllers/spreadsheet/spreadsheet.controller"

export default (prefix,app)=>{
    app.route(`${prefix}`).get([],findAll).post([],create)
    app.route(`${prefix}/newsheet`).post([],addSheet)
    app.route(`${prefix}/:index`).get([],findByIndex).put([],update).delete([],destroy)
}