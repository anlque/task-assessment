import { Sidebar } from "../components/Sidebar/Sidebar"

export default function PostsLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <main className="w-10/12">
          {children}
        </main>   
      </div>
    )
  }