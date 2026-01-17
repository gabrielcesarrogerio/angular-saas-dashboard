import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomersService, Customer } from '../customers.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customers-list.html'
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];
  loading = true;
  error = false;

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.customersService.getCustomers().subscribe({
      next: data => {
        this.customers = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
