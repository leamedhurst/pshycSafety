import OrganizationForm from '@/app/ui/admin/organizationForm';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';


export default withPageAuthRequired(async function Page() {
    return (
        <main>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Admin', href: '/admin' },
              {
                label: 'Edit Organisation',
                href: '/admin/org',
                active: true,
              },
            ]}
          />
          <OrganizationForm />
        </main>
      );
  });

 
 
