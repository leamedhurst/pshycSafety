'use server';

import { z } from 'zod';

const FormSchema = z.object({
    id: z.string(),
    name: z.string(),
    address: z.string(),
    contactName: z.string(),
    phone: z.string(),
    email: z.string(),
  });

  type FormData = z.infer<typeof FormSchema>;

  const Organisation = FormSchema.omit({ id: true, date: true });

  export async function createOrganization(formData: FormData) {   
    const data = transformData(formData);
    console.log('createOrganization' + JSON.stringify(data));
    const response = await fetch('/api/auth/create-organisation', {
       method: 'POST',
        headers: {
         'Content-Type': 'application/json',
       },
        body: JSON.stringify(data),
      });
    
      if (response.ok) {
        console.log('Organization created');
      } else {
        console.error('Error creating organization');
      }
  }

  const transformData = (data: FormData) => {
    return {
      name: data.name,
      display_name: data.name, // Assuming display_name is the same as name
      branding: {
        logo_url: '', // Set this to an actual URL if available
        colors: {
          primary: '', // Set actual color values if available
          page_background: '', // Set actual color values if available
        },
      },
      metadata: {}, // Add any metadata if available
      enabled_connections: [
        {
          connection_id: '', // Set an actual connection ID if available
          assign_membership_on_login: true,
        },
      ],
    };
  };