import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Layout } from './style'
import { DailyPickerPropsType, DailyPickerStateType } from './type'

class DailyPicker extends Component<
  DailyPickerPropsType,
  DailyPickerStateType
> {
  state = {
    date: new Date(),
  }

  onChange = (date: Date | Date[]) => this.setState({ date })

  render = () => (
    <Layout>
      <Calendar
        className="calendar"
        onChange={this.onChange}
        value={this.state.date}
      />
    </Layout>
  )
}
// function DailyPicker() {
//   // 默认使用系统当前时间，currentPickDate 修改后会记录到 sessionStorage
//   // const [currentPickDate, onChange] = useState(new Date())
//   const [value, onChange] = useState(new Date())
//   return (
//     <Layout>
//       <div className="main">
//         <Calendar onChange={onChange} value={value} />
//       </div>
//     </Layout>
//   )
// }

export default DailyPicker
