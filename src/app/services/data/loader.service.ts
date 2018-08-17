import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {
    loading = new Subject<boolean>();
    loadingStack = [];

    setLoading(value) {
        console.log("SET LOADING: ", value);
        if (value) {
            this.loadingStack.push(1);
            this.loading.next(value);
        } else {
            this.loadingStack.pop();
        }

        if (this.loadingStack.length === 0) {
            this.loading.next(false);
        }
    }

}