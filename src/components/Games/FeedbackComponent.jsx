import { useDispatch, useSelector } from 'react-redux'
import Interface from '../Interface'
import { set_session_study } from '../../redux/actions/wordbook'
import { useRouter } from 'next/router'

export default function FeedbackComponent() {

  const today = new Date().toTimeString()

  const dispatch = useDispatch()

  const cards = useSelector(e => e.user_book.cards)
  const cards_session = useSelector(e => e.user_book.cards_session)

  // comparacion de 2 arrays
  const compare = cards.filter(function (e) {
    return cards_session.filter(card=>{
      return card.id === e.id
    })
  })

  // const router = useRouter()
  // const setResetSesion = () => {
  //   dispatch(set_session_study(false))
  //   router.push('/study/')
  // }

  
  // console.log(compare )
  return (
    <Interface gameTitle='feedback' review={false} feedback={true}>
      <div className='w-full flex flex-col justify-center mt-4' >
        <span className='text-center text-2xl font-bold underline my-2'>
          user book list
        </span>

        <div className='border border-gray-700 p-5 flex '>
          <ul className='flex flex-col space-y-2 w-full mx-auto'>

            {compare && compare.map((e, i) => (
              <li className='flex flex-col justify-between' key={i}>
                <span className='text-center -mr-[100%]'>
                  {e.terms.word}               
                </span>

                  <span className='px-2 text-xs font-medium text-blue-100 text-center'>
                    <div className='w-full bg-gray-200 rounded-full dark:bg-gray-800'>
                      <div
                        className='bg-blue-600 leading-none rounded-full'
                        style={{ width: `${(e.easiness * 100) / 5}%` }}> {(e.easiness * 100) / 5}%</div>
                    </div>
                  </span>

              </li>
            ))}
          </ul>

          <ul className='flex flex-col space-y-2 w-full mx-auto'>

            {cards_session.map((e, i) => (
              <li className='flex flex-col' key={i}>
                  {"."}
                
                  <span className='flex-1 px-2 text-xs font-medium text-blue-100 text-center'>
                    <div className='w-full bg-gray-200 rounded-full dark:bg-gray-800'>
                      <div
                        className='bg-blue-600 leading-none rounded-full'
                        style={{ width: `${(e.easiness * 100) / 5}%` }}> {(e.easiness * 100) / 5}%</div>
                    </div>
                  </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </Interface>
  )
}
