import DashLayout from "../DashLayout/DashLayout";
import SidebarProvider from "@/context/sidebarContext";

export default function DashWrapper({children}) {
  return (
    <SidebarProvider>
      <DashLayout>
          {children}
      </DashLayout>
    </SidebarProvider>
  )
}
