import { findOne } from "./findOne"
import { _ } from "lodash"
import { CUSTOMER_TYPE,CUSTOMER_STATUS } from "../constants/customer"
import { object } from "joi"

const manageContactCrm = async (contact_crm) => {
  try {
    Object.assign(contact_crm, contact_crm.spouse, contact_crm.activity)
    delete contact_crm.spouse
    delete contact_crm.activity
    return contact_crm
  } catch (error) {
    console.log(error)
    return error
  }
}

const manageBusiness = async (business) => {
  try {
    Object.assign(business, business.area, business.transport)
    delete business.area
    delete business.transport
    return business
  } catch (error) {
    console.log(error)
    return error
  }
}

const manageShop = async (shop) => {
  try {
    const contact_keys = Object.keys(await findOne(shop))
    const contacts = {}
    contact_keys.forEach((v) => {
      contacts[v] = []
    })
    await shop.forEach(async (shop_item, shop_index) => {
      await contact_keys.forEach(async (item, index) => {
        contacts[item][shop_index] = shop_item[item]
      })
    })
    await contact_keys.forEach(async (item) => {
      contacts[item] = contacts[item].toString()
    })
    return contacts
  } catch (error) {
    console.log(error)
    return error
  }
}

const arrangeCustomer = async (customers) => {
  const customer = {
    customer: {},
    customer_address:{},
    contact_crm: {
      spouse: {},
      activity: {},
    },
    business: {
      area: {},
      transport: {},
    },
    shop: [],
  }
  customers.forEach(async (item, index) => {
    customer.customer = _.pick(item, ["customer_id", "customer_code", "customer_type", "firstname", "lastname", "phone", "id_card", "line", "email", "contact_type", "shop_name", "shop_type", "customer_status", "religion", "career_id", "salary", "customer_active"])
    customer.customer_address = _.pick(item,[ "address_type", "address_full", "road", "soi", "address", "province_id", "district_id", "sub_district_id", "zip_code"])
    if (item.customer_type === "SHOP") {
      customer.shop.push({
        contact_crm: {
          spouse: {},
          activity: {},
        },
      })
      const shop = customer.shop[index]
      shop.contact_crm = await arrangeContactCrm(shop.contact_crm, item)
    } else {
      customer.contact_crm = await arrangeContactCrm(customer.contact_crm, item)
    }
    customer.business = _.pick(item, ["tax_number", "branch_number", "history", "business_type", "director_name", "number_of_employee", "income", "product_service", "pos_software", "explain", "best_seller"])
    customer.business.area = _.pick(item, ["inside_area", "outside_area"])
    customer.business.transport = _.pick(item, ["number_of_transport", "transport_type"])
  })

  return customer
}

const arrangeContactCrm = async (contact_crm, item) => {
  contact_crm = _.pick(item, ["contact_crm_type", "name", "position", "contact_crm_religion", "contact_crm_phone", "contact_crm_id_card", "contact_crm_line", "contact_crm_email", "contact_crm_address_full", "contact_crm_road", "contact_crm_soi", "contact_crm_address", "contact_crm_province_id", "contact_crm_district_id", "contact_crm_sub_district_id", "contact_crm_zip_code", "nickname", "date_of_birth", "number_of_child", "character"])
  contact_crm = JSON.stringify(contact_crm).replace(/contact_crm_/g,"")
  contact_crm = JSON.parse(contact_crm)
  contact_crm.contact_type = contact_crm.type
  delete contact_crm.type

  contact_crm.spouse = _.pick(item, ["spouse_name", "spouse_date_of_birth"])
  contact_crm.activity = _.pick(item, ["favorite", "unfavorite"])
  return contact_crm
}

const arrangeCustomerActive = async (all_customer)=>{
  const {CONSTRUCTOR,DESIGNER,HOUSE_OWNER,PROJECT_OWNER,SHOP} = CUSTOMER_TYPE
  const customers:any = {
    constructor :{
      header:CONSTRUCTOR,
      data:[]
    },
    designer :{
      header:DESIGNER,
      data:[]
    },
    house_owner :{
      header:HOUSE_OWNER,
      data:[]
    },
    project_owner :{
      header:PROJECT_OWNER,
      data:[]
    },
    shop :{
      header:SHOP,
      data:[]
    },
}
  const {constructor,designer,house_owner,project_owner,shop} = customers
  all_customer.forEach(async item=>{
    const {customer_type} = item
    item.fullname = (customer_type === SHOP)?item.shop_name : item.firstname + ' ' + item.lastname
    if(customer_type === CONSTRUCTOR){
       await arrangeByType(constructor.data,item)
    }
    if(customer_type === DESIGNER){
      await arrangeByType(designer.data,item)
    }
    if(customer_type === HOUSE_OWNER){
      await arrangeByType(house_owner.data,item)
    }
    if(customer_type === PROJECT_OWNER){
      await arrangeByType(project_owner.data,item)

    }
    if(customer_type === SHOP){
      await arrangeByType(shop.data,item)

    }
  })
  const customer  = []
   await Promise.all(
    Object.keys(customers).map(async item=>{
    return  customer.push({header:customers[item].header},...customers[item].data)
  }))
  return customer
}

const arrangeByType = async(customer,item)=>{
  customer.push(_.pick(item,["customer_id","customer_code","customer_type","fullname","name","position","phone"]))
}
export { manageContactCrm, manageBusiness, manageShop, arrangeCustomer,arrangeCustomerActive}
