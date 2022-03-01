import { useState } from 'react'
import * as s from './style';
import { css } from '@emotion/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        css={s.main}
      >
        <div style={s.label}>
          Hello World!
        </div>
      </div>
    </>
  )
}

export default App
