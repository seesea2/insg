import { Component, OnInit } from "@angular/core";

import { MoviesService } from "./movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  movieList: string[];
  currentMovie;

  constructor(private svc: MoviesService) {}

  ngOnInit(): void {
    this.currentMovie = "";

    this.movieList = [];
    this.svc.getMovieList().subscribe(
      (movies) => {
        this.movieList = movies;
        this.chooseMovie(movies[0]);
      },
      (err) => {
        this.movieList = [];
      }
    );
  }

  chooseMovie(movie: string) {
    this.currentMovie = "/assets/" + movie;
    console.log(this.currentMovie);
  }
}
