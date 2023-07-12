export function SeedCard() {
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='w-full min-w-full block p-5 text-xs uppercase text-left text-gray-700 bg-gray-50 dark:bg-zinc-900 dark:text-gray-400'>
                Seeds
            </div>
            <div className='grid border border-gray-200 rounded-lg shadow-sm dark:border-zinc-700 md:grid-cols-4'>
                <figure className='flex flex-col items-center justify-center p-5 text-center bg-white border-r border-gray-200 rounded-bl-lg md:rounded-l-lg md:border-r sm:border-b sm:rounded-none dark:bg-zinc-900 dark:border-zinc-700'>
                    <blockquote className='max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-1 dark:text-gray-400'>
                        <p className='text-sm font-semibold'>A(-1.33, 0.42)</p>
                    </blockquote>
                </figure>
                <figure className='flex flex-col items-center justify-center p-5 text-center bg-white border-r sm:border-b border-gray-200 dark:bg-zinc-900 dark:border-zinc-700'>
                    <blockquote className='max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-1 dark:text-gray-400'>
                        <p className='text-sm font-semibold'>B(1.32, 0.133)</p>
                    </blockquote>
                </figure>
                <figure className='flex flex-col items-center justify-center p-5 text-center bg-white border-r sm:border-b border-gray-200 dark:bg-zinc-900 dark:border-zinc-700'>
                    <blockquote className='max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-1 dark:text-gray-400'>
                        <p className='text-sm font-semibold'>C(1.245, -0.14)</p>
                    </blockquote>
                </figure>
                <figure className='flex flex-col items-center justify-center p-5 text-center bg-white border-r rounded-tr-lg border-gray-200 md:rounded-br-lg sm:border-b sm:rounded-b-lg dark:bg-zinc-900 dark:border-zinc-700'>
                    <blockquote className='max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-1 dark:text-gray-400'>
                        <p className='text-sm font-semibold'>D(-1.06, -0.5)</p>
                    </blockquote>
                </figure>
            </div>
        </div>
    )
}