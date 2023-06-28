import { getFormConfig } from '@/services/form-service'
import Image from 'next/image'

export default function Home() {
  getFormConfig();

  return (
    <main>
      Hello, from next
    </main>
  )
}
