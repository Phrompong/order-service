import bannerController from "../../controllers/banner.controller";
import express from "express";
import { Banner, BannerModel } from "../../models/banner.model";

var router = express.Router();

// * get all banner
router.get("/", async (req, res) => {
  try {
    const result = await bannerController.get();

    res.status(200).respond(0, "Success", result);
    return;
  } catch (error) {
    const err = error as Error;
    res.status(400).respond(-1, err.message);
    return;
  }
});

// * get banner by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).respond(-1, "id is missing");
      return;
    }

    const result = await bannerController.getById(id);

    res.status(200).respond(0, "Success", result);
    return;
  } catch (error) {
    const err = error as Error;
    res.status(400).respond(-1, err.message);
    return;
  }
});

// * insert banner
router.post("/", async (req, res) => {
  try {
    const body = req.body as Banner;

    if (!body) {
      res.status(400).respond(-1, "body is missing");
      return;
    }

    const result = await bannerController.create(body);

    if (!result) {
      res.status(400).respond(-1, "unable to insert");
      return;
    }

    res.status(200).respond(0, "Success");
    return;
  } catch (error) {
    const err = error as Error;
    res.status(400).respond(-1, err.message);
    return;
  }
});

// * update banner
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body as Banner;

    if (!id || !body) {
      res.status(400).respond(-1, "id or body is missing");
      return;
    }

    const result = await bannerController.update(id, body);

    if (!result) {
      res.status(400).respond(-1, "unable to update");
      return;
    }

    res.status(200).respond(0, "Success");
    return;
  } catch (error) {
    const err = error as Error;
    res.status(400).respond(-1, err.message);
    return;
  }
});

// * delete banner
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).respond(-1, "id is missing");
      return;
    }

    const result = bannerController.remove(id);

    if (!result) {
      res.status(400).respond(-1, "unable to remove");
      return;
    }

    res.status(200).respond(0, "Success");
    return;
  } catch (error) {
    const err = error as Error;
    res.status(400).respond(-1, err.message);
    return;
  }
});

export default router;
