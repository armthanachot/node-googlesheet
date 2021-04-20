import { findOne } from "./findOne"
import { _ } from "lodash"
const manageProject = async (project) => {
  try {
    delete project.purchase_channel
    Object.assign(project, project.project_period, project.construction, project.location)
    delete project.project_period
    delete project.construction
    delete project.location
    return project
  } catch (error) {
    console.log(error)
    return error
  }
}


const arrangeProject = async (project,project_related, product_estimate) => {
  const arranged = {
    project: {
      project_period: {},
      construction: {},
      sale_status:null,
      project_source:null,
      location: {},
    },
    purchase_channel:null,
    project_related: {
      customers: [],
    },
    products_estimate: [],
  }
  const purchase_channel = []
  await project.forEach(async (item, index) => {
    arranged.project = _.pick(item, ["project_id","employee_code", "project_code", "project_name", "project_value", "project_type"])
    arranged.project.project_period = _.pick(item, ["project_start", "project_end"])
    arranged.project.construction = _.pick(item, ["construction_id", "sub_construction_id"])
    arranged.project.sale_status = item.sale_status
    arranged.project.project_source = item.project_source
    arranged.project.location = _.pick(item, ["latitude", "longitude", "address",  "country_id", "province_id", "district_id", "sub_district_id","zip_code"])
    purchase_channel.push(_.pick(item,["purchase_channel_type_id","contact_name","product_group_detail"]))
  })
  arranged.purchase_channel = purchase_channel
  await project_related.forEach(async (item) => {
    arranged.project_related.customers.push(_.pick(item, ["customer_id"]))
  });
  await product_estimate.forEach(async (item) => {
    arranged.products_estimate.push(_.pick(item, ["estimate_status", "product_business_id", "product_id", "product_type", "product_group", "product_code", "product_name", "product_amount", "product_price", "total", "note", "usability_date", "usability_amount"]))
  })
  return arranged
}

export { manageProject, arrangeProject }
