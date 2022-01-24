import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/outline";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileDropdown() {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400">
          <UserIcon className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none font-inter">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/users"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Sign In as User
                </a>
              )}
            </Menu.Item>
            <hr className="w-5/6 mx-auto" />
            <div>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/checkout"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    My orders
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/dashboard/product"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sell
                  </a>
                )}
              </Menu.Item>
            </div>
            <hr className="w-5/6 mx-auto" />
            <form>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    onClick={logoutHandler}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
