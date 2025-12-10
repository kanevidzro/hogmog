import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function ForgotPasswordForm() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <form className="w-full max-w-md p-6">
        <div className="p-6">
          <div>
            <h1 className="mt-6 text-balance text-xl font-semibold">
              <span className="text-muted-foreground">
                Forgot your password?
              </span>{" "}
              Enter your email to reset it
            </h1>
          </div>

          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Your email"
                className="ring-foreground/15 border-transparent ring-1"
              />
            </div>

            <Button className="w-full" size="default">
              Continue
            </Button>
          </div>
        </div>

        <div className="px-6">
          <p className="text-muted-foreground text-sm">
            Don't have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
