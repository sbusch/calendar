/* eslint react/no-multi-comp:0, no-console:0 */

import 'rc-calendar/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import RangeCalendar from 'rc-calendar/src/RangeCalendar';
import FullCalendar from 'rc-calendar/src/FullCalendar';
import Select from 'rc-select';
import 'rc-time-picker/assets/index.css';

import defaultContentRender from 'rc-calendar';

import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

// const dateCellContentRender = (current, value) => <span>{defaultContentRender(current, value)}</span>
const cellContentRender = (mode, current, value) => <span>{mode} D{current.date()}</span>

const dateCellContentRender = (mode, current, value) => <span>D{current.date()}</span>
const monthCellContentRender = (current, value) => <span>M{current.month()}</span>

const calendars = ['time', 'date', 'month', 'year', 'decade'].map((mode) => {
  return (
    <div>
      <div key={mode} style={{ clear: 'both', margin: '1em' }}>&lt;Calendar mode="{mode}" /&gt;</div>
      <Calendar
        mode={mode}
        cellContentRender={cellContentRender}
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
    <div style={{ clear: 'both', margin: '1em' }}>&lt;Calendar /&gt;</div>
    <div style={{ margin: 10 }}>
      <Calendar
        cellContentRender={cellContentRender}
        />
    </div>
    {calendars}
    <div style={{ clear: 'both', marginTop: '1em' }}>&lt;RangeCalendar /&gt;</div>
    <RangeCalendar
        cellContentRender={cellContentRender}
        />
    <div style={{ clear: 'both', marginTop: '1em' }}>&lt;FullCalendar /&gt;</div>
    <FullCalendar
    // FIXME: cellContentRender={cellContentRender}
      dateCellContentRender={dateCellContentRender}
      monthCellContentRender={monthCellContentRender}
      // onSelect={() => undefined}
      Select={Select}
      />
  </div>
</div>), document.getElementById('__react-content'));
