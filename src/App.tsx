import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import DeleteIcon from '@mui/icons-material/Delete'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <Button variant={'primary'} as="a" href={'/google.com'}>
        Hello
      </Button>

      <Button variant={'primary'}>Go home</Button>
      <DeleteIcon />
      <ArrowDropUpIcon />
    </div>
  )
}
