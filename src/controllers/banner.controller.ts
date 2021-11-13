import { trimEnd } from "lodash";
import { Banner, BannerModel } from "../models/banner.model";

async function create(data: Banner): Promise<boolean> {
  try {
    if (!data) {
      console.log(`[create] : request data is missing`);
      return false;
    }

    await BannerModel.create(data);

    return true;
  } catch (error) {
    const err = error as Error;
    console.log(`[create] : ${err.message}`);
    return false;
  }
}

async function get(): Promise<Banner[] | undefined> {
  try {
    return await BannerModel.find().lean();
  } catch (error) {
    const err = error as Error;
    console.log(`[get] : ${err.message}`);
    return;
  }
}

async function getById(id: string): Promise<Banner | undefined> {
  try {
    return await BannerModel.findById(id).lean();
  } catch (error) {
    const err = error as Error;
    console.log(`[getById] : ${err.message}`);
    return;
  }
}

async function update(id: string, data: Banner): Promise<boolean> {
  try {
    if (!id || !data) {
      console.log(`[update] : id or data is missing`);
      return false;
    }

    await BannerModel.findByIdAndUpdate(id, { $set: { ...data } });

    return true;
  } catch (error) {
    const err = error as Error;
    console.log(`[update] : ${err.message}`);
    return false;
  }
}

async function remove(id: string): Promise<boolean> {
  try {
    if (!id) {
      console.log(`[remove] : id  is missing`);
      return false;
    }

    await BannerModel.findByIdAndRemove(id);

    return true;
  } catch (error) {
    const err = error as Error;
    console.log(`[remove] : ${err.message}`);
    return false;
  }
}

export default {
  create,
  get,
  getById,
  update,
  remove,
};
