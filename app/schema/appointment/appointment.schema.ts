/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

/**
 *  UTILS
 */
import { ERRMSG } from "../../constants/msg"
import { schemaValidator } from "../../utils/app"
import { CREATE_APPOINTMENT, UPDATE_APPOINTMENT } from "../validator/appointment.validator"
const create = async (appointment) => {
  if (!appointment) return { message: ERRMSG.REQUIRED }
  const validated = await schemaValidator(appointment, CREATE_APPOINTMENT)
  return validated
}
const update = async (appointment) => {
  if (!appointment) return { message: ERRMSG.REQUIRED }
  const validated = await schemaValidator(appointment, UPDATE_APPOINTMENT)
  return validated
}

export { create, update }
