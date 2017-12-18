import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {UserService} from '../services/user.service';
import {NewsletterService} from '../services/newsletter.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {

    firstName$: Observable<string>;

    constructor(private userService: UserService, private newsLetterService: NewsletterService) {
    }

    ngOnInit(): void {
        this.firstName$ = this.userService.user$.map(u => u.firstName);
    }


    subscribeToNewsletter(emailField: HTMLInputElement) {
        this.newsLetterService.subscribeToNewsletter(emailField.value)
            .subscribe(
                () => {
                    emailField.value = '';
                    alert('Subscription successful')
                },
                (err) => {
                    console.error(`Subscription failed: ${err}`);
                }
            );
    }
}
