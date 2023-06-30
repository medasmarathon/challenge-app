import { ApiResponse } from '@/interfaces/api-response';
import { IFormData } from '@/interfaces/form';
import { updateFormData } from '@/services/form-service';
import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  try {
    let formData = await request.json() as IFormData;
  
    await updateFormData(formData);
    return NextResponse.json(
      {
        status: "success", 
        message: 'Form submitted successfully' 
      } as ApiResponse<never>, 
      {
        status: 200
      }
    );
  }
  catch (error) {
    let message = (error instanceof Error) ? error.message : String(error);
    return NextResponse.json(
      {
        status: "error", 
        message: message
      } as ApiResponse<never>, 
      {
        status: 500
      }
    );
  }
  
}