import React from 'react';
declare const _default: {
    title: string;
    component: React.ComponentClass<import("antd/lib/date-picker/generatePicker").PickerProps<import("moment").Moment>, any> & {
        WeekPicker: React.ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerDateProps<import("moment").Moment>, "style" | "name" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showNow" | "showTime" | "disabledTime"> & {
            locale?: import("antd/lib/date-picker/generatePicker").PickerLocale | undefined;
            size?: import("antd/lib/button").ButtonSize;
            bordered?: boolean | undefined;
        }, "style" | "name" | "size" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showNow" | "showTime" | "disabledTime" | "bordered">, any>;
        MonthPicker: React.ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerDateProps<import("moment").Moment>, "style" | "name" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showNow" | "showTime" | "disabledTime"> & {
            locale?: import("antd/lib/date-picker/generatePicker").PickerLocale | undefined;
            size?: import("antd/lib/button").ButtonSize;
            bordered?: boolean | undefined;
        }, "style" | "name" | "size" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showNow" | "showTime" | "disabledTime" | "bordered">, any>;
        YearPicker: React.ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerDateProps<import("moment").Moment>, "style" | "name" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showNow" | "showTime" | "disabledTime"> & {
            locale?: import("antd/lib/date-picker/generatePicker").PickerLocale | undefined;
            size?: import("antd/lib/button").ButtonSize;
            bordered?: boolean | undefined;
        }, "style" | "name" | "size" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showNow" | "showTime" | "disabledTime" | "bordered">, any>;
        RangePicker: React.ComponentClass<import("antd/lib/date-picker/generatePicker").RangePickerProps<import("moment").Moment>, any>;
        TimePicker: React.ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerTimeProps<import("moment").Moment>, "style" | "name" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showNow" | "showHour" | "showMinute" | "showSecond" | "use12Hours" | "hourStep" | "minuteStep" | "secondStep" | "hideDisabledOptions" | "disabledHours" | "disabledMinutes" | "disabledSeconds" | "defaultOpenValue"> & {
            locale?: import("antd/lib/date-picker/generatePicker").PickerLocale | undefined;
            size?: import("antd/lib/button").ButtonSize;
            bordered?: boolean | undefined;
        }, "style" | "name" | "size" | "onClick" | "disabled" | "className" | "autoComplete" | "autoFocus" | "placeholder" | "value" | "onChange" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "prefixCls" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "direction" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "open" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showNow" | "showHour" | "showMinute" | "showSecond" | "use12Hours" | "hourStep" | "minuteStep" | "secondStep" | "hideDisabledOptions" | "disabledHours" | "disabledMinutes" | "disabledSeconds" | "defaultOpenValue" | "bordered">, any>;
    };
    decorators: never[];
};
export default _default;
export declare const DatePickerStory: () => JSX.Element;
export declare const RangePickerStory: () => JSX.Element;
