import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Layout } from './style'
// import { DailyPickerPropsType, DailyPickerStateType } from './type'
import { useRecoilState } from 'recoil'
import { AppState, recoilState } from '../../dataStructure'

// class DailyPicker extends Component<
//   DailyPickerPropsType,
//   DailyPickerStateType
// > {
//   state = {
//     date: new Date(),
//   }
//
//   onChange = (date: Date | Date[]) => this.setState({ date })
//
//   render = () => (
//     <Layout>
//       <Calendar
//         className="calendar"
//         onChange={this.onChange}
//         value={this.state.date}
//       />
//     </Layout>
//   )
// }
const DailyPicker = () => {
  // 默认使用系统当前时间，currentPickDate 修改后会记录到 sessionStorage
  // const [currentPickDate, onChange] = useState(new Date())
  const [appState, setAppState] = useRecoilState<AppState>(recoilState)
  function onChange(date: Date | Date[]) {
    console.log("onChange date:", date)
    setAppState({
      ...appState,
      currentDate: date,
    })
  }
  // const [value, onChange] = useState(new Date())
  return (
    <Layout>
      <div>
        <Calendar
          className="calendar"
          onChange={onChange}
          value={appState.currentDate}
        />
      </div>
    </Layout>
  )
}

export default DailyPicker
