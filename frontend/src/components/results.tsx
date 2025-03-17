import Link from "next/link"

type Singer = {
    id: number
    name: string
    maidenName: string | null
    voiceType: string
    yearsActiveStart: string
    yearsActiveEnd: string | null
    dateOfDeath: string
    url: string

}

const Results = (
    {error, data}:
    {error: boolean, data: null  | Singer[]}
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
            justify-center items-center 
            gap-x-4 gap-y-3 my-10 py-5
            text-center
            '>
            {data.map((singer) => (
                <div
                key={singer.id}
                className='h-40 flex flex-col justify-center items-center bg-gray-100 rounded-md py-16 px-8'
                >
                  <p className="text-gray-500">{singer.voiceType}</p>
                  <Link href={singer.url} target="_blank" rel="noreferrer noopener"
                  className="underline underline-offset-2"
                  >
                  {singer.name}
                  </Link>
                  {singer.maidenName ?
                    <p className="text-xs py-2">née {singer.maidenName}</p>
                    :
                    <br className="text-xs py-2"/>
                  }
                  <p className="text-base">({singer.yearsActiveStart} - {singer.yearsActiveEnd})</p>
                </div>
            ))}
            </div>
        )
    }
}

export { Results }
export type { Singer }