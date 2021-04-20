/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict";

import { StatusCodes, getReasonPhrase } from "http-status-codes";

import { SpreadSheetRepository } from "../../repositories/spreadsheet/spreadsheet.repository";
const spreadSheetRepo = new SpreadSheetRepository();
/**
 * CONSTANTS | UTILS
 */
import { responseMessages } from "../../utils/app";
import { STATUS } from "../../constants/config";
const findAll = async (req, res) => {
  try {
    const users = await spreadSheetRepo.findAll();
    return res
      .status(StatusCodes.OK)
      .json(
        await responseMessages(
          StatusCodes.OK,
          getReasonPhrase(StatusCodes.OK),
          users.data
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        await responseMessages(
          StatusCodes.INTERNAL_SERVER_ERROR,
          getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        )
      );
  }
};

const findByIndex = async (req, res) => {
  try {
    const { index } = req.params;
    const user = await spreadSheetRepo.findByIndex(index);
    return res
      .status(StatusCodes.OK)
      .json(
        await responseMessages(
          StatusCodes.OK,
          getReasonPhrase(StatusCodes.OK),
          user.data
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        await responseMessages(
          StatusCodes.INTERNAL_SERVER_ERROR,
          getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        )
      );
  }
};

const create = async (req, res) => {
  try {
    const user = req.body;
    const created = await spreadSheetRepo.create(user);
    return res
      .status(StatusCodes.OK)
      .json(
        await responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK))
      );
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        await responseMessages(
          StatusCodes.INTERNAL_SERVER_ERROR,
          getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        )
      );
  }
};

const update = async (req, res) => {
  try {
    const { index } = req.params;
    const user = req.body;
    const updated = await spreadSheetRepo.update(user, index);
    return res
      .status(StatusCodes.OK)
      .json(
        await responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK))
      );
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        await responseMessages(
          StatusCodes.INTERNAL_SERVER_ERROR,
          getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        )
      );
  }
};

const destroy = async(req,res)=>{
  try {
    const {index} = req.params
    const deleted = await spreadSheetRepo.delete(index)
    return res
    .status(StatusCodes.OK)
    .json(
      await responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK))
    );
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        await responseMessages(
          StatusCodes.INTERNAL_SERVER_ERROR,
          getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        )
      );
  }
}

const addSheet = async(req,res)=>{
  try {
    const sheet = req.body
    const added = spreadSheetRepo.createNewSheet(sheet)
    return res
    .status(StatusCodes.OK)
    .json(
      await responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK))
    );

  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        await responseMessages(
          StatusCodes.INTERNAL_SERVER_ERROR,
          getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        )
      );
  }
}
export { findAll, findByIndex, create, update,destroy,addSheet };
