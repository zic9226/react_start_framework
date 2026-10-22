// features/stack/TechStack.tsx
import { StackList } from "./components/StackList";
import { stack } from "./data/stack";

export function StackListWidget() {
  return <StackList items={stack} />;
}