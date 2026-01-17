import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Customer {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

@Injectable({ providedIn: 'root' })
export class CustomersService {
  private customers: Customer[] = [
    { id: 1, name: 'Acme Corp', email: 'contact@acme.com', status: 'active' },
    { id: 2, name: 'Globex', email: 'info@globex.com', status: 'inactive' }
  ];

  getCustomers(): Observable<Customer[]> {
    return of(this.customers).pipe(delay(800));
  }

  getCustomerById(id: number): Observable<Customer> {
    const customer = this.customers.find(c => c.id === id);
    return customer
      ? of(customer).pipe(delay(500))
      : throwError(() => new Error('Customer not found'));
  }
}
