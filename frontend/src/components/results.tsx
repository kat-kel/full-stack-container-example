type Joke = {
    id: number
    joke: string
}

const Results = (
    {error, data}:
    {error: boolean, data: null  | Joke[]}
) => {
    if (error === true) {
        let message = "Sorry, the backend server is not responding."
        return (
            <div
              className={`${
                error ? "flex" : "hidden"
              } h-full justify-center items-center text-center`}
            >
              <p className='text-xl font-medium'>
                {message}
                <span role='img' aria-label='dissapointed' className='text-4xl'>
                  &#128542;
                </span>
              </p>
            </div>
          )
    }
    else {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-4 gap-y-3 text-center my-10 py-5'>
            {data.map((joke) => (
                <div
                key={joke.id}
                className=' h-40 flex flex-col justify-center items-center bg-gray-50 rounded-md py-16 px-20'
                >
                <span role='img' aria-label='laugh'>
                    &#128514;
                </span>
                <p className='text-gray-500'>{joke.joke}</p>
                </div>
            ))}
            </div>
        )
    }
}

export { Results }
export type { Joke }