import { Component, Input } from '@angular/core';
import { Certificate } from 'src/models/resume';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  @Input('certificates') certificates: Certificate[];

}
