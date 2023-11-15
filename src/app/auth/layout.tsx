import { LeftStone } from "@/components/home/stones";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="xl:flex hidden fixed left-0 gl:top-64 top-6 top gl:w-full w-[300px]">
        <LeftStone />
      </div>
      {children}
    </main>
  );
}
