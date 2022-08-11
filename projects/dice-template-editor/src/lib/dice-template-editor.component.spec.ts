import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceTemplateEditorComponent } from './dice-template-editor.component';

describe('DiceTemplateEditorComponent', () => {
  let component: DiceTemplateEditorComponent;
  let fixture: ComponentFixture<DiceTemplateEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceTemplateEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceTemplateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
