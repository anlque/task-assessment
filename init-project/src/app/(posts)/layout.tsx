import Link from "next/link"
import Image from "next/image"
import ChartPieSlice from '@/public/ChartPieSlice-d.svg'
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