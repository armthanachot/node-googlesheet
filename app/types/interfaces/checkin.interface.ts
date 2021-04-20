interface CheckinInterface {
  employee_id: number
  customer_id?: number
  visit_type: string
  module_type: string
  location: string
  latitude: string
  longitude: string
  check_in: string
  follow_up: string
  created_by?: string
}

export { CheckinInterface }
