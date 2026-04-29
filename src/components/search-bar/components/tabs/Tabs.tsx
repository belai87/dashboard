import s from './Tabs.module.scss'
import { TabsProps } from './types'

const SearchBarFilter = ({
  currentType,
  setFilter,
  totalCount,
  data,
  title,
  type,
}: TabsProps) => {
  return (
    <div className={s.root}>
      <div className={s.root__header}>
        <span className={s.root__title}>{title}</span>
        {totalCount && (
          <span className={s.root__count}>{totalCount} всего</span>
        )}
      </div>

      <div className={s.root__tabs}>
        {data.map((item) => (
          <button
            key={item.id}
            className={`${s.root__tab} ${currentType === item.id ? s.active : ''}`}
            onClick={() => setFilter(type, item.id)}
          >
            {item?.icon} <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBarFilter
