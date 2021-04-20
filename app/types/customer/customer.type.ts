class Customer {
  readonly cstm: {
    customer_id: number
    customer_code: string
    customer_type: string
    id_card: string
    fullname: string
    phone: string
    email: string
    line: string
    customer_status: string
    shop_name: string
    shop_type: string
    address: string
    province_id: number
    district_id: number
    sub_district_id: number
    zip_code: string
    career: string
    salary: number
    contact_type: string
    religion: string
    isactive?: boolean
    createby?: string
    updateby?: string
  }
  readonly contact: {
    contact_detail_id: number
    name: string
    type: string
    position: string
    phone: string
    email: string
    address: string
    province_id: number
    district_id: number
    sub_district_id: number
    zip_code: string
  }
  readonly crm: {
    crm_details_id: number
    name: string
    type: string
    position: string
    birthday: string
    contract_other: string
    birthday_other: string
    number_of_children: number
    like_activity: string
    dislike_activity: string
  }
  readonly business: {
    name_of_director: string
    business_detail_id: number
    tax_number: string
    branch_number: string
    certificate: string
    document_vat_20: string
    business_type: string
    number_of_employee: number
    income: number
    interior_area: string
    outside_area: string
    number_of_transport: string
    transport_type: string
    pos_system: string
    history: string
    project_characteristics: string
    work_explain: string
    best_selling_product: string
  }
  constructor(cstm, contact, crm, business) {
    this.cstm = cstm
    this.contact = contact
    this.crm = crm
    this.business = business
  }
}

export { Customer }
