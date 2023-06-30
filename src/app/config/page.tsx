import AppConfig from '@/components/app-config'
import { getFormConfig, getFormData } from '@/services/form-service'

export default async function Home() {

  // get all required server data for page on load as this is server component
  let formConfig = await getFormConfig();

  return (
    <main>
      <AppConfig config={formConfig} ></AppConfig>
    </main>
  )
}
