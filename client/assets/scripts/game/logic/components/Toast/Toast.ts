import { _decorator, Label, Node, tween, UIOpacity } from 'cc';
import { LayerType } from '../../../core/layout/LayerManager';
import { LayoutCom } from '../../layout/LayoutCom';
import { registerLayout } from '../GameUI';
const { menu, ccclass, property } = _decorator;

@ccclass('Toast')
@menu('game/logic/components/Toast')
export class Toast extends LayoutCom {
    private static _loading: Toast | null = null;

    @property(Label)
    private tipLabel: Label = null!;

    private static _isShowing: boolean = false;

    static prefabName(): string {
        return 'Toast';
    }

    static layer(): LayerType {
        return LayerType.Alert;
    }

    static async open<T>(): Promise<T> {
        const name = this.prefabName();
        return new Promise((resolve) => {
            super.open({
                onAdded(node: Node) {
                    const component = node.getComponent(name)! as T;
                    resolve(component);
                },
            });
        });
    }

    public set message(txt: string) {
        this.tipLabel.string = txt;
    }

    public fadeIn() {
        const opacity = this.node.getComponent(UIOpacity);
        tween(opacity)
            .to(0.3, { opacity: 255 }, { easing: 'backIn' })
            .delay(3)
            .to(0.3, { opacity: 0 }, { easing: 'backOut' })
            .call(() => this.close())
            .start();
    }

    static async showMessage(txt: string, isModelView: boolean = false): Promise<Toast | null> {
        if (Toast._isShowing) {
            return null;
        }
        Toast._isShowing = true;
        const toast: Toast = await Toast.open();
        toast.message = txt;
        if (!isModelView) {
            toast.fadeIn();
        }
        return toast;
    }

    static async showLoading(txt: string = 'Loading...') {
        if (this._loading) {
            return Promise.resolve();
        }
        const toast = await Toast.showMessage(txt, true);
        if (toast) {
            this._loading = toast;
        }
    }

    static closeLoading() {
        if (!this._loading) {
            return Promise.resolve();
        }
        this._loading.close();
        this._loading = null;
    }

    public close() {
        Toast.remove();
        Toast._isShowing = false;
    }
}

registerLayout(Toast);
