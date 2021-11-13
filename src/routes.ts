import express from "express";
import bannerRouterV1 from "./routes/v1/banner.route"

// Router imports
// End of router imports

const router = express.Router();

// Route routers
// End of routing routers

router.use("/v1/banner", bannerRouterV1);
export default router;
