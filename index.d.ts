// Type definitions for rc-calendar 9.6
// Project: http://github.com/react-component/calendar
// Definitions by: 9renpoto <https://github.com/9renpoto>
// Definitions: https://github.com/react-component/calendar

import * as React from 'react';
import { Moment } from 'moment';

export type Mode = 'time' | 'date' | 'month' | 'year' | 'decade';

export type CellContentRenderer = (current: Moment, value: Moment) => React.ReactNode;

export type DateRenderer = (current: Moment, value: Moment, cellProps: {
  key: string;
  className: string;
  selected: boolean;
  disabled: boolean;
  contentRender?: CellContentRenderer;
}) => React.ReactNode;

export interface Props {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: Moment;
  value?: Moment;
  selectedValue?: Moment;
  mode?: Mode;
  locale?: object;
  format?: string;
  showDateInput?: boolean;
  showWeekNumber?: boolean;
  showToday?: boolean;
  showOk?: boolean;
  onSelect?: (date: Moment) => void;
  onOk?: () => void;
  onKeyDown?: () => void;
  timePicker?: React.ReactNode;
  dateInputPlaceholder?: string;
  onClear?: () => void;
  onChange?: (date: Moment | null) => void;
  onPanelChange?: (date: Moment | null, mode: Mode) => void;
  disabledDate?: (current: Moment | undefined) => boolean;
  disabledTime?: (current: Moment | undefined) => object;
  dateRender?: DateRenderer;
  dateCellContentRender?: CellContentRenderer;
  renderFooter?: () => React.ReactNode;
  renderSidebar?: () => React.ReactNode;
  inputMode?:String
}

export const defaultDateRender: DateRenderer;
export const defaultContentRender: CellContentRenderer;

export default class ReactCalendar extends React.Component<Props> {}
