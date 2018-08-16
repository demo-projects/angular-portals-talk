import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          <img class="mb-2"
               src="../../assets/brand/bootstrap-solid.svg"
               alt=""
               width="24"
               height="24">
          <small class="d-block mb-3 text-muted">Nir Kaufman &copy; 2018</small>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
