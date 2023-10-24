import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss'],
})
export class TryComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      itemGroup: [null],
      categoryId: [{ value: null, disabled: true }],
      categoryItem: [null],
      status: [null],
      listChild: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {}

  resetForm() {
    this.form.reset();
    while (this.listChild().length > 0) this.listChild().removeAt(0);
  }

  listChild(): FormArray {
    return this.form.get('listChild') as FormArray;
  }

  listSubChild(childIndex: number): FormArray {
    return this.listChild().at(childIndex).get('listSubChild') as FormArray;
  }

  addChild() {
    this.listChild().push(
      this.formBuilder.group({
        childId: [{ value: null, disabled: true }],
        childItem: [''],
        status: [true],
        listSubChild: this.formBuilder.array([]),
      })
    );
  }

  deleteChild(index: number) {
    this.listChild().removeAt(index);
  }

  addItem(childIndex: number) {
    this.listSubChild(childIndex).push(
      this.formBuilder.group({
        itemId: [{ value: null, disabled: true }],
        itemType: [''],
        itemBrand: [''],
        status: [true],
      })
    );
  }

  duplicateItem(childIndex: number, itemIndex: number) {
    console.log(this.listSubChild(childIndex).at(itemIndex).value);
    this.listSubChild(childIndex).insert(
      itemIndex,
      this.listSubChild(childIndex).at(itemIndex)
    );
  }

  deleteItem(childIndex: number, itemIndex: number) {
    console.log(this.listSubChild(childIndex).at(itemIndex).value);
    this.listSubChild(childIndex).removeAt(itemIndex);
  }
  getDataFromApi() {
    const dummy = {
      itemGroup: 'GA',
      categoryId: 1,
      categoryItem: 'Kipas',
      status: true, //aktif
      listChild: [
        {
          childId: 2,
          childItem: 'Kipas a',
          status: true, //aktif
          listSubChild: [
            {
              itemType: 'Kipas a-1',
              itemBrand: 'MEANWELL',
              status: true, //aktif
            },
          ],
        },
        {
          childId: 3,
          childItem: 'Kipas b',
          status: true, //aktif
          listSubChild: [
            {
              itemType: 'Kipas b-1',
              itemBrand: 'MEANWELL1',
              status: true, //aktif
            },
            {
              itemType: 'Kipas b-2',
              itemBrand: 'MEANWELL2',
              status: true, //aktif
            },
          ],
        },
      ],
    };
    this.setForm(dummy);
  }

  setForm(data: any) {
    this.resetForm();
    data.listChild.forEach((child: any, i: number) => {
      this.addChild();
      child.listSubChild.forEach(() => this.addItem(i));
    });
    this.form.patchValue(data);
  }
}
