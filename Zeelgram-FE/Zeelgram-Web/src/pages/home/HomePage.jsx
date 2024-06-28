import PostCard from "./PostCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import StoryCard from "./Story/StoryCard";



const whoToFollow = [
    {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  
    {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const users = [
    {
      id: 1,
      username: 'user1',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      username: 'user2',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      username: 'user3',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      username: 'user4',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      username: 'user5',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      username: 'user6',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      username: 'user7',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      username: 'user8',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      username: 'user9',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 10,
      username: 'user10',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 11,
      username: 'user11',
      profilePicture: 'https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

  ];
  

const HomePage = () => {
  return (
    <>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

        <div className="">
          <div className="mx-auto sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8">
            <Sidebar />

            <main className="py-10 pl-9 lg:col-span-8">
          <StoryCard users={users} duration={10} />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </main>

            <aside className="hidden xl:col-span-3 xl:block">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="mt-10 p-6">
                      <div className="flex justify-between">
                        <h2
                          id="who-to-follow-heading"
                          className="text-sm font-semibold text-gray-600"
                        >
                          Suggested for you
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-900">
                          See All
                        </h2>
                      </div>

                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {whoToFollow.map((user) => (
                            <li
                              key={user.handle}
                              className="flex items-center space-x-3 py-4"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900">
                                  <a href={user.href}>{user.name}</a>
                                </p>
                                <p className="text-xs text-gray-500">
                                  Followed by _zuynothuy + 3 m
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-1.5 text-xs font-semibold leading-6 text-[#0095F6]"
                                >
                                  Follow
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="trending-heading">
                  <div className="rounded-lg bg-white shadow"></div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
