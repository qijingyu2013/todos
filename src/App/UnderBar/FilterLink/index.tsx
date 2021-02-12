import React from 'react'
import { Link } from '@reach/router'
import { Routes } from '../../../dataStructure'

interface Props {
  path: Routes
}

const FilterLink: React.FC<Props> = ({ path }) => {
  return (
    <ul className="filters">
      <li>
        <Link
          data-cy="all-filter"
          className={path === '/' ? 'selected' : ''}
          to="/"
        >
          全部
        </Link>
      </li>
      <li>
        <Link
          data-cy="active-filter"
          className={path === '/active' ? 'selected' : ''}
          to="/active"
        >
          进行中
        </Link>
      </li>
      <li>
        <Link
          data-cy="completed-filter"
          className={path === '/completed' ? 'selected' : ''}
          to="/completed"
        >
          已完成
        </Link>
      </li>
    </ul>
  )
}

export default FilterLink
