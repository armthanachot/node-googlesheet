/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

import * as joi from "joi"
import { MODULE_TYPE } from "../../constants/config"
import { TYPE } from "../../constants/appointment"

const CREATE_APPOINTMENT = joi.object({
  type: joi
    .string()
    .required()
    .valid(...Object.values(TYPE)),
  customer_code: joi.string().required(),
  employee_code: joi.string().required(),
  module_type: joi
    .string()
    .required()
    .valid(...Object.values(MODULE_TYPE)),
  date_from: joi.string().required(),
  date_to: joi.string().required(),
  notes: joi.string().allow(null,"").required(),
  visit_note: joi.string().allow(null,"").required(),
  start_time: joi.string().required(),
  end_time: joi.string().required(),
  created_by: joi.string().required(),
})

const UPDATE_APPOINTMENT = joi.object({
  type: joi
    .string()
    .required()
    .valid(...Object.values(TYPE)),
  date_from: joi.string().required(),
  date_to: joi.string().required(),
  notes: joi.string().allow(null,"").required(),
  visit_note: joi.string().allow(null,"").required(),
  start_time: joi.string().required(),
  end_time: joi.string().required(),
})

export { CREATE_APPOINTMENT, UPDATE_APPOINTMENT }
