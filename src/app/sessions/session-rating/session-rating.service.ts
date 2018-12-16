import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 // tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
export type RatingValue = 1 | 2 | 3 | 4 | 5;

export interface ISessionRating {
  // userId: number;
  // ratingId: number;
  sessionId: number;
  rating: RatingValue;
  // createDate: Date;
}

@Injectable()
export class SessionRatingsService {
  private ratings: ISessionRating[] = [];
    constructor(
      private http: HttpClient,
    ) { }

  getAvgRating(sessionId: number): Observable<number> {
    const ratings = this.ratings
      .filter(
        (ratingObj) => ratingObj.sessionId === sessionId,
      ).map(
        (ratingObj: ISessionRating) => ratingObj.rating,
      );
    if (!this.ratings.length) {
      return Observable.of(null);
    }
    let sum = 0;
    ratings.forEach((rating: number) => sum += rating);
    const avg = sum / ratings.length;
    return Observable.of(avg);
  }

  // hasBeenRatedByUser(userId: number, sessionId: number): Observable<boolean> {
  //   const hasBeenRated = this.ratings.some(
  //     (rating) => rating.userId === userId && rating.sessionId === sessionId,
  //   );
  //   return Observable.of(hasBeenRated);
  // }

  // getRatings(sessionId: number): Observable<ISessionRating[]> {
  //   const ratings = this.ratings
  //     .filter(
  //       (rating) => rating.sessionId === sessionId,
  //     );
  //   return Observable.of(ratings);
  // }

  // save(rating: ISessionRating): Observable<ISessionRating> {
  //   this.ratings.push(rating);
  //   console.log([...this.ratings]);
  //   return Observable.of(rating);
  //   // this.http.post
  // }

  save(rating: ISessionRating): Observable<ISessionRating | number[]> {
    // if (rating.ratingId) {
    //   return this.http.put<number[]>(`http://localhost:3000/rating/${rating.ratingId}`, rating);
    // } else {
      return this.http.post<ISessionRating>(`http://localhost:3000/ratings/${rating.sessionId}`, rating);
    // }
  }
}
