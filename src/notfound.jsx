export const NotFound = () => {

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg">
          📦
        </div>
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Product not found
        </h2>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          We couldn’t find that item. Try searching or browse our catalog.
        </p>
        <a
          href="/products"
          className="mt-6 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition"
        >
          Back to products
        </a>
      </div>
      </>
    )
}