import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { join } from "path";
import * as cors from "cors";
import * as bodyParser from "body-parser";

import CheckOxfordEntries from "./dictionary/dictionary";
import getBusArrival from "./lta/bus-arrival";
import { getBusStop, getNearbyBusStops } from "./lta/bus-stops";
import {
  wordsFrequence,
  wordsTotal,
  urlsScanned,
  urlsTotal,
} from "./scraper/scrape";
import { movieList } from "./movies/movies";

// Express server
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/dictionary/oxford/:word", (req: Request, res: Response) => {
  CheckOxfordEntries(req.params.word, res);
});
app.get(
  "/api/lta/bus/busArrival/:busStopCode",
  (req: Request, res: Response) => {
    getBusArrival(req.params.busStopCode, res);
  }
);
app.get("/api/lta/bus/busStop/:busStopCode", (req: Request, res: Response) => {
  getBusStop(req.params.busStopCode, res);
});

app.get("/api/lta/bus/nearbyBusStops", (req: Request, res: Response) => {
  getNearbyBusStops(req.query.latitude, req.query.longitude, res);
});

app.listen(8080, () => {
  console.log("InSG listening HTTP on port 8080.");
});
