import { Router } from "express";
import {
  create,
  receiveWebhook,
} from "./payment2.controller.js";

const router = Router();

router.get("/create", create);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

export default router;
