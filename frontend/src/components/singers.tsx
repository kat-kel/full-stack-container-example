import Link from "next/link"
import { Singer } from "./singer.type"

// Error message indicating the singer metadata could not be fetched from the API backend.
const ErrorMessage = () => {
  const message = "Sorry, the backend server is not responding."
  return (
      <div className='h-full justify-center items-center text-center'>
        <p className='py-4 text-xl'>
          {message}
          <span role='img' aria-label='dissapointed' className='text-4xl'>
            &#128542;
          </span>
        </p>
      </div>
    )
}

// Card presenting metadata about one singer.
const SingerCard = ({data}: {data: Singer}) => {
  return (
    <>
      <h2 className="text-gray-500">{data.voiceType}</h2>
      <h1>
        <Link href={data.url} target="_blank" rel="noreferrer noopener"
        className="underline underline-offset-2"
        >
        {data.name}
        </Link>
      </h1>
      {data.maidenName ?
        <p className="text-xs py-2">née {data.maidenName}</p>
        :
        <br className="text-xs py-2"/>
      }
      <p className="text-base">({data.yearsActiveStart} - {data.yearsActiveEnd})</p>
    </>
  )
}

// Grid of cards presenting metadata about singers returned from the API backend.
const Singers = (
    {error, data}:
    {error: boolean, data: null  | Singer[]}
) => {
      if(error === true) {
        return ( <ErrorMessage /> )
      }
      else {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-4 gap-y-3 my-10 py-5 text-center'>
            {data.map((singer) => (
                <div
                key={singer.id}
                className='h-40 flex flex-col justify-center items-center bg-gray-100 rounded-md py-16 px-8'
                >
                 < SingerCard data={singer} />
                </div>
            ))}
            </div>
        )
      }
}

export { Singers, SingerCard }
