/* eslint react/no-multi-comp:0, no-console:0 */

import 'rc-calendar/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import RangeCalendar from 'rc-calendar/src/RangeCalendar';
import FullCalendar from 'rc-calendar/src/FullCalendar';
import MonthCalendar from 'rc-calendar/src/MonthCalendar';
import 'rc-select/assets/index.css';
import Select from 'rc-select';
import 'rc-time-picker/assets/index.css';

import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const Headline = ({ children: title }) => (
  <div style={{ clear: 'both', margin: '1em' }}>{title}</div>
);

class CustomCellContentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendererMode: 'content',
    };
  }

  dateCellRender = () => <div>dCR</div>;
  dateCellContentRender = (current /* , value */) => (
    <span>D{current.date()}</span>
  );

  monthCellRender = () => <div>mCR</div>;
  monthCellContentRender = (current /* , value */) => (
    <span>M{current.month()}</span>
  );

  toggle = ev => {
    const nextRendererMode = ev.target.value;
    this.setState(state => ({
      ...state,
      rendererMode: nextRendererMode,
    }));
  };

  render() {
    const { rendererMode } = this.state;

    let dateCellRender = undefined;
    let dateCellContentRender = undefined;
    let monthCellRender = undefined;
    let monthCellContentRender = undefined;
    if (rendererMode === 'content') {
      dateCellContentRender = this.dateCellContentRender;
      monthCellContentRender = this.monthCellContentRender;
    } else {
      // rendererMode is 'cell'
      dateCellRender = this.dateCellRender;
      monthCellRender = this.monthCellRender;
    }

    return (
      <div
        style={{
          zIndex: 1000,
          position: 'relative',
          width: 900,
          margin: '20px auto',
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            id="content" type="radio" name="mode" value="content" checked=
            {this.state.rendererMode === 'content'}
            onChange={this.toggle}
            />{' '}
            <label htmlFor="content">
              content renderers: <tt>dateCellContentRender</tt> and{' '}
              <tt>monthCellContentRender</tt>
            </label>
          </li>{' '}
          <li>
            <input
              id="cell"
              type="radio"
              name="mode"
              value="cell"
              checked={this.state.rendererMode === 'cell'}
              onChange={this.toggle}
            />{' '}
            <label htmlFor="cell">
              cell renderers: <tt>dateCellRender/dateRender</tt> and{' '}
              <tt>monthCellRender</tt>
            </label>
          </li>
        </ul>
        <Headline>&lt;Calendar /&gt;</Headline>
        <Calendar
          dateRender={dateCellRender}
          dateCellContentRender={dateCellContentRender}
          monthCellRender={monthCellRender}
          monthCellContentRender={monthCellContentRender}
        />

        <Headline>&lt;RangeCalendar /&gt;</Headline>
        <RangeCalendar
          dateRender={dateCellRender}
          dateCellContentRender={dateCellContentRender}
          monthCellRender={monthCellRender}
          monthCellContentRender={monthCellContentRender}
        />

        <Headline>&lt;FullCalendar /&gt;</Headline>
        <FullCalendar
          Select={Select}
          dateCellRender={dateCellRender}
          dateCellContentRender={dateCellContentRender}
          monthCellRender={monthCellRender}
          monthCellContentRender={monthCellContentRender}
        />
        <Headline>&lt;MonthCalendar /&gt;</Headline>
        <MonthCalendar
          monthCellRender={monthCellRender}
          monthCellContentRender={monthCellContentRender}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <CustomCellContentExample />,
  document.getElementById('__react-content')
);
