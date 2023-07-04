import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private service: MovieApiService) {

  }
  searchResult: any;
  errorMessage: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null)
  });
  isSearchPerformed: boolean = false;

  genres: string[] = ['Action', 'Adventure', 'Animation', 'Comedy', 'Documentary', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Western'];
  ratings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  selectedGenre: string = '';
  selectedRating: number = 0;
  selectedYear: number = null!;
  movies: any[] = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  applyFilters(): void {
    this.service.fetchMoviesByFilter(this.selectedGenre, this.selectedRating, this.selectedYear)
      .subscribe((result) => {
        if (result?.Search) {
          this.searchResult = result.Search.slice(0, 20);
        } else {
          this.searchResult = [];
        }
      });
  }
  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.Search;
    });
  }

  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.Search;
    });
  }

  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.Search;
    });
  }

  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.Search;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.Search;
    });
  }

  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.Search;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.Search;
    });
  }
  submitForm() {
    const movieName = this.searchForm.value.movieName;
    if (movieName) {
      this.service.getMoviesByTitle(movieName).subscribe((result) => {
        console.log(result, 'searchmovie##');
        if (result.Error) {
          // Handle movie not found error
          this.searchResult = null; // Reset search results
          this.errorMessage = result.Error;
        } else {
          this.searchResult = result.Search;
          this.errorMessage = null; // Reset error message
        }
      });
    } else {
      // Handle case where no movie is entered
      this.searchResult = null; // Reset search results
      this.errorMessage = "Please enter a movie name.";
    }
  }

  navbg: any;
  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#000000'
      }
    } else {
      this.navbg = {}
    }
  }

}