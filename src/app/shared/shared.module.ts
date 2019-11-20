import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
