import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatSnackBarModule,
  MatStepperModule,
  MatGridListModule,
  MatExpansionModule,
  MatRadioModule,
  MatBadgeModule,
  MatToolbar,
  MatToolbarRow,
  MatIconRegistry
  } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    MatGridListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatRadioModule,
    MatBadgeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    MatGridListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatRadioModule,
    MatBadgeModule
  ]
})
export class MaterialModule {
  constructor(iconRegistery: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistery.addSvgIcon('fb', sanitizer.bypassSecurityTrustResourceUrl('./../assets/icon/fb.svg'));
        iconRegistery.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('./../assets/icon/linkedin.svg'));
        iconRegistery.addSvgIcon('git', sanitizer.bypassSecurityTrustResourceUrl('./../assets/icon/github.svg'));
  }
}
