import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  TopicTitle = 'Data Binding';
}
