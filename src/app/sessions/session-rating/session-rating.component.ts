import { Component, OnInit, Input } from '@angular/core';
import { SessionRatingsService, ISessionRating, RatingValue } from './session-rating.service';
import { SessionsService, ISession } from '../sessions.service';
import { ToastsManager } from 'ng2-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-session-rating',
    templateUrl: './session-rating.component.html',
})
export class SessionRatingComponent implements OnInit {
  @Input() sessionId: number;
//   hasBeenRatedByUser: boolean;
//   ratingMode = false;
  avgRating: number;
  selectedRating: RatingValue;
  session: ISession;
  rating: ISessionRating;

  ratings: { value: RatingValue, name: string }[] = [
    { value: 1, name: '1 star' },
    { value: 2, name: '2 star' },
    { value: 3, name: '3 star' },
    { value: 4, name: '4 star' },
    { value: 5, name: '5 star' },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ratingService: SessionRatingsService,
    private sessionRatings: SessionsService,
    private toastManager: ToastsManager,
// tslint:disable-next-line:indent
    ) { }
    ngOnInit() {
        this.sessionRatings.getSessionById(this.sessionId)
            .subscribe((session) => {
                this.session = session;

                let ratings = [];
                ratings = session.Ratings.map(
                    (ratingObj: ISessionRating) => ratingObj.rating,
                );
                if (ratings.length > 0) {
                    let sum = 0;
                    console.log(ratings);
                    ratings.forEach((rating) => {sum += Number(rating); });
                    const avg = sum / ratings.length;
                    this.avgRating = Math.round(avg * 100) / 100;
                }
            });


        // this.ratingService.hasBeenRatedByUser(1, this.sessionId)
        //     .subscribe((hasBeenRated) => this.hasBeenRatedByUser = hasBeenRated);
    }

    stopTheClick(event: Event): void {
        event.stopPropagation();
    }

    submit(): void {
        const rating: ISessionRating = {
            // userId: 1,
            // ratingId: this.session.Ratings.ratingId,
            sessionId: this.sessionId,
            rating: this.selectedRating,
            // createDate: new Date()
        };
        // this.rating.rating = this.selectedRating;
        // this.rating.sessionId = this.session.id;
        this.ratingService.save(rating)
            .subscribe(() => {
                this.toastManager.success('Rating submitted');
                // this.router.navigate(['sessions']);
                // this.getAvgRating(this.session);
                // this.ratingMode = false;
                // this.hasBeenRatedByUser = true;
            });
    }
}
