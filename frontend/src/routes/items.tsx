import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items')({
  component: Items,
})

function Items() {
  return <div className="p-2">Hello from Items!</div>
}