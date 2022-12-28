import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() selected = false;
  @Output() click = new EventEmitter();
  clicked() {
    this.click.emit();
  }
}
