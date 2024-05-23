import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-item')({
  component: CreateItem,
})

function CreateItem() {
  return <div className="p-2">Hello from CreateItem!</div>
}