import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Content } from '../../components/content/content';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Navbar,Content],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
