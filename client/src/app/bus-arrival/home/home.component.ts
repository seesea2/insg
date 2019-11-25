import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusArrivalService } from '../bus-arrival.service';
import {
  BusStopInfo,
  BusTable,
  NextBusData,
  BusArrivalReturn
} from '../bus-arrival-interface';

@Component({
  selector: 'bus-arrival-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  busTable: BusTable[];
  busTableColumn: string[] = ['service', 'bus1', 'bus2', 'bus3', 'load'];
  busStopBookmark: BusStopInfo[];
  busStopInfo: BusStopInfo;
  bExistingBookmark: boolean;
  nearbyBusStops: BusStopInfo[];
  bSpinnerShowNearbyBusStops = false;
  currentBusStopCode: string;

  constructor(
    private busArrivalService: BusArrivalService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.busStopBookmark = [];
    busArrivalService.busStopBookmark$.subscribe(data => {
      this.busStopBookmark = data;
    });
  }

  ngOnInit() {
    this.busTable = [];
    this.nearbyBusStops = [];
    this.busStopInfo = undefined;
    this.bExistingBookmark = false;
    this.bSpinnerShowNearbyBusStops = false;
    this.currentBusStopCode = '';
  }

  addBusStopBookmark() {
    this.bExistingBookmark = true;
    this.busArrivalService.addBusStopBookmark(this.busStopInfo);
  }

  deleteBusStopBookmark(busStop: BusStopInfo) {
    this.bExistingBookmark = false;
    this.busArrivalService.deleteBusStopBookmark(busStop);
  }

  submit(busStopCode: string) {
    this.nearbyBusStops = [];

    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.snackBar.open('Invalid Bus Stop Code.', 'warn', { duration: 2000 });
      return;
    }
    this.router.navigate(['/bus', busStopCode]);
  }

  getNearbyBusStops(coordinates: Coordinates) {
    this.busArrivalService.getNearbyBusStops(coordinates).subscribe(
      data => {
        this.nearbyBusStops = data;
        this.bSpinnerShowNearbyBusStops = false;
      },
      err => {
        this.nearbyBusStops = [];
        this.bSpinnerShowNearbyBusStops = false;
        this.snackBar.open('No Nearby Bus Stop.', 'warn', {
          duration: 2000
        });
      }
    );
  }
  toggleNearbyBusStops() {
    if (this.nearbyBusStops.length) {
      return (this.nearbyBusStops = []);
    }
    this.bSpinnerShowNearbyBusStops = true;
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        if (pos && pos.coords) {
          this.getNearbyBusStops(pos.coords);
        } else {
          this.bSpinnerShowNearbyBusStops = false;
        }
      });
    } else {
      this.bSpinnerShowNearbyBusStops = false;
      this.snackBar.open('Please enable the location access.', 'warn', {
        duration: 2000
      });
    }
  }
}
