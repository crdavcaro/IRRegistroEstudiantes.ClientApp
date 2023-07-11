import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { TextSearch } from '../../interfaces/text.search.interface';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: String = '';
  @Input()
  public label: String = '';
  @Input()
  public elementos: TextSearch[] = [];

  @Output()
  public onTextChange = new EventEmitter();

  @Output()
  public onDebounce = new EventEmitter();

  public ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  public searchElement(term: string): void {
    this.onTextChange.emit(term);
  }

  public onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }

}
