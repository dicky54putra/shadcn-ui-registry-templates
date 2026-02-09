import * as React from "react";
import Button from "@/registry/mi/components/atoms/Button/Button.component";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="flex flex-col gap-8 mx-auto px-4 py-8 max-w-3xl min-h-svh">
      <header className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="relative flex flex-col gap-4 p-4 border rounded-lg min-h-[450px]">
          <div className="flex justify-between items-center">
            <h2 className="sm:pl-3 text-muted-foreground text-sm">
              A simple hello world component
            </h2>
          </div>
          <div className="relative flex justify-center items-center min-h-[400px]">
            <Button variant="primary">Dicky</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
