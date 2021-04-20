/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

// MOCKS

const PROJECTS = [
  {
    project: {
      employee_code: "17009",
      project_code: "p_2",
      project_name: "เชียงใหม่วิลล์",
      project_value: 100000,
      project_type: "งานย่อย ตึกแถว/ทาวน์โฮม",
      start_project: "2021-09-01",
      end_project: "2024-09-01",
      project_status: {
        status: "เตรียมแบบ ลงเสปก",
        sub_status: "",
      },
      sale_status: "ปิดโครงการ",
      origin: "ร้านค้าให้งานมา",
      country_id: 2,
      province_id: 2,
      district_id: 2,
      sub_district_id: 2,
      address: "218 อาคารชินธวัชชัย",
      zip_code: "10900",
    },
    project_stakeholders: {
      customers: [
        {
          customer_code: "c_60",
        },
        {
          customer_code: "c_61",
        },
      ],
    },
    product_estimate: {
      estimate_status: "นำเสนอ",
      estimate_code: "est_1",
      plan_date: "2021-10-10",
      trading_way: "ซื้อตรงบริษัท",
      company_name: "KNACX",
      product_detail: "xxxx",
    },
    product_estimate_details: {
      product_code: "DWGF-200",
      product_business: "PE",
      product_type: "ถังบำบัดน้ำเสีย",
      product_group: "DWGF",
      product: "DWGF-200",
      amount: 1,
      note: "xxx",
    },
  },
  {
    project: {
      employee_code: "17009",
      project_code: "p_1",
      project_name: "โครงการสร้างหมู่บ้านรามอินทรา",
      project_value: 100000,
      project_type: "งานย่อย ตึกแถว/ทาวน์โฮม",
      start_project: "2021-05-01",
      end_project: "2024-05-01",
      project_status: {
        status: "กำลังก่อสร้าง",
        sub_status: "เตรียมพื้นที่และวางผังอาคาร",
      },
      sale_status: "ปิดโครงการ",
      origin: "หางานมาเอง",
      country_id: 1,
      province_id: 1,
      district_id: 1,
      sub_district_id: 1,
      address: "218 อาคารชินธวัชชัย",
      zip_code: "10900",
    },
    project_stakeholders: {
      customers: [
        {
          customer_code: "c_60",
        },
        {
          customer_code: "c_61",
        },
      ],
    },
    product_estimate: {
      estimate_status: "นำเสนอ",
      estimate_code: "est_1",
      plan_date: "2020-10-10",
      trading_way: "ซื้อตรงบริษัท",
      company_name: "KNACX",
      product_detail: "xxxx",
    },
    product_estimate_details: {
      product_code: "DWGF-200",
      product_business: "PE",
      product_type: "ถังบำบัดน้ำเสีย",
      product_group: "DWGF",
      product: "DWGF-200",
      amount: 1,
      note: "xxx",
    },
  },
  {
    project: {
      employee_code: "17009",
      project_code: "p_1",
      project_name: "โครงการสร้างหมู่บ้านรามอินทรา",
      project_value: 500000,
      project_type: "งานย่อย ตึกแถว/ทาวน์โฮม",
      start_project: "2021-05-01",
      end_project: "2024-05-01",
      project_status: {
        status: "กำลังก่อสร้าง",
        sub_status: "เตรียมพื้นที่และวางผังอาคาร",
      },
      sale_status: "ปิดโครงการ",
      origin: "หางานมาเอง",
      country_id: 1,
      province_id: 1,
      district_id: 1,
      sub_district_id: 1,
      address: "218 อาคารชินธวัชชัย",
      zip_code: "10900",
    },
    project_stakeholders: {
      customers: [
        {
          customer_code: "c_60",
        },
        {
          customer_code: "c_61",
        },
      ],
    },
    product_estimate: {
      estimate_status: "นำเสนอ",
      estimate_code: "est_1",
      plan_date: "2020-10-10",
      trading_way: "ซื้อตรงบริษัท",
      company_name: "KNACX",
      product_detail: "xxxx",
    },
    product_estimate_details: {
      product_code: "DWGF-200",
      product_business: "PE",
      product_type: "ถังบำบัดน้ำเสีย",
      product_group: "DWGF",
      product: "DWGF-200",
      amount: 1,
      note: "xxx",
    },
  },
  {
    project: {
      employee_code: "17009",
      project_code: "p_1",
      project_name: "โครงการสร้างหมู่บ้านรามอินทรา",
      project_value: 12590000,
      project_type: "งานย่อย ตึกแถว/ทาวน์โฮม",
      start_project: "2021-05-01",
      end_project: "2024-05-01",
      project_status: {
        status: "กำลังก่อสร้าง",
        sub_status: "เตรียมพื้นที่และวางผังอาคาร",
      },
      sale_status: "ปิดโครงการ",
      origin: "หางานมาเอง",
      country_id: 1,
      province_id: 1,
      district_id: 1,
      sub_district_id: 1,
      address: "218 อาคารชินธวัชชัย",
      zip_code: "10900",
    },
    project_stakeholders: {
      customers: [
        {
          customer_code: "c_60",
        },
        {
          customer_code: "c_61",
        },
      ],
    },
    product_estimate: {
      estimate_status: "นำเสนอ",
      estimate_code: "est_1",
      plan_date: "2020-10-10",
      trading_way: "ซื้อตรงบริษัท",
      company_name: "KNACX",
      product_detail: "xxxx",
    },
    product_estimate_details: {
      product_code: "DWGF-200",
      product_business: "PE",
      product_type: "ถังบำบัดน้ำเสีย",
      product_group: "DWGF",
      product: "DWGF-200",
      amount: 1,
      note: "xxx",
    },
  },
]

const PROJECT = [
  {
    project: {
      employee_code: "17009",
      project_code: "p_1",
      project_name: "โครงการสร้างหมู่บ้านรามอินทรา",
      project_value: 100000,
      project_type: "งานย่อย ตึกแถว/ทาวน์โฮม",
      start_project: "2021-05-01",
      end_project: "2024-05-01",
      project_status: {
        status: "กำลังก่อสร้าง",
        sub_status: "เตรียมพื้นที่และวางผังอาคาร",
      },
      sale_status: "ปิดโครงการ",
      origin: "หางานมาเอง",
      country_id: 1,
      province_id: 1,
      district_id: 1,
      sub_district_id: 1,
      address: "218 อาคารชินธวัชชัย",
      zip_code: "10900",
    },
    project_stakeholders: {
      customers: [
        {
          customer_code: "c_60",
        },
        {
          customer_code: "c_61",
        },
      ],
    },
    product_estimate: {
      estimate_status: "นำเสนอ",
      estimate_code: "est_1",
      plan_date: "2020-10-10",
      trading_way: "ซื้อตรงบริษัท",
      company_name: "KNACX",
      product_detail: "xxxx",
    },
    product_estimate_details: {
      product_code: "DWGF-200",
      product_business: "PE",
      product_type: "ถังบำบัดน้ำเสีย",
      product_group: "DWGF",
      product: "DWGF-200",
      amount: 1,
      note: "xxx",
    },
  },
]

const PROJECT_ACTIVE = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  DELETED: "DELETED",
}
const PROJECT_TYPE = {
  PROJECT_TOWNHOME: "PROJECT_TOWNHOME",
  APARTMENT: "APARTMENT",
  CONDO: "CONDO",
  BUILDING: "BUILDING",
}
const ESTIMATE_STATUS = {
  PRESENTS: "PRESENT",
  QT:"QT",
  FEEDBACK:"FEEDBACK",
  PO:"PO",
  AMOUNT:"AMOUNT",
  PENDING:"PENDING"
}
const PROJECT_SOURCE = {
  OWN:"OWN",
  SHOP:"SHOP",
  OTHER: "OTHER",
}

const SALE_STATUS  = {
  DONE:"DONE",
  OFFER:"OFFER",
  ALL_CLOSED:"ALL_CLOSED",
  PARTIALLY_CLOSED:"PARTIALLY_CLOSED",
  FAILED:"FAILED"
}




export { PROJECTS, PROJECT, PROJECT_ACTIVE, PROJECT_TYPE, ESTIMATE_STATUS, PROJECT_SOURCE,SALE_STATUS }
