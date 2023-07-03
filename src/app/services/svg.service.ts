import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  constructor() { }
  getIconData(iconRegistry: any, sanitizer: any)
  {
  {
  iconRegistry.addSvgIcon('verify', sanitizer.bypassSecurityTrustResourceUrl('assets/images/verified.svg'))
  };
  {
   iconRegistry.addSvgIcon('project', sanitizer.bypassSecurityTrustResourceUrl('assets/images/project.svg'))
  };
  {
    iconRegistry.addSvgIcon('users', sanitizer.bypassSecurityTrustResourceUrl('assets/images/users.svg'))
  };
  {
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/images/settings.svg'))
  };
  {
    iconRegistry.addSvgIcon('logout', sanitizer.bypassSecurityTrustResourceUrl('assets/images/logout.svg'))
    };
    {
      iconRegistry.addSvgIcon('farrow', sanitizer.bypassSecurityTrustResourceUrl('assets/images/farrow.svg'))
      }
}
  
}
