import { GetServerSideProps } from 'next'
import UserDetail from '@/src/components/user-detail'
import { userApi } from '@/src/common/helpers/userApi'
import { User } from '@/src/store/types'

interface UserDetailPageProps {
  user: User | null
  error?: string | null
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id as string
    const user = await userApi.getUserById(id)
    return {
      props: {
        user,
        error: null,
      },
    }
  } catch (error) {
    return {
      props: {
        user: null,
        error: 'Пользователь не найден',
      },
    }
  }
}

export default function UserDetailPage({ user, error }: UserDetailPageProps) {
  if (error || !user) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2>Ошибка</h2>
          <p>{error || 'Пользователь не найден'}</p>
          <button onClick={() => (window.location.href = '/users')}>
            Вернуться к списку
          </button>
        </div>
      </div>
    )
  }

  return <UserDetail user={user} />
}
