import TogglePassword from "./TogglePassword";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-lg lg:flex flex-col">
        <h2>Toggle password example</h2>
        <TogglePassword />
      </div>
    </main>
  );
}
