import AppForm from '@/components/app-form'
import { getFormConfig, getFormData } from '@/services/form-service'

export default async function Home() {

  // get all required server data for page on load as this is server component
  let [formConfig, formData] = await Promise.all([getFormConfig(), getFormData()]);

  return (
    <main>
      <AppForm config={formConfig} data={formData}></AppForm>
    </main>
  )
}
