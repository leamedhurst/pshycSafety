import Link from 'next/link';
import { BuildingOfficeIcon, PhoneIcon, MapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createOrganization } from '@/app/lib/signup/signupactions';

export default function OrganizationForm() {
  return (
    <form action={createOrganization(FormData)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Organization Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Organization Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter organization name"
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
          <BuildingOfficeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="mb-2 block text-sm font-medium">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter address"
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
          <GlobeAltIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
        {/* Contact Name */}
        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Contact Name
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            placeholder="Enter contact name"
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
          <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Contact Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter contact number"
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
          <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
          <MapIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/your-cancel-link"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
