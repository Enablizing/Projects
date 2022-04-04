import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  dateTime!: Observable<Date> 

  ngOnInit() {
    this.dateTime = timer(0, 1000).pipe(
        map(() => {
          return new Date()
        })
      )
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    toggleSideBar() {
      this.toggleSideBarForMe.emit();
    }

  constructor(private breakpointObserver: BreakpointObserver) {}
  }


