import TodoItem from "@/components/todo-item";
import { prisma } from "@/libs/db";
import { ITodoItem } from "@/types/ITodoItem";
import Link from "next/link";

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: {
      complete,
    },
  });
}

const Home = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4 space-y-2">
        {todos.map((todo: { id: string; title: string; complete: boolean }) => (
          <TodoItem toggleTodo={toggleTodo} key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
