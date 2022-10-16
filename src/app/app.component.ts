import { Component,ComponentFactoryResolver,ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { CompDynamicDirective } from './directives/comp-dynamic.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CompDynamicDirective)
  compDynamic!: CompDynamicDirective;
  title = 'compDynamic';
  loader: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ){}

  myProducts(){
    const component = this.componentFactoryResolver.resolveComponentFactory(ProductsComponent);
    this.compDynamic.viewContainerRef.clear();
    this.compDynamic.viewContainerRef.createComponent(component);
  }
}
