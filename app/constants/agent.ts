/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

const AGENTS = {
  agents: [
    {
      customer_code: "c_70",
      shop_name: "ร้านขายดี กรุงเทพ",
    },
    {
      customer_code: "c_71",
      shop_name: "ร้านขายดี สมุทรสาคร",
    },
    {
      customer_code: "c_72",
      shop_name: "chock chai hardware",
    },
    {
      customer_code: "c_73",
      shop_name: "ไทวัสดุ",
    },
  ],
}

const AGENT = {
  agent: [
    {
      customer_code: "c_73",
      shop_name: "ไทวัสดุ",
    },
  ],
}
const DEBT = {
  debt: {
    not_due: 3000000,
    overdue_1: 1000000,
    overdue_31: 0,
    overdue_61: 0,
    overdue_91: 0,
    pending: 700000,
  },
}

export { AGENTS, AGENT, DEBT }
