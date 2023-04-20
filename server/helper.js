import cors from "cors";
import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";

export const middleWare = (app) => {
	dotenv.config();
	app.use(express.json());
	app.use(helmet());
	app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
	app.use(morgan("common"));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors());
};
