import { AgentInterface } from "../interfaces/agent.interface"
class Appointment implements AgentInterface {
  customer_id: number
  status: string
  created_by: string
}

export { Appointment }
