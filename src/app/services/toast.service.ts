import { Injectable } from "@angular/core";
import { MessageService } from "primeng/components/common/messageservice";

@Injectable({ providedIn: 'root' })
export class ToastService {

    readonly TOAST_KEY = 'home';


    constructor(private messageService: MessageService) {

    }

    successOnly(detail: string) {
        this.displayGrowl(this.TOAST_KEY, 'success', 'Success', detail);
    }
    success(summary: string, detail?: string) {
        this.displayGrowl(this.TOAST_KEY, 'success', summary, detail);
    }

    error(summary: string, detail?: string) {
        this.displayGrowl(this.TOAST_KEY, 'error', summary, detail);
    }
    errorSticky(summary: string, detail?: string) {
        this.displayGrowl(this.TOAST_KEY, 'error', summary, detail, true);
    }

    private displayGrowl(key: string, severity: string, summary: string, detail?: string, sticky = false) {
        let msg = { key: key, severity: severity, summary: summary, detail: detail, sticky: sticky };
        this.messageService.clear();
        this.messageService.add(msg);
    }
}