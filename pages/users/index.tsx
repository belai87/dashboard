import { GetServerSideProps } from 'next'
import UsersList from '@/src/components/user-list'
import { DataResponse, UsersPageProps } from '@/src/common/types'
import useUserStore from '@/src/store'
import { useEffect } from 'react'

const LIMIT = 30

export default function Entity({ users, error }: UsersPageProps) {
  const [setUsers, setLoading] = useUserStore((state) => [
    state.setUsers,
    state.setLoading,
  ])

  useEffect(() => {
    setUsers(users)
    setLoading(false)
  }, [setLoading, setUsers])

  return <UsersList users={users} error={error} />
}

export const getServerSideProps: GetServerSideProps<
  UsersPageProps
> = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/users?limit=${LIMIT}`)

    if (!res.ok) {
      throw new Error('Ошибка сервера')
    }

    const data: DataResponse = await res.json()

    return {
      props: {
        users: data.users || [],
        error: null,
      },
    }
  } catch (error) {
    return {
      props: {
        users: [],
        error: 'Не удалось загрузить пользователей',
      },
    }
  }
}
