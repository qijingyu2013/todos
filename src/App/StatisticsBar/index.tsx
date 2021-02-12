import React from 'react'
// import { Link } from '@reach/router'
import { recoilState } from '../../dataStructure'
import { useRecoilValue } from 'recoil'
import _ from 'lodash'
import { Layout } from './style'

interface StatisticsType {
  num: number
  date: Date
}

const StatisticsBar: React.FC = () => {
  const appState = useRecoilValue(recoilState);
  // todo 根据时间进行重新排序
  const data: StatisticsType[] = [];
  appState.todoList.forEach((item)=>{
    const iDate = new Date(item.date)
    // 把当前已经存在的过滤出来
    const rlt = data.filter((statData)=>{
      const sDate = new Date(statData.date)
      return iDate.getDate() == sDate.getDate()
      && iDate.getMonth() == sDate.getMonth()
      && iDate.getFullYear() == sDate.getFullYear()
    })
    if(rlt.length) {
      data.forEach((statData, i) => {
        const sDate = new Date(statData.date)
        if(iDate.getDate() == sDate.getDate()
          && iDate.getMonth() == sDate.getMonth()
          && iDate.getFullYear() == sDate.getFullYear()) {
          data[i] = {
            date: statData.date,
            num: statData.num+1,
          }
        }
      })
    } else {
      data.push({
        num: 1,
        date: iDate
      })
    }

  })
  const orderTodos = _.orderBy(data, "date", "asc")
  return (
    <Layout>
      <ul className="stat">
        {orderTodos?.map((sdata)=>{
          const curr = new Date(sdata.date)
          const label = `在${curr.getFullYear()}年${curr.getMonth()+1}月${curr.getDate()}日还有${sdata.num}项任务未完成！`
          return (<li>
            <div className="view">
              <label
              >
                {label}
              </label>
            </div>
          </li>)
        })}
      </ul>
    </Layout>
  )
}

export default StatisticsBar
