import Button from '@src/components/Button'
import VerticalLine from '@src/components/VerticalLine'
import '@src/views/ChallengeView.module.css'

const ChallengeView = () => {
  return (
    <div className='mt-10'>
      <div
        id='statsAndOptions'
        className='flex justify-between [&_span]:text-(--neutral5)'
      >
        <div id='stats' className='flex gap-3 items-center'>
          <span>
            WPM: <strong>0</strong>
          </span>
          <VerticalLine />
          <span>
            Accuracy: <strong>100%</strong>
          </span>
          <VerticalLine />
          <span>
            Time: <strong>0:60</strong>
          </span>
        </div>
        <div
          id='options'
          className='flex gap-3 items-center [&_span]:text-[12px]'
        >
          <span>Difficulty:</span>
          <div className='flex gap-1'>
            <Button text='Easy' />
            <Button text='Medium' />
            <Button text='Hard' />
          </div>
          <VerticalLine heightValue='20px'/>
          <span>Mode:</span>
          <div className='flex gap-1'>
            <Button text='Timed (60s)' />
            <Button text='Passage' />
          </div>
        </div>
      </div>
      <hr className='my-4 text-(--neutral3)' />
      <div></div>
    </div>
  )
}

export default ChallengeView
