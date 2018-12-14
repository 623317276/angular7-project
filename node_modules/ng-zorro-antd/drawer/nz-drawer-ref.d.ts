import { Observable } from 'rxjs/index';
export declare abstract class NzDrawerRef<R = any> {
    abstract afterClose: Observable<R>;
    abstract afterOpen: Observable<void>;
    abstract close(result?: R): void;
    abstract open(): void;
}
