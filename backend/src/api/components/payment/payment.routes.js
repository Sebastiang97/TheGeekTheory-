import { Router } from "express";
import {
  create,
  receiveWebhook,
} from "./payment2.controller.js";

const router = Router();

router.post("/create", create);

router.post("/webhook", receiveWebhook);

router.get("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

router.get("/pending", (req, res) => res.send("pending"));

router.get("/failure", (req, res) => res.send("failure"));

export default router;
