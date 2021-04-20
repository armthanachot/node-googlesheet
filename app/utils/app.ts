/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

const opt = async (options, def) => {
  return (await options) || def
}

const responseMessages = (code, message, data?: any) => {
  return { code, message, data }
}
const internalResponse = (status, message, data?: any) => {
  return { status, message, data }
}
const schemaValidator = async (data, schema) => {
  try {
    const validated = await schema.validateAsync(data)
    return validated
  } catch (error) {
    return error
  }
}

const checkDateTime = async (selected) => {
  try {
    const now_dt = await new Date()
    const selected_dt = await new Date(Date.parse(selected))
    if (selected_dt.getDate() < now_dt.getDate()) {
      return { status: false, message: "selected date time must more than current date time" }
    }
    return { status: true, message: "ok" }
  } catch (error) {
    console.log("error compare DT function : ", error)
    return { status: false, message: "server error" }
  }
}

const phoneValidate = async (phone) => {
  try {
    phone = phone.split(",")
    for (const item of phone) {
      if (item.length !== 10 && item.length !== 9) {
        return false
      }
    }
    return true
  } catch (error) {
    return error
  }
}

export { opt, responseMessages, checkDateTime, schemaValidator, internalResponse, phoneValidate }
