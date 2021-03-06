/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

const MSG = {
  LOGIN: {
    REQUIRED: "employee code and password is required",
    INVALID: "username or password is invalid",
  },
}

const ERRMSG = {
  CUSTOMER: {
    CREATE: "CREATE CUSTOMER  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE CUSTOMER  WAS UNSUCCESSFUL",
    DELETE: "DELETE CUSTOMER  WAS UNSUCCESSFUL",
    CUSTOMER_CODE: "INVALID CUSTOMER CODE",
    CUSTOMER_ID: "INVALID CUSTOMER ID",
  },
  EMPLOYEE: {
    CREATE: "CREATE EMPLOYEE  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE EMPLOYEE  WAS UNSUCCESSFUL",
    DELETE: "DELETE EMPLOYEE  WAS UNSUCCESSFUL",
    EMPLOYEE_CODE: "INVALID EMPLOYEE CODE",
    EMPLOYEE_ID: "INVALID EMPLOYEE ID",
  },
  APPOINTMENT: {
    CREATE: "CREATE APPOINTMENT  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE APPOINTMENT  WAS UNSUCCESSFUL",
    DELETE: "DELETE APPOINTMENT  WAS UNSUCCESSFUL",
  },
  CHECKIN: {
    CREATE: "CREATE CHECKIN  WAS UNSUCCESSFUL",
    CHECKOUT: "CHECK OUT  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE CHECKIN  WAS UNSUCCESSFUL",
    DELETE: "DELETE CHECKIN  WAS UNSUCCESSFUL",
    VISIT_ID: "INVALID VISIT ID",
    MODULE_ID: "INVALID MODULE ID",
  },
  AGENT: {
    CREATE: "CREATE AGENT  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE AGENT  WAS UNSUCCESSFUL",
    DELETE: "DELETE AGENT  WAS UNSUCCESSFUL",
    AGENT_ID: "INVALID AGENT ID",
    ALREADY: "CUSTOMER IS ALREADY AGENT",
    SHOP: "CUSTOMER TYPE MUST BE SHOP",
  },
  PROJECT: {
    CREATE: "CREATE PROJECT  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE PROJECT  WAS UNSUCCESSFUL",
    DELETE: "DELETE PROJECT  WAS UNSUCCESSFUL",
    PROJECT_CODE: "INVALID PROJECT CODE",
    PROJECT_ID: "INVALID PROJECT ID",
    RELATED_NOT_MATCH: "STAKEHOLDERS AMOUNT DOES NOT MATCH",
    RELATED: "CUSTOMER IS RELATED in PROJECT",
  },
  QT: {
    CREATE: "CREATE QT  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE QT  WAS UNSUCCESSFUL",
    DELETE: "DELETE QT  WAS UNSUCCESSFUL",
    QT_CODE: "INVALID QT CODE",
    QT_ID: "INVALID QT ID",
  },
  QO: {
    CREATE: "CREATE QO  WAS UNSUCCESSFUL",
    UPDATE: "UPDATE QO  WAS UNSUCCESSFUL",
    DELETE: "DELETE QO  WAS UNSUCCESSFUL",
    QO_CODE: "INVALID QO CODE",
    QO_ID: "INVALID QO ID",
  },
  PHONE: {
    LENGTH: "PHONE NUMBER MUST CONTAIN 10 OR 9 CHARACTER",
  },
  PRODUCT: {
    ID: "INVALID PRODUCT ID",
  },
  REQUIRED: "DATA IS REQUIRED",
}

export { MSG, ERRMSG }
