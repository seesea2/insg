import { Response } from "express";
import { readdir } from "fs";
import { extname } from "path";

export function movieList(res?: any) {
  readdir("/srv/movies/", (err, files) => {
    // readdir("C:\\yc_projects\\insg\\client\\src\\assets", (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: "No movie found." });
    }

    let rslt = [];
    files.forEach((file) => {
      if (extname(file).toLowerCase() === ".mp4") {
        rslt.push(file);
      }
    });
    // console.log(rslt);
    res.status(200).send(rslt);
  });
}
