const { shortcut } = BI.Decorators;
const Widget = BI.Widget;

@shortcut()
export class WidgetName extends Widget {
    public static xtype = "widgetName";

    render() {
        return <BI.Button
            handler={() => {
                console.log('button clicked!!');
            }}>
            123
        </BI.Button>
    }
}