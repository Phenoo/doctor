import Container from "@/components/Container"
import Mobile from "@/components/sections/mobile"
import Navbar from "@/components/sections/navbar"
import Sidebar from "@/components/sections/sidebar"
import { Input } from "@/components/ui/input"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
    <section className="bg-secondary text-secondary-foreground">
          <Container>
            <div className="hidden md:flex fixed inset-0 h-screen w-60 bg-background  ">
              <Sidebar />
            </div>
        <nav className="flex gap-4 w-full items-center md:pl-64 pb-8">
          <Mobile />

            <div className="flex-1">
              <Input placeholder="Search for patient" className="border-accent border-2" />
            </div>
            <Navbar />
        </nav>
            <main className="md:pl-56 h-full bg-secondary">
                {children}
            </main>
        </Container>
    </section>
    )
}