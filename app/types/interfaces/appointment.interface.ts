import { string } from "joi"

interface AppointmentInterface {
  readonly type: string
  readonly customer_code: string
  readonly employee_code: string
  readonly module_type: string
  readonly date_from: string
  readonly date_to: string
  readonly notes?: string
  readonly visit_note?: string
  readonly start_time: string
  readonly end_time?: string

  readonly created_by: string
}
export { AppointmentInterface }
