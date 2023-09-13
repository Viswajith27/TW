import express from "express";

const router = express.Router();
router.get("/", (req,res) =>{
    res.send("helloooo");
});

export default router;
