import Form from '@/app/ui/books/create-form';
import Breadcrumbs from '@/app/ui/books/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const books = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Livres', href: '/dashboard/livres' },
          {
            label: 'Ajouter un nouveau livre',
            href: '/dashboard/livres/ajouter',
            active: true,
          },
        ]}
      />
      <Form books={books} />
    </main>
  );
}
