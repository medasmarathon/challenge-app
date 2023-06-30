import { IFormConfig } from '@/interfaces/form';
import { updateFormConfig } from '@/services/form-service';
import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  let config = await request.json() as IFormConfig;
  
  await updateFormConfig(config)
  return NextResponse.json({ status: 'Form Config updated' }, {
    status: 200
  });
}