import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/session";

export default async function DashboardPage() {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) redirect("/sign-in");

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome to your Dashboard, {user.name}!
      </h1>
      <p className="mt-4">
        This is your personal dashboard where you can manage your account and
        view your activities.
      </p>
    </div>
  );
}
