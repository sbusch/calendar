/* eslint react/no-multi-comp:0, no-console:0 */

import 'rc-calendar/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import RangeCalendar from 'rc-calendar/src/RangeCalendar';
import FullCalendar from 'rc-calendar/src/FullCalendar';
import MonthCalendar from 'rc-calendar/src/MonthCalendar';
import Select from 'rc-select';
import 'rc-time-picker/assets/index.css';

import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const dateCellContentRender = (current/* , value */) => <span>D{current.date()}</span>;
const monthCellContentRender = (current/* , value */) => <span>M{current.month()}</span>;

const Headline = ({ children: title }) =>
  <div style={{ clear: 'both', margin: '1em' }}>{title}</div>;

const calendars = ['time', 'date', 'month', 'year', 'decade'].map((mode) => {
  return (
    <div key={mode}>
      <Headline>&lt;Calendar mode="{mode}" /&gt;</Headline>
      <Calendar
        mode={mode}
        dateCellContentRender={dateCellContentRender}
        monthCellContentRender={monthCellContentRender}
      />
    </div>
  );
});

ReactDOM.render((<div
  style={{
    zIndex: 1000,
    position: 'relative',
    width: 900,
    margin: '20px auto',
  }}
>
  <div>
    <Headline>&lt;Calendar /&gt;</Headline>
    <div style={{ margin: 10 }}>
      <Calendar
        dateCellContentRender={dateCellContentRender}
        monthCellContentRender={monthCellContentRender}
      />
    </div>
    {calendars}
    <Headline>&lt;RangeCalendar /&gt;</Headline>
    <RangeCalendar
      dateCellContentRender={dateCellContentRender}
      monthCellContentRender={monthCellContentRender}
    />
    <Headline>&lt;FullCalendar /&gt;</Headline>
    <FullCalendar
      Select={Select}
      dateCellContentRender={dateCellContentRender}
      monthCellContentRender={monthCellContentRender}
    />
    <Headline>&lt;MonthCalendar /&gt;</Headline>
    <MonthCalendar
      dateCellContentRender={dateCellContentRender}
      monthCellContentRender={monthCellContentRender}
    />
  </div>
</div>), document.getElementById('__react-content'));
