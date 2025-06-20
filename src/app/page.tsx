"use server"

import { cookies } from "next/headers";
import { SetCookie } from "./_components/setcoockie";


export default async function Home() {
  const cookie = await cookies()

  const cokieArray: { name: string, value: string }[] = cookie.getAll()

  return (
    <div className="flex flex-col items-center justify-items-center p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="w-4xl overflow-x-auto">
        <h2>Current cookies</h2>
        <table >
          <thead>
            {cokieArray.map((it) => (
              <tr className="border-2 border-gray-300" key={it.name}>
                <td className="border-2 border-gray-300 p-2">{it.name}</td>
                <td className="border-2 border-gray-300 p-2">{it.value}</td>
              </tr>
            ))}
          </thead>
        </table>
        <SetCookie />
      </main>
    </div>
  );
}
