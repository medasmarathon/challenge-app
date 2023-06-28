import AppForm from '@/components/app-form'
import { getFormConfig, getFormData } from '@/services/form-service'
import Image from 'next/image'

export default async function Home() {

  var formConfig = await getFormConfig();
  var formData = await getFormData();

  return (
    <main>
      Hello, from next
      <AppForm config={formConfig} data={formData}></AppForm>
    </main>
  )
}
