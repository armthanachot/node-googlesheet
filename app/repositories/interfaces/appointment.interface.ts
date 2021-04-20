/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

import { Appointment } from "../../types/apppointment/appointment.type"
export interface AppointmentRepositoryInterface {
  findAll(filter: object)
  findById(ref: object): any
  create(appoint: Appointment)
  update(appointment: object, id: number)
  delete(ref: object)
}
