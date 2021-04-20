/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict";
// INTERFACES
import { GoogleSpreadsheet } from "google-spreadsheet";
import { spreadsheet_config } from "./spreadsheet_config";
import { SpreadSheetRepositoryInterface } from "../interfaces/spreadsheet.interface";
import { internalResponse } from "../../utils/app";
import { GOOGLESHEET_TOKEN } from "../../constants/config";
const doc = new GoogleSpreadsheet(GOOGLESHEET_TOKEN);

export class SpreadSheetRepository implements SpreadSheetRepositoryInterface {
  public async findAll() {
    await doc.useServiceAccountAuth({
      client_email: spreadsheet_config.client_email,
      private_key: spreadsheet_config.private_key,
    });
    const info = await doc.loadInfo();
    const first_sheet = doc.sheetsByIndex[0];
    const rows = await first_sheet.getRows();
    const users = [];
    await rows.map(async (item) => {
      return users.push({ fname: item.fname, lname: item.lname });
    });
    return await internalResponse(true, "OK", users);
  }

  public async findByIndex(index: number) {
    await doc.useServiceAccountAuth({
      client_email: spreadsheet_config.client_email,
      private_key: spreadsheet_config.private_key,
    });
    const info = await doc.loadInfo();
    const first_sheet = doc.sheetsByIndex[0];
    const rows = await first_sheet.getRows();
    const user = rows[index];
    const filtered_user = {};
    await user._sheet.headerValues.map((item) => {
      filtered_user[item] = user[item];
      return filtered_user;
    });

    return await internalResponse(true, "OK", filtered_user);
  }

  public async create(member) {
    await doc.useServiceAccountAuth({
      client_email: spreadsheet_config.client_email,
      private_key: spreadsheet_config.private_key,
    });
    const info = await doc.loadInfo();
    const first_sheet = doc.sheetsByIndex[0];
    await first_sheet.addRows(member);
    return await internalResponse(true, "OK");
  }

  public async update(member, index) {
    await doc.useServiceAccountAuth({
      client_email: spreadsheet_config.client_email,
      private_key: spreadsheet_config.private_key,
    });
    const info = await doc.loadInfo();
    const first_sheet = doc.sheetsByIndex[0];

    const rows = await first_sheet.getRows();
    const row = rows[index];
    row.fname = member.fname;
    row.lname = member.lname;
    row.save();
    return await internalResponse(true, "OK");
  }

  public async delete(index) {
    await doc.useServiceAccountAuth({
      client_email: spreadsheet_config.client_email,
      private_key: spreadsheet_config.private_key,
    });
    const info = await doc.loadInfo();
    const first_sheet = doc.sheetsByIndex[0];

    const rows = await first_sheet.getRows();
    rows[index].delete();
    return await internalResponse(true, "OK");
  }

  public async createNewSheet(sheet){
    await doc.useServiceAccountAuth({
        client_email: spreadsheet_config.client_email,
        private_key: spreadsheet_config.private_key,
      });
      const info = await doc.loadInfo();
      await doc.addSheet({headerValues:Object.values(sheet)})

  }
}
