import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rate.component.html',
  styleUrl: './star-rate.component.css'
})
export class StarRateComponent {
  @Input() rating: any;
  starsArray?: boolean[];

  ngOnInit() {
    
    // get integer number
    let roundedRating = Math.round(this.rating); 
    // get decimal number
    let decimalPortion = this.rating - roundedRating;

    // initialize array of boolean with 5 false 
    this.starsArray = Array(5).fill(false).fill(true, 0, this.rating);
   
    // set number of int stars in the array to true
    for (let i = 0; i < roundedRating; i++) {
      this.starsArray[i] = true;
    }

    // check if the decimal is less than 0.4 
    if (decimalPortion >= 0.4) {
      this.starsArray[roundedRating] = true;
  }
  }
}