import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http: HttpClient) { }

  baseurl = "http://www.omdbapi.com";
  apikey = "a2d3d680"; // Replace with your actual API key

  // bannerapidata
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=trending&apikey=${this.apikey}`);
  }

  // trendingmovieapidata 
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=trending&type=movie&apikey=${this.apikey}`);
  }

  // searchmovive
  getMoviesByTitle(title: string) {
    const params = {
      apikey: this.apikey,
      s: title
    };

    return this.http.get<any>(this.baseurl, { params });
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/?i=${data}&apikey=${this.apikey}`);
  }


  // getMovieCast
  // getMovieCast(data: any): Observable<any> {
  //   return this.http.get(`${this.baseurl}/?i=${data}&apikey=${this.apikey}`);
  // }

  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=action&type=movie&apikey=${this.apikey}`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=adventure&type=movie&apikey=${this.apikey}`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=animation&type=movie&apikey=${this.apikey}`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=comedy&type=movie&apikey=${this.apikey}`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=documentary&type=movie&apikey=${this.apikey}`);
  }

  // science-fiction:878
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=science fiction&type=movie&apikey=${this.apikey}`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/?s=thriller&type=movie&apikey=${this.apikey}`);
  }
  fetchMoviesByFilter(genre: string, rating: number, year: number): Observable<any> {
    const params: any = {
      apikey: this.apikey,
      type: 'movie',
      s:genre,
      y: year
    };

    if (genre) {
      params.genre = genre;
    }

    if (rating) {
      params.imdbRating = `${rating},10`;
    }

    return this.http.get(this.baseurl, { params });
  }
}
