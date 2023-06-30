import { IFormConfig } from '@/interfaces/form';
import { updateFormConfig } from '@/services/form-service';
import { NextResponse } from 'next/server';
import { ApiResponse } from '@/interfaces/api-response';
 
export async function POST(request: Request) {
  try {
    let config = await request.json() as IFormConfig;
  
    await updateFormConfig(config);
    return NextResponse.json(
      {
        status: "success", 
        message: 'Form Config updated' 
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