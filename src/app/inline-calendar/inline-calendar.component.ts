import { Component, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-inline-calendar',
  imports: [MatCardModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './inline-calendar.component.html',
  styleUrl: './inline-calendar.component.scss',
})
export class InlineCalendarComponent {
  selected = model<Date | null>(null);
}
