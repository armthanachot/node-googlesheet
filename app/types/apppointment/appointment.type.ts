import { AppointmentInterface } from "../interfaces/appointment.interface"
class Appointment implements AppointmentInterface {
  type: string
  customer_code: string
  employee_code: string
  module_type: string
  date_from: string
  date_to: string
  notes?: string
  visit_note?: string
  start_time: string
  end_time: string
  created_by: string
}

export { Appointment }
