"use client";

import { Separator } from "@/components/ui/separator";

export default function ApiKeysPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">API Keys</h3>
        <p className="text-sm text-muted-foreground">
          Manage API keys for your applications and services.
        </p>
      </div>
      <Separator />
    </div>
  );
}
