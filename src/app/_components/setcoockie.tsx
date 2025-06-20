"use server"
import { cookies } from "next/headers"


async function setCookie(formData: FormData) {
  "use server"
  const cookie = await cookies();

  const sameSite = formData.get("sameSite") as unknown as "null" | "none" | "lax" | "strict";
  console.log(cookie.set(formData.get("name") as string, formData.get("value") as string, {
    domain: formData.get("domain") as string ?? undefined,
    httpOnly: formData.get("httpOnly") === "true",
    secure: formData.get("secure") === "true",
    path: "/",
    sameSite: sameSite === "null" ? undefined : sameSite,
  }))
}


export const SetCookie: React.FC = async () => {

  return (
    <div className="my-8">
      <form className="flex flex-col gap-2" action={setCookie}>
        <input className="border-2 border-gray-300 p-2" placeholder="Name" type="text" name="name" />
        <input className="border-2 border-gray-300 p-2" placeholder="Value" type="text" name="value" />
        <input className="border-2 border-gray-300 p-2" placeholder="vercel.app" defaultValue="vercel.app" type="domain" name="domain" />
        <label htmlFor="secure">Secure</label>
        <select className="border-2 border-gray-300 p-2" name="secure">
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <label htmlFor="httpOnly">HttpOnly</label>
        <select className="border-2 border-gray-300 p-2" name="httpOnly">
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <label htmlFor="sameSite">sameSite</label>
        <select className="border-2 border-gray-300 p-2" name="sameSite">
          <option value="null">Undefined</option>
          <option value="none">none</option>
          <option value="lax">lax</option>
          <option value="strict">strict</option>
        </select>
        <button className="border-2 border-gray-300 p-2" type="submit">Set Cookie</button>
      </form>
    </div>
  )
}