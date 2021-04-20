/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

interface EmployeeInterface {
  employee_code?: string
  citizen_id?: string
  email: string
  password?: string
  prefix?: string
  firstname: string
  lastname: string
  phone?: string
  position_id: number
  section_id: number
  area_id: number
  status?: string
  original_data?: string
  created_by?: string
}

export { EmployeeInterface }
