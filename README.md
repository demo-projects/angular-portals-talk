```typescript
@Component({
  selector: 'app-magic',
  template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class ButtonComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) portal: CdkPortal;
  private host: PortalHost;

  constructor(
      private cfr: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector,
  ) {}

  ngAfterViewInit(): void {
    this.host = new DomPortalHost(
        document.querySelector('#slot'),
        this.cfr,
        this.appRef,
        this.injector
    );

    this.host.attach(this.portal);
  }

  ngOnDestroy() {
    this.host.detach();
  }
}
```