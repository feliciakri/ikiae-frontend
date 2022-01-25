import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
export const OrderSummaryInfo = (props: any) => {
  const subtotal = props.subtotal;
  const shipping = props.shipping;
  const total = props.total;
  return (
    <>
      <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Subtotal</dt>
          <dd>{subtotal}</dd>
        </div>

        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Shipping</dt>
          <dd>{shipping}</dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
          <dt className="text-base">Total</dt>
          <dd className="text-base">{total}</dd>
        </div>
      </dl>

      <Popover className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
        <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
          <div className="max-w-lg mx-auto">
            <Popover.Button className="w-full flex items-center py-6 font-medium">
              <span className="text-base mr-auto">Total</span>
              <span className="text-base mr-2">{total}</span>
              <ChevronUpIcon
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
        </div>

        <Transition.Root as={Fragment}>
          <div>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                <dl className="max-w-lg mx-auto space-y-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd>RP {subtotal}</dd>
                  </div>

                  {/* <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd>RP {shipping}</dd>
                  </div> */}
                </dl>
              </Popover.Panel>
            </Transition.Child>
          </div>
        </Transition.Root>
      </Popover>
    </>
  );
};
