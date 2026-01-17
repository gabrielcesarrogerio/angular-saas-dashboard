import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersService, Customer } from '../customers.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-detail.html'
})
export class CustomerDetailComponent implements OnInit {
  customer?: Customer;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customersService.getCustomerById(id).subscribe(customer => {
      this.customer = customer;
      this.loading = false;
    });
  }
}
