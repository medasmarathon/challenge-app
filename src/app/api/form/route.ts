import { IFormData } from '@/interfaces/form';
import { updateFormData } from '@/services/form-service';
import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  let formData = await request.json() as IFormData;
  console.log(formData);
  await updateFormData(formData);
  return NextResponse.json({ status: 'Form submitted' }, {
    status: 200
  });
}