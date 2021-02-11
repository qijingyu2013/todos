import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Layout } from './style'
import { useRecoilState } from 'recoil'
import { DateState, dateState } from '../../dataStructure'

const DailyPicker = () => {
  // 默认使用系统当前时间，currentPickDate 修改后会记录到 sessionStorage
  const [appState, setAppState] = useRecoilState<DateState>(dateState)
  function onChange(date: Date) {
    console.log("onChange date:", date)
    setAppState({
      date,
    })
  }
  // const [date] = useState(new Date())
  return (
    <Layout>
      <div>
        <Calendar
          className="calendar"
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          onChange={onChange}
          value={appState.date}
        />
      </div>
    </Layout>
  )
}

export default DailyPicker
