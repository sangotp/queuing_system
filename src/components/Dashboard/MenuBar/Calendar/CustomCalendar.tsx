import { Calendar, Col, Radio, Row, Select, Typography, Button, Space } from "antd"
import type { CalendarMode } from "antd/es/calendar/generateCalendar"
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import './styles/Calendar.css'
import dayLocaleData from 'dayjs/plugin/localeData';
import { AngleLeftIcon, AngleRightIcon } from "./CalendarIcons";


dayjs.extend(dayLocaleData);

const onSelect = (date: Dayjs) => {
  console.log(date.date())
}

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

export const CustomCalendar = () => {

  return (
    <Calendar fullscreen={false}
    headerRender={({ value, type, onChange, onTypeChange }) => {
      // Date Options
      const TotalDateInMonth = value.daysInMonth();
      const dateOptions = []

      for (let i = 1; i <= TotalDateInMonth; i++)
      {
        dateOptions.push(
          <Select.Option key={i} value={i} className="date-item">
            {i}
          </Select.Option>,
        )
      }

      // Month Options
      const start = 0;
      const end = 12;
      const monthOptions = [];

      let current = value.clone();
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i++) {
        current = current.month(i);
        months.push(localeData.monthsShort(current));
      }

      for (let i = start; i < end; i++) {
        monthOptions.push(
          <Select.Option key={i} value={i} className="month-item">
            {months[i]}
          </Select.Option>,
        );
      }

      // Year Options
      const date = value.date();
      const year = value.year();
      const month = value.month();
      const options = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
          <Select.Option key={i} value={i} className="year-item">
            {i}
          </Select.Option>,
        );
      }
      return (
        <>
          {/* <Typography.Title level={4}>Custom header</Typography.Title> */}
          <Row className='calendar-header-row'>
            <Col xs={24} className='calendar-header-col'>
              <Button icon={AngleLeftIcon} type='default' onClick={() => {
                const now = value.clone().month(month - 1);
                onChange(now);
              }} className='prev-month-btn' />

              <Space direction='horizontal' className='date-select-container'>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-date-select no-icon"
                  value={date}
                  suffixIcon={false}
                  onChange={(newDate) => {
                    const now = value.clone().date(newDate);
                    onChange(now);
                  }}
                >
                  {dateOptions}
                </Select>

                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-month-select no-icon"
                  value={month}
                  suffixIcon={false}
                  onChange={(newMonth) => {
                    const now = value.clone().month(newMonth);
                    onChange(now);
                  }}
                >
                  {monthOptions}
                </Select>

                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select no-icon"
                  value={year}
                  suffixIcon={false}
                  onChange={(newYear) => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                >
                  {options}
                </Select>
              </Space>
            
              {/* <Typography.Title className='current-date-text'>{date} {months[month]} {year}</Typography.Title> */}
              <Button icon={AngleRightIcon} type='default' onClick={() => {
                const now = value.clone().month(month + 1);
                onChange(now);
              }} className='next-month-btn'/>
            </Col>
            {/* <Col>
              <Radio.Group
                size="small"
                onChange={(e) => onTypeChange(e.target.value)}
                value={type}
              >
                <Radio.Button value="month">Month</Radio.Button>
                <Radio.Button value="year">Year</Radio.Button>
              </Radio.Group>
            </Col>
            <Col>
              <Select
                size="small"
                dropdownMatchSelectWidth={false}
                className="my-year-select"
                value={year}
                onChange={(newYear) => {
                  const now = value.clone().year(newYear);
                  onChange(now);
                }}
              >
                {options}
              </Select>
            </Col>
            <Col>
              <Select
                size="small"
                dropdownMatchSelectWidth={false}
                value={month}
                onChange={(newMonth) => {
                  const now = value.clone().month(newMonth);
                  onChange(now);
                }}
              >
                {monthOptions}
              </Select>
            </Col> */}
          </Row>
        </>
      );
    }}
    onPanelChange={onPanelChange}
    onSelect={onSelect}
    className='dashboard-calendar' />
  )
}