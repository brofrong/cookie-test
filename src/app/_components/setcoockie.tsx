"use server"
import { cookies } from "next/headers"


async function setCookie(formData: FormData) {
  "use server"
  const cookie = await cookies()
  console.log(cookie.set(formData.get("name") as string, formData.get("value") as string, {
    domain: formData.get("domain") as string ?? undefined,
  }))
}


export const SetCookie: React.FC = async () => {

  return (
    <div className="my-8">
      <form className="flex flex-col gap-2" action={setCookie}>
        <input className="border-2 border-gray-300 p-2" placeholder="Name" type="text" name="name" />
        <input className="border-2 border-gray-300 p-2" placeholder="Value" type="text" name="value" />
        <input className="border-2 border-gray-300 p-2" placeholder="vercel.com" type="domain" name="domain" />
        <button className="border-2 border-gray-300 p-2" type="submit">Set Cookie</button>
      </form>
    </div>
  )
}