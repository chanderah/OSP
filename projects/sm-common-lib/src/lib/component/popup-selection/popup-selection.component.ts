import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Lov } from '../../interface/lov';

@Component({
  selector: 'sm-popup-selection',
  templateUrl: './popup-selection.component.html',
  styleUrls: ['./popup-selection.component.scss', '../styles.scss'],
})
export class PopupSelectionComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  @ViewChild('input', { read: MatAutocompleteTrigger })
  public trigger: MatAutocompleteTrigger;
  public separatorKeysCodes: number[] = [COMMA, ENTER];
  public onFilter: any; // function
  public onError: any; // function
  public onSubmit: any; // function

  isLoading: boolean = true;

  listLov: Lov[] = [];
  filteredLov: Lov[] = [];
  selectedLov: Lov[] = [];
  inputFormControl = new FormControl();

  // prettier-ignore
  constructor(
      @Inject(MAT_DIALOG_DATA) public props: any,
      public dialogRef: MatDialogRef<any>,
  ) {
      dialogRef.disableClose = false;
      this.inputFormControl.valueChanges.subscribe((text) => {
          if (this.isEmpty(text)) this.filteredLov = this.listLov.slice();
          else {
            this.filteredLov = this.listLov.filter(
              (filtered) => filtered.value.toString().toUpperCase().indexOf(text.toString().trim().toUpperCase()) > -1
            )
          }
      });
  }

  ngOnInit(): void {
    // this.onFilter = this.props.onFilter;
    // this.onSubmit = this.props.onSubmit;
    // this.onError = this.props.onError;
    this.listLov = this.props.data;
    this.isLoading = false;
  }

  //prettier-ignore
  isEmpty(str: any) {
    if (str == null || str == undefined || str === '' || JSON.stringify(str).length === 0) return true;
    else return false;
}

  // initData() {
  //     this.api.getData(this.data.userId).subscribe((res: any) => {
  //         this.isLoading = false;
  //         if (res.status === 200) this.listLov = res.body;
  //         else return this.toastr.error();
  //     });
  // }

  onSelect(data: any) {
    if (this.selectedLov.indexOf(data) < 0) this.selectedLov.push(data);
    this.resetFilter();
  }

  // prettier-ignore
  onEnter(e: any) {
    if (this.isEmpty(e.input)) return this.resetFilter();
    if (this.filteredLov.length === 1) return this.onSelect(this.filteredLov[0]);
  }

  onRemove(data: any) {
    this.selectedLov.splice(this.selectedLov.indexOf(data), 1);
  }

  onSave() {
    this.dialogRef.close(this.selectedLov);
  }

  resetFilter() {
    this.inputFormControl.reset();
    this.inputFormControl.setValue(null);
    this.input.nativeElement.value = '';

    this.trigger.openPanel();
    this.input.nativeElement.focus;
  }

  openAutoComplete(e: any) {
    e.stopPropagation();
    this.resetFilter();
    this.input.nativeElement.focus();
  }

  // shortenName(name: string, i: number) {
  //     i = i ?? 1;
  //     const splitted = name.split(' ');
  //     const lastName = splitted[splitted.length - i];
  //     if (name.length <= 20 || splitted.length === i) return name;
  //     return this.shortenName(name.replace(lastName, lastName.charAt(0)), i + 1);
  // }
}
