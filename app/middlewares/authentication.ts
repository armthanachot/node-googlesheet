/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

import { StatusCodes } from "http-status-codes"
/**
 * CONSTANTS | UTILS
 */
import { BEARER_TOKEN } from "../../app/constants/config"
import { responseMessages } from "../../app/utils/app"
import { findOne } from "../utils/findOne"

const isAuthenticated = async (res, req, next) => {
  return next()
}
const validateBearer = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
    if (authorization === undefined) return res.status(StatusCodes.FORBIDDEN).json({ message: "INVALID TOKEN" })
    const bearer = authorization.split(" ")[1]
    // let employee = findEmployeeByToken(bearer)
    // if (!employee.length) return res.status(StatusCodes.FORBIDDEN)
    // employee = await findOne(employee)
    // req.employee_code = employee.employee_code
    return next()
  } catch (error) {
    console.log(error)
    return res.status(StatusCodes.FORBIDDEN)
  }
}

export { isAuthenticated, validateBearer }
