import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Lov } from '../../interface/lov';

@Component({
  selector: 'sm-popup-selection',
  templateUrl: './popup-selection.component.html',
  styleUrls: ['./popup-selection.component.scss'],
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
  }

  //prettier-ignore
  isEmpty(str: any) {
    if (str == null || str == undefined || str === '' || JSON.stringify(str).length === 0) return true;
    else return false;
}

  // initData() {
  //     this.api.getListTaskReviewer(this.taskData.userId).subscribe((res: any) => {
  //         this.isLoading = false;
  //         if (res.status === 200) this.listTaskReviewer = res.body;
  //         else return this.toastr.error(RangerConstantaUtil.APPLICATION_ERROR);
  //     });
  // }

  onSelect(data: any) {
    if (this.selectedLov.indexOf(data) < 0) this.selectedLov.push(data);
    this.resetFilter();
  }

  onEnter(e: any) {
    console.log(e);
    // if (isEmpty(e.input)) return this.resetFilter();
    // if (this.filteredTaskReviewer.length === 1) return this.onSelect(this.filteredTaskReviewer[0]);
    // return;
  }

  onRemove(data: any) {
    console.log(data);
    // this.selectedTaskReviewer.splice(this.selectedTaskReviewer.indexOf(data), 1);
  }

  onSave() {
    console.log(this.selectedLov);
    // if (this.selectedTaskReviewer.length < 1) return this.toastr.error(RangerConstantaUtil.ASK_REVIEW_REQUIRED);
    // this.confirm
    //     .open({
    //         title: RangerConstantaUtil.TITLE_CAUTION,
    //         message: RangerConstantaUtil.SUBMIT_CONFIRMATION,
    //         icon: { show: true, name: 'heroicons_outline:check-circle', color: 'warning' }
    //     })
    //     .afterClosed()
    //     .subscribe((res) => {
    //         if (res === 'confirmed') return this.runTaskReviewAction();
    //     });
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

  // runTaskReviewAction() {
  //     this.isLoading = true;
  //     this.reviewAction.listPicReview = this.selectedTaskReviewer;
  //     this.api.requestTaskReview(this.reviewAction).subscribe((res: any) => {
  //         this.isLoading = false;
  //         if (res.status === 200) {
  //             this.resetFilter();
  //             return this.dialogRef.close(res);
  //         } else this.toastr.error(RangerConstantaUtil.ASK_REVIEW_FAILED);
  //     });
  // }

  // shortenName(name: string, i: number) {
  //     i = i ?? 1;
  //     const splitted = name.split(' ');
  //     const lastName = splitted[splitted.length - i];
  //     if (name.length <= 20 || splitted.length === i) return name;
  //     return this.shortenName(name.replace(lastName, lastName.charAt(0)), i + 1);
  // }
}
