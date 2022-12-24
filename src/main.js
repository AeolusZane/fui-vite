import '@fui/core';
import { WidgetName } from './App';
BI.createWidget(
  {
    type: "bi.vertical",
    items: [
      <WidgetName />
    ],
    element: "#root"
  });