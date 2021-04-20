class ProjectPending {
  project: {
    code: string
    name: string
    value: number
    type: string
    start: string
    end: string
    project_status: {
      status: string
      sub_status: string
    }
    sale_status: string
    origin: string
    country_id: number
    province_id: number
    district_id: number
    sub_district_id: number
    address: string
    zip_code: string
  }
  project_stakeholders: {
    project_code: string
    customer: {
      code: string
    }
  }
  product_estimate: {
    estimate_status: string
    estimate_code: string
    project_code: string
    plan_date: string
    trading_way: string
    company_name: string
    product_detail: string
  }
  product_estimate_details: {
    estimate_code: string
    product_code: string
    product_business: string
    product_type: string
    product_group: string
    product: string
    amount: number
    note: string
  }
  constructor(project, project_stakeholders, product_estimate, product_estimate_details) {
    this.project = project
    this.project_stakeholders = project_stakeholders
    this.product_estimate = product_estimate
    this.product_estimate_details = product_estimate_details
  }
}

export { ProjectPending }
