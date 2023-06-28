import AppForm from '@/components/app-form'
import { getFormConfig, getFormData } from '@/services/form-service'
import Image from 'next/image'

export default async function Home() {

  let [formConfig, formData] = await Promise.all([getFormConfig(), getFormData()]);

  return (
    <main>
      <AppForm config={formConfig} data={formData}></AppForm>
    </main>
  )
}
