import { getFormConfig, getFormData } from '@/services/form-service'
import Image from 'next/image'

export default async function Home() {
  var formConfig = await getFormConfig();
  var formData = await getFormData();

  console.log(formConfig.formName);
  console.log(formData);

  return (
    <main>
      Hello, from next
    </main>
  )
}
