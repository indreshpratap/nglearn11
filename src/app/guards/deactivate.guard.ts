import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateRef } from '../can-deactivate-ref';

@Injectable({ providedIn: 'root' })
export class DeactivateGuard implements CanDeactivate<CanDeactivateRef> {
    canDeactivate(
        component: CanDeactivateRef,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (component.canDeactivate()) {
            return confirm(component.getMessage());
        } else {
            return true;
        }
    }
}